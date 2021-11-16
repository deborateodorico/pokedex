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

  const handleChangeCheckboxHeights = (event) => {
    const checkboxHeigthsValue = event.target.value;
    if (formData.height.includes(checkboxHeigthsValue)){
      setFormData((prevState) => {
        const removeCheckboxValue = checkboxHeigthsValue;
        const indexFromValueToRemove = formData.height.indexOf(removeCheckboxValue)
        
        prevState.height.splice(indexFromValueToRemove, 1)

        handleHeightChange(prevState.height)
  
        return {
          ...prevState,
          height: prevState.height,
        }
      })
    } else {
      setFormData((prevState) => {
        handleHeightChange([...prevState.height, event.target.value])
        return {
          ...prevState,
          height: [...prevState.height, event.target.value],
        }
      })                    
    }
  }

  const handleHeightChange = (newHeight) => {
    setFormData({
      ...formData,
      height: newHeight,
    })
  }

  const handleChangeCheckboxWeights = (event) => {
    const checkboxWeightsValue = event.target.value;
    if (formData.weight.includes(checkboxWeightsValue)){
      setFormData((prevState) => {
        const removeCheckboxValue = checkboxWeightsValue;
        const indexFromValueToRemove = formData.weight.indexOf(removeCheckboxValue)
        
        prevState.weight.splice(indexFromValueToRemove, 1)

        handleWeightChange(prevState.weight)
  
        return {
          ...prevState,
          weight: prevState.weight,
        }
      })
    } else {
      setFormData((prevState) => {
        handleWeightChange([...prevState.weight, event.target.value])
        return {
          ...prevState,
          weight: [...prevState.weight, event.target.value],
        }
      })                    
    }
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
