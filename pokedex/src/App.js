import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import Pokedex from './components/Pokedex';
import './index.scss';

function App(props) {

  const [pokemons, setPokemons] = useState([]);
  const [checkboxWeigths, setCheckboxWeigths] = useState('');
  const [checkboxHeights, setCheckboxHeights] = useState('');


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
          1<input type="checkbox" name="pokemon-weigths" value="1" checked={checkboxWeigths === "1"} onChange={hancleChangeCheckboxWeigths}/>
          2<input type="checkbox" name="pokemon-weigths" value="2" checked={checkboxWeigths === "2"} onChange={hancleChangeCheckboxWeigths}/>
          3<input type="checkbox" name="pokemon-weigths" value="3" checked={checkboxWeigths === "3"} onChange={hancleChangeCheckboxWeigths}/>
          4<input type="checkbox" name="pokemon-weigths" value="4" checked={checkboxWeigths === "4"} onChange={hancleChangeCheckboxWeigths}/>
          5<input type="checkbox" name="pokemon-weigths" value="5" checked={checkboxWeigths === "5"} onChange={hancleChangeCheckboxWeigths}/>
        </div>
        <div>
          <p>heights</p>
          1<input type="checkbox" name="pokemon-heights" value="1" checked={checkboxHeights === "1"} onChange={hancleChangeCheckboxHeights}/>
          2<input type="checkbox" name="pokemon-heights" value="2" checked={checkboxHeights === "2"} onChange={hancleChangeCheckboxHeights}/>
          3<input type="checkbox" name="pokemon-heights" value="3" checked={checkboxHeights === "3"} onChange={hancleChangeCheckboxHeights}/>
          4<input type="checkbox" name="pokemon-heights" value="4" checked={checkboxHeights === "4"} onChange={hancleChangeCheckboxHeights}/>
          5<input type="checkbox" name="pokemon-heights" value="5" checked={checkboxHeights === "5"} onChange={hancleChangeCheckboxHeights}/>
        </div>
      </div>
      <button type="submit" onClick={hadleSubmitButton}>Submit</button>
      <div>
        <section className="pokemon-list">
          {pokemons.map((pokemon) => {
            return  (
              <div key={pokemon.id} className="pokemon">
                <img src={pokemon.picture} alt={pokemon.name} />
                <p>#{pokemon.id} {pokemon.name}</p>
              </div>
            );
          })}
        </section>
    </div>
      {pokemons.length === 0 && <Pokedex />} 
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.click.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
