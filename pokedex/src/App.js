import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Pokedex from './components/Pokedex';
import './index.scss';
import Loading from './components/Loading';
import ApiError from './components/ApiError';
import NoResults from './components/NoResults';
import Pagination from './components/Pagination';
import Filters from './components/Filters';
import VectorFilters from './icons/VectorFilters.png';
import Union from './icons/Union.png';
import VectorTeams from './icons/VectorTeams.png';
import user from './icons/user.png';
import favorite from './icons/favorite.png';

const getUrlParameter = (values, param) => {
  let queryParams = '';
  values.forEach((value) => {
    queryParams += `&${param}=${value}`;
  });
  return queryParams;
};

function App(props) {
  const [formData, setFormData] = useState({
    search: '',
    searchMoves: '',
    searchAbilities: '',
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
  }, [formData.limit, formData.offset]);

  const fetchApiPokemon = async () => {
    const apiWeights = getUrlParameter(formData.weight, 'weight');
    const apiHeigths = getUrlParameter(formData.height, 'height');
    const apiSearch = `&search=${formData.search}`;
    const apiTypes = getUrlParameter(formData.type, 'type');
    const apiLimit = `&limit=${formData.limit}`;
    const apiOffset = `&offset=${formData.offset}`;
    const apiMoves = `&move=${formData.move}`;
    const apiAbilitys = `&ability=${formData.ability}`;
    let apiPokemonUrl = process.env.REACT_APP_POKEMON_API_ADDRESS;

    if (formData.weight) {
      apiPokemonUrl += apiWeights;
    }
    if (formData.height) {
      apiPokemonUrl += apiHeigths;
    }
    if (formData.search) {
      apiPokemonUrl += apiSearch;
    }
    if (formData.type) {
      apiPokemonUrl += apiTypes;
    }
    if (formData.limit) {
      apiPokemonUrl += apiLimit;
    }
    if (formData.offset) {
      apiPokemonUrl += apiOffset;
    }
    if (formData.move.length) {
      apiPokemonUrl += apiMoves;
    }
    if (formData.ability.length) {
      apiPokemonUrl += apiAbilitys;
    }

    try {
      setPokemonRequestState({
        ...pokemonRequestState,
        isLoading: true,
        error: false,
      });
      const response = await fetch(apiPokemonUrl);
      setPokemonRequestState({
        ...pokemonRequestState,
        isLoading: false,
      });
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

  const searchInputvalue = (event) => {
    setFormData({
      ...formData,
      search: event.target.value,
    });
  };

  const searchMoves = (event) => {
    setFormData({
      ...formData,
      searchMoves: event.target.value,
    });
  };

  const searchAbilities = (event) => {
    setFormData({
      ...formData,
      searchAbilities: event.target.value,
    });
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
      searchMoves: '',
      searchAbilities: '',
      height: [],
      weight: [],
      type: [],
      move: [],
      ability: [],
    });
  };

  const handleSelectField = (event) => {
    const newLimitValue = event.target.value;
    setFormData({
      ...formData,
      limit: newLimitValue,
    });
  };
  const handleDisableButton = () => {
    return !formData.offset;
  };

  const handlePreviousButton = () => {
    setFormData({
      ...formData,
      offset: formData.offset - formData.limit,
    });
  };

  const handleNextButton = () => {
    setFormData({
      ...formData,
      offset: formData.offset + formData.limit,
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
      <div className='header-container'>
        <div className='div-union-icon'>
          <img src={Union} alt='union-icon' className='union-img' />
          <p className='pokedex-union'>Pokedex</p>
        </div>
        <div className='div-team-icon'>
          <img src={VectorTeams} alt='teams-icon' className='team-img' />
          <p className='pokedex-teams'>Teams</p>
        </div>
        <div className='div-favorite-icon'>
          <img src={favorite} alt='heart-icon' className='favorite-img' />
          <p className='pokedex-heart'>Favorite</p>
        </div>
        <div className='div-user-icon'>
          <img src={user} alt='perfil-icon' className='user-img' />
          <p className='pokedex-perfil'>Sign in</p>
        </div>
      </div>
      <div className='pokedex-and-search-container'>
        <b>
          <p className='section-paragraph'>Pokedex</p>
        </b>
        <label htmlFor='input-search'>
          <input
            type='text'
            className='input-search'
            name='input-search'
            value={formData.search}
            onChange={searchInputvalue}
            placeholder='Search...'
          />
        </label>
      </div>
      <div className='div-filters-button-container'>
        <button
          type='submit'
          onClick={handleClickFiltersButton}
          className='filters-button'
        >
          <div className='div-filters-button'>
            <img
              src={VectorFilters}
              alt='filters-icon'
              className='filters-img'
            />
          </div>
          Filters
        </button>
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
          searchMoves={formData.searchMoves}
          searchAbilities={formData.searchAbilities}
          selectedWeights={formData.weight}
          selectedHeights={formData.height}
          selectedTypes={formData.type}
          moves={formData.move}
          abilities={formData.ability}
          onCheckboxWeightsChange={handleChangeCheckboxWeights}
          onCheckboxHeightsChange={handleChangeCheckboxHeights}
          onTypeChange={handleTypeChange}
          onSelectType={handleClickSelectedTypes}
          onClearAllFilters={handleToClearAllFiltersButton}
          onClickApplyButton={handleClickApplyButton}
          onCloseModal={handleCloseModal}
          onCheckboxMovesChange={handleChangeCheckboxMoves}
          onCheckboxAbilitysChange={handleChangeCheckboxAbilitys}
          onSearchMove={searchMoves}
          onSearchAbilities={searchAbilities}
        />
      </Modal>
      <Pagination
        onLimitChange={handleSelectField}
        limit={formData.limit}
        onClickPreviousButton={handlePreviousButton}
        onClickNextButton={handleNextButton}
        enableOrDisableButtons={pokemonRequestState.isLoading}
        onChangePreviousButton={handleDisableButton}
      />
      {pokemonRequestState.error && <ApiError />}
      {pokemonRequestState.data?.length === 0 && <NoResults />}
      {pokemonRequestState.isLoading && <Loading />}
      {!pokemonRequestState.error && !pokemonRequestState.isLoading && (
        <Pokedex pokemons={pokemonRequestState.data} />
      )}
    </div>
  );
}

export default App;
