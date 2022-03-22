import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './store/index';
import PokemonDetails from './components/PokemonDetails';
import SigniN from './components/SignIn';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/pokemon/:name' element={<PokemonDetails />} />
        <Route path='/sign-in' element={<SigniN />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
