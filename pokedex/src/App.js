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
    height: '',
    weigth: '', 
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
    
    let apiWeigths = `&weights=${formData.weigth}`;
    let apiHeigths = `&height=${formData.height}`;
    let apiSearch = `&search=${formData.search}`;
    let apiTypes = getUrl(formData.type, 'type');
    let apiPokemonUrl = process.env.REACT_APP_POKEMON_API_ADDRESS;
     
    if (formData.weigth) {
      apiPokemonUrl += apiWeigths;
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

  const handleChangeCheckboxWeigths = (event) => {
    const checkboxWeigthsValue = event.target.value;

    if(checkboxWeigthsValue === formData.weigth) {
      setFormData({
        ...formData,
        weigth: '',
      })
    } else {
      setFormData({
        ...formData,
        weigth: event.target.value,
      })
    }
  }

  const handleChangeCheckboxHeights = (event) => {
    const checkboxHeigthsValue = event.target.value;
    if(checkboxHeigthsValue === formData.height) {
      setFormData({
        ...formData,
        height: '',
      })
    } else {
      setFormData({
        ...formData,
        height: event.target.value,
      })
    }
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
        weigths={formData.weigth}
        heights={formData.height}
        checkboxWeigths={handleChangeCheckboxWeigths}
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
