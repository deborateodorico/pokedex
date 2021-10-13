import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  const { newValue } = props; // nao está definido
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input type='text' />
      <button>
        Click me!
      </button>
      <p>{newValue}</p>
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.click.newValue
});

export default connect(mapStateToProps)(App);
