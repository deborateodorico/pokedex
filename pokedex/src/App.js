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
import { CHANGE_SEARCH_VALUE } from './actions/actionsTypes';

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
  changeSearch,
  limit,
  offset,
}) {
  const [loadingPokemonsData, setLoadingPokemonsData] = useState(false);

  const [formData, setFormData] = useState({
    search: '',
    height: [],
    weight: [],
    type: [],
    limit: 10,
    offset: 0,
    move: [],
    ability: [],
  });

  const [pokemonRequestState, setPokemonRequestState] = useState({
    data: null,
    isLoading: false,
    error: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchApiPokemon();
  }, []);

  useEffect(() => {
    fetchApiPokemon();
  }, [limit, offset]);

  useEffect(() => {
    fetchApiPokemon();
  }, [search]);

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
      setPokemonRequestState({
        ...pokemonRequestState,
        data: pokemonData.results,
      });
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

    changeSearch(newValue);
  };

  const handleCheckboxFilters = (event, filter) => {
    const checkboxValue = event.target.value;
    if (formData[filter].includes(checkboxValue)) {
      setFormData((prevState) => {
        const removeCheckboxValue = checkboxValue;
        const indexFromValueToRemove =
          formData[filter].indexOf(removeCheckboxValue);

        prevState[filter].splice(indexFromValueToRemove, 1);

        return {
          ...prevState,
          [filter]: prevState[filter],
        };
      });
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [filter]: [...prevState[filter], event.target.value],
        };
      });
    }
  };

  const handleChangeCheckboxHeights = (event) => {
    handleCheckboxFilters(event, 'height');
  };

  const handleChangeCheckboxWeights = (event) => {
    handleCheckboxFilters(event, 'weight');
  };

  const handleTypeChange = (newTypes) => {
    setFormData({
      ...formData,
      type: newTypes,
    });
  };

  const handleClickSelectedTypes = (event) => {
    handleCheckboxFilters(event, 'type');
  };

  const handleChangeCheckboxMoves = (event) => {
    handleCheckboxFilters(event, 'move');
  };

  const handleChangeCheckboxAbilitys = (event) => {
    handleCheckboxFilters(event, 'ability');
  };
  const hadleSubmitButton = () => {
    fetchApiPokemon();
  };

  const handleToClearAllFiltersButton = () => {
    setFormData({
      ...formData,
      search: '',
      height: [],
      weight: [],
      type: [],
      move: [],
      ability: [],
    });
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

  return (
    <div className='app' style={{ paddingTop: '10px' }}>
      <AppHeader />
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
          onCheckboxWeightsChange={handleChangeCheckboxWeights}
          onCheckboxHeightsChange={handleChangeCheckboxHeights}
          onTypeChange={handleTypeChange}
          onSelectType={handleClickSelectedTypes}
          onClearAllFilters={handleToClearAllFiltersButton}
          onClickApplyButton={handleClickApplyButton}
          onCloseModal={handleCloseModal}
          onCheckboxMovesChange={handleChangeCheckboxMoves}
          onCheckboxAbilitysChange={handleChangeCheckboxAbilitys}
        />
      </Modal>

      {pokemonRequestState.error && <ApiError />}
      {pokemonRequestState.data?.length === 0 && <NoResults />}
      {loadingPokemonsData && <Loading />}

      {!pokemonRequestState.error && !loadingPokemonsData && (
        <Pokedex pokemons={pokemonRequestState.data} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    weight: state.formData.weight,
    height: state.formData.height,
    type: state.formData.type,
    move: state.formData.move,
    ability: state.formData.ability,
    search: state.formData.search,
    limit: state.formData.limit,
    offset: state.formData.offset,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSearch: (newValue) =>
      dispatch({ type: CHANGE_SEARCH_VALUE, payload: { search: newValue } }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
