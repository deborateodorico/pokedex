import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import Pokedex from './components/Pokedex';
import InputCheckbox from './components/InputCheckbox';
import './index.scss';
import Loading from './components/Loading';
import ApiError from './components/ApiError';
import NoResults from './components/NoResults';
import Types from './components/Types';

function App(props) {
  const [formData, setFormData] = useState({
    search: '',
    height: [],
    weight: [], 
    type: [],
  })
  const [pokemonRequestState, setPokemonRequestState] = useState({
    data: null,
    isLoading: false,
    error: false,
  })

  useEffect(() => {
    fetchApiPokemon()
  }, []);

  const getUrl = (values, str) => {
    let string = '';
    values.forEach((value) => {
      string += `&${str}=${value}`;
    })
    return string;
  }
 
  const fetchApiPokemon = async () => {
    
    let apiWeights = getUrl(formData.weight, 'weight')
    let apiHeigths = getUrl(formData.height, 'height')
    let apiSearch = `&search=${formData.search}`;
    let apiTypes = getUrl(formData.type, 'type');
    let apiPokemonUrl = process.env.REACT_APP_POKEMON_API_ADDRESS;
     
    if (formData.weight) {
      apiPokemonUrl += apiWeights;
    } 
    if (formData.height) {
      apiPokemonUrl += apiHeigths;
    }
    if(formData.search) {
      apiPokemonUrl += apiSearch;
    }
    if(formData.type) {
      apiPokemonUrl += apiTypes;
    }
   
    try{
      setPokemonRequestState({
        ...pokemonRequestState,
        isLoading: true,
        error: false,
      })
      const response = await fetch(apiPokemonUrl);
      setPokemonRequestState({
        ...pokemonRequestState,
        isLoading: false,
      })
      const pokemonData = await response.json();
      setPokemonRequestState({
        ...pokemonRequestState,
        data: pokemonData.results
      })
    } catch(error) {
      setPokemonRequestState({
        ...pokemonRequestState,
        error: true,
        isLoading: false,
      })
    }
  }

  const searchInputvalue = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    })
  }

  const handleCheckboxsFilters = (event, filter, func) => {
    const checkboxValue = event.target.value;
    if (formData[filter].includes(checkboxValue)){
      setFormData((prevState) => {
        const removeCheckboxValue = checkboxValue;
        const indexFromValueToRemove = formData[filter].indexOf(removeCheckboxValue)
        
        prevState[filter].splice(indexFromValueToRemove, 1)

        func(prevState[filter])
  
        return {
          ...prevState,
          [filter]: prevState[filter],
        }
      })
    } else {
      setFormData((prevState) => {
        func([...prevState[filter], event.target.value])
        return {
          ...prevState,
          [filter]: [...prevState[filter], event.target.value],
        }
      })                    
    }
  }

  const handleChangeCheckboxHeights = (event) => {
    handleCheckboxsFilters(event, 'height', handleHeightChange);
  }

  const handleHeightChange = (newHeight) => {
    setFormData({
      ...formData,
      height: newHeight,
    })
  }

  const handleChangeCheckboxWeights = (event) => {
    handleCheckboxsFilters(event, 'weight', handleWeightChange)
  }

  const handleWeightChange = (newWeight) => {
    setFormData({
      ...formData,
      weight: newWeight,
    })
  }

  const handleTypeChange = (newTypes) => {
    setFormData({
      ...formData,
      type: newTypes,
    })
  }

  const hadleSubmitButton = () => {
    fetchApiPokemon();
  }
    
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <label>
        <input type="text" className="input-search" name="input-search" onChange={searchInputvalue} placeholder="Search..."/>
      </label>
      <InputCheckbox
        weights={formData.weight}
        heights={formData.height}
        checkboxWeights={handleChangeCheckboxWeights}
        checkboxHeights={handleChangeCheckboxHeights}
        />
      <Types onTypeChange={handleTypeChange} />
      <button className="button-search" type="submit" onClick={hadleSubmitButton}>Submit</button>
      {pokemonRequestState.error && <ApiError />}
      {pokemonRequestState.data?.length === 0 && <NoResults />}
      {pokemonRequestState.isLoading && <Loading />}
      {!pokemonRequestState.error && !pokemonRequestState.isLoading && <Pokedex pokemons={pokemonRequestState.data} />}
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.click.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
