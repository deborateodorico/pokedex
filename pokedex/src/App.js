import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Pokedex from './components/Pokedex';
import './index.scss';
import Loading from './components/Loading';
import ApiError from './components/ApiError';
import NoResults from './components/NoResults';
import Pagination from './components/Pagination';
import Filters from './components/Filters';
import AppHeader from './components/AppHeader';
import debounceFetch from './components/debounceFetch';
import vectorFilters from './icons/vectorFilters.png';
import { changeSearch, addPokemonList } from './actions/index';

const getUrlParameter = (values, param) => {
  let queryParams = '';
  values.forEach((value) => {
    queryParams += `&${param}=${value}`;
  });
  return queryParams;
};

function App({
  weight,
  height,
  type,
  move,
  ability,
  search,
  actions,
  limit,
  offset,
  pokemonsList,
}) {
  const [loadingPokemonsData, setLoadingPokemonsData] = useState(false);

  const [pokemonRequestState, setPokemonRequestState] = useState({
    isLoading: false,
    error: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchApiPokemon();
  }, []);

  useEffect(() => {
    fetchApiPokemon();
  }, [limit, offset, search]);

  const fetchApiPokemon = async () => {
    const apiWeights = getUrlParameter(weight, 'weight');
    const apiHeigths = getUrlParameter(height, 'height');
    const apiSearch = `&search=${search}`;
    const apiTypes = getUrlParameter(type, 'type');
    const apiLimit = `&limit=${limit}`;
    const apiOffset = `&offset=${offset}`;
    const apiMoves = `&move=${move}`;
    const apiAbilitys = `&ability=${ability}`;
    let apiPokemonUrl = process.env.REACT_APP_POKEMON_API_ADDRESS;

    if (weight) {
      apiPokemonUrl += apiWeights;
    }
    if (height) {
      apiPokemonUrl += apiHeigths;
    }
    if (search) {
      apiPokemonUrl += apiSearch;
    }
    if (type) {
      apiPokemonUrl += apiTypes;
    }
    if (limit) {
      apiPokemonUrl += apiLimit;
    }
    if (offset) {
      apiPokemonUrl += apiOffset;
    }
    if (move.length) {
      apiPokemonUrl += apiMoves;
    }
    if (ability.length) {
      apiPokemonUrl += apiAbilitys;
    }

    try {
      setLoadingPokemonsData(true);
      const response = await debounceFetch(apiPokemonUrl);
      setLoadingPokemonsData(false);

      const pokemonData = await response.json();

      actions.addPokemons(pokemonData.results);
    } catch (error) {
      setPokemonRequestState({
        ...pokemonRequestState,
        error: true,
        isLoading: false,
      });
    }
  };

  const onSearchChange = (e) => {
    const newValue = e.target.value;

    actions.changeSearch(newValue);
  };

  const hadleSubmitButton = () => {
    fetchApiPokemon();
  };

  const handleClickFiltersButton = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleClickApplyButton = () => {
    handleCloseModal();
    hadleSubmitButton();
  };

  const element = <h1 className='greeting'>Hello, world!</h1>;
  const ElementComponent = () => <h2>Hey!</h2>;

  return (
    <div className='app' style={{ paddingTop: '10px' }}>
      {!modalIsOpen && <AppHeader />}
      {element}
      <ElementComponent />
      <div className='container app-container'>
        <div className='row gx-2'>
          <div className='col-12'>
            <div className='app__search'>
              <p className='app__search__paragraph'>
                <b>Pokedex</b>
              </p>

              <input
                type='text'
                className='app__search__input'
                name='input-search'
                value={search}
                onChange={onSearchChange}
                placeholder='Search...'
              />
            </div>
            <div className='app__filters-section'>
              <button
                type='submit'
                onClick={handleClickFiltersButton}
                className='app__filters-section__button'
              >
                <div>
                  <img
                    src={vectorFilters}
                    alt='filters-icon'
                    className='app__filters-section__button__img'
                  />
                </div>
                Filters
              </button>
            </div>
            <Pagination
              enableOrDisableButtons={pokemonRequestState.isLoading}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content: {
            maxWidth: 664,
            width: 'calc(100% - 20px)',
            height: 718,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            paddingTop: 0,
          },
        }}
      >
        <Filters
          modalIsOpen={modalIsOpen}
          onClickApplyButton={handleClickApplyButton}
          onCloseModal={handleCloseModal}
        />
      </Modal>
      {pokemonRequestState.error && <ApiError />}
      {pokemonsList?.length === 0 && <NoResults />}
      {loadingPokemonsData && <Loading />}
      {!pokemonRequestState.error && !loadingPokemonsData && (
        <Pokedex pokemons={pokemonsList} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.formData,
    pokemonsList: state.pokemonsList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeSearch: (newValue) => dispatch(changeSearch(newValue)),
      addPokemons: (newValue) => dispatch(addPokemonList(newValue)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
