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

function App(props) {
  const [checkboxWeigths, setCheckboxWeigths] = useState('');
  const [checkboxHeights, setCheckboxHeights] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [pokemonRequestState, setPokemonRequestState] = useState({
    data:[],
    isLoading: false,
    error: false,
  })


  useEffect(() => {
    fetchApiPokemon()
  }, []);
 
  const fetchApiPokemon = async () => {
    let apiWeigths = `&weights=${checkboxWeigths}`;
    let apiHeigths = `&height=${checkboxHeights}`;
    let apiSearch = `&search=${searchInput}`
    let apiPokemonUrl = process.env.REACT_APP_POKEMON_API_ADDRESS;
     
    if (checkboxWeigths) {
      apiPokemonUrl += apiWeigths;
    } 
    if (checkboxHeights) {
      apiPokemonUrl += apiHeigths;
    }
    if(searchInput) {
      apiPokemonUrl += apiSearch;
    }
   
    try{
      setError(false);
      setLoading(true);
      setNoResults(false)
      const response = await fetch(apiPokemonUrl);
      setLoading(false);
      const pokemonData = await response.json();
      if (pokemonData.results.length === 0) {
        setNoResults(true);
      }
      setPokemonRequestState({
        ...pokemonRequestState,
        data: pokemonData.results
      })
    } catch(error) {
      setError(true);
      setLoading(false);
      setNoResults(false);
    }
  }

  const searchInputvalue = (event) => {
    const input = event.target.value;
    setSearchInput(input);
  }

  const handleChangeCheckboxWeigths = (event) => {
    const checkboxWeigthsValue = event.target.value;

    if(checkboxWeigthsValue === checkboxWeigths) {
      setCheckboxWeigths('');
    } else {
      setCheckboxWeigths(event.target.value);
    }
  }

  const handleChangeCheckboxHeights = (event) => {
    const checkboxHeigthsValue = event.target.value;
    if(checkboxHeigthsValue === checkboxHeights) {
      setCheckboxHeights('');
    } else {
      setCheckboxHeights(event.target.value);
    }
    
  }

  const hadleSubmitButton = () => {
    fetchApiPokemon();
  }
    
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <label>
        <input type="text" name="input-search" onChange={searchInputvalue} placeholder="search pokemon"/>
      </label>
      <InputCheckbox
        weigths={checkboxWeigths}
        heights={checkboxHeights}
        checkboxWeigths={handleChangeCheckboxWeigths}
        checkboxHeights={handleChangeCheckboxHeights}
        />
     
      <button type="submit" onClick={hadleSubmitButton}>Submit</button>
      {error && <ApiError />}
      { noResults && <NoResults />}
      {loading && <Loading />}
      {!error && !loading && <Pokedex pokemons={pokemonRequestState.data} />}
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.click.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
