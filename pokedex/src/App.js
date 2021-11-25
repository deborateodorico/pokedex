import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import Pokedex from './components/Pokedex';
import InputCheckbox from './components/InputCheckbox';
import './index.scss';
import Loading from './components/Loading';
import ApiError from './components/ApiError';
import NoResults from './components/NoResults';
import Types from './components/Types';
import Pagination from './components/Pagination';

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
    height: [],
    weight: [],
    type: [],
    limit: 10,
    offset: 0,
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

  const handleCheckboxsFilters = (event, filter) => {
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
    handleCheckboxsFilters(event, 'height');
  };

  const handleChangeCheckboxWeights = (event) => {
    handleCheckboxsFilters(event, 'weight');
  };

  const handleTypeChange = (newTypes) => {
    setFormData({
      ...formData,
      type: newTypes,
    });
  };

  const handleClickSelectedTypes = (event) => {
    handleCheckboxsFilters(event, 'type');
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

  const HandleOnClickFunctions = () => {
    handleCloseModal();
    hadleSubmitButton();
  };

  return (
    <div className='App' style={{ paddingTop: '10px' }}>
      <button type='submit' onClick={handleClickFiltersButton}>
        Filters
      </button>
      <Modal isOpen={modalIsOpen}>
        <div>
          <label>
            <input
              type='text'
              className='input-search'
              name='input-search'
              value={formData.search}
              onChange={searchInputvalue}
              placeholder='Search...'
            />
          </label>
          <InputCheckbox
            weights={formData.weight}
            heights={formData.height}
            onCheckboxWeightsChange={handleChangeCheckboxWeights}
            onCheckboxHeightsChange={handleChangeCheckboxHeights}
          />
          <Types
            onTypeChange={handleTypeChange}
            selectedTypes={formData.type}
            onSelectType={handleClickSelectedTypes}
          />

          <button type='submit' onClick={handleToClearAllFiltersButton}>
            clear filters
          </button>
          <button
            className='button-search'
            type='submit'
            onClick={HandleOnClickFunctions}
          >
            Submit
          </button>
          <button type='submit' onClick={handleCloseModal}>
            Back
          </button>
        </div>
      </Modal>
      <Pagination
        onLimitChange={handleSelectField}
        limit={formData.limit}
        previousButton={handlePreviousButton}
        nextButton={handleNextButton}
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

const mapStateToProps = (store) => ({
  newValue: store.click.newValue,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
