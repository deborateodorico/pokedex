import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import Pokedex from './components/Pokedex';
import InputCheckbox from './components/InputCheckbox';
import './index.scss';
import Loading from './components/Loading';
import ApiError from './components/ApiError';

function App(props) {
  const [pokemons, setPokemons] = useState([]);
  const [checkboxWeigths, setCheckboxWeigths] = useState('');
  const [checkboxHeights, setCheckboxHeights] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    fetchApiPokemon()
  }, []);
 
  const fetchApiPokemon = async () => {
    let apiWeigths = `&weights=${checkboxWeigths}`;
    let apiHeigths = `&height=${checkboxHeights}`;
    let apiPokemonUrl = process.env.REACT_APP_POKEMON_API_ADDRESS;
     
    if (checkboxWeigths) {
      apiPokemonUrl += apiWeigths;
    } 
    if (checkboxHeights) {
      apiPokemonUrl += apiHeigths;
    }
   
    try{
      setError(false);
      setLoading(true);
      const response = await fetch(apiPokemonUrl);
      setLoading(false);
      const pokemonData = await response.json();
      setPokemons (pokemonData.results);
    } catch(error) {
      setError(true);
      setLoading(false);
    }
    
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
    }
    setCheckboxHeights(event.target.value);
  }

  const hadleSubmitButton = () => {
    fetchApiPokemon();
  }
    
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <InputCheckbox
        weigths={checkboxWeigths}
        heights={checkboxHeights}
        checkboxWeigths={handleChangeCheckboxWeigths}
        checkboxHeights={handleChangeCheckboxHeights}
        />
     
      <button type="submit" onClick={hadleSubmitButton}>Submit</button>
      {error && <ApiError />}
      {loading && <Loading />}
      {!error && !loading && <Pokedex pokemons={pokemons} />}
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.click.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
