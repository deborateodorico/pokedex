import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import Pokedex from './components/Pokedex';
import './index.scss';

function App(props) {

  const [pokemons, setPokemons] = useState([]);
  const [checkboxWeigths, setCheckboxWeigths] = useState('');
  const [checkboxHeights, setCheckboxHeights] = useState('');

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
   
    const response = await fetch(apiPokemonUrl)
    const pokemonData = await response.json();
    setPokemons (pokemonData.results);
  }

  const hancleChangeCheckboxWeigths = (event) => {
    const checkboxWeigthsValue = event.target.value;

    if(checkboxWeigthsValue === checkboxWeigths) {
      setCheckboxWeigths('');
    } else {
      setCheckboxWeigths(event.target.value);
    }
  }

  const hancleChangeCheckboxHeights = (event) => {
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
      <div>
        <div>
          <p>weights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-weigths" value="1" checked={checkboxWeigths === "1"} onChange={hancleChangeCheckboxWeigths}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-weigths" value="2" checked={checkboxWeigths === "2"} onChange={hancleChangeCheckboxWeigths}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-weigths" value="3" checked={checkboxWeigths === "3"} onChange={hancleChangeCheckboxWeigths}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-weigths" value="4" checked={checkboxWeigths === "4"} onChange={hancleChangeCheckboxWeigths}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-weigths" value="5" checked={checkboxWeigths === "5"} onChange={hancleChangeCheckboxWeigths}/>
          </label>
        </div>
        <div>
          <p>heights</p>
          <label>
            1
            <input type="checkbox" name="pokemon-heights" value="1" checked={checkboxHeights === "1"} onChange={hancleChangeCheckboxHeights}/>
          </label>
          <label>
            2
            <input type="checkbox" name="pokemon-heights" value="2" checked={checkboxHeights === "2"} onChange={hancleChangeCheckboxHeights}/>
          </label>
          <label>
            3
            <input type="checkbox" name="pokemon-heights" value="3" checked={checkboxHeights === "3"} onChange={hancleChangeCheckboxHeights}/>
          </label>
          <label>
            4
            <input type="checkbox" name="pokemon-heights" value="4" checked={checkboxHeights === "4"} onChange={hancleChangeCheckboxHeights}/>
          </label>
          <label>
            5
            <input type="checkbox" name="pokemon-heights" value="5" checked={checkboxHeights === "5"} onChange={hancleChangeCheckboxHeights}/>
          </label>
        </div>
      </div>
      <button type="submit" onClick={hadleSubmitButton}>Submit</button>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.click.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
