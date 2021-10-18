import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import Pokedex from './components/Pokedex';
import './index.scss';

function App(props) {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  const { clickButton, newValue } = props;
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input type='text' onChange={ handleChange } value={inputValue} />
      <button onClick={() => clickButton(inputValue)}>
        Click me!
      </button>
      <p>{newValue}</p>
      <Pokedex />
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.click.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
