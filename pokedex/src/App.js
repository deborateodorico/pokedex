import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Pokedex from './components/Pokedex';
import './index.scss';
import Loading from './components/Loading';
import ApiError from './components/ApiError';
import NoResults from './components/NoResults';
import Pagination from './components/Pagination';
import Filters from './components/Filters';
import vectorFilters from './icons/vectorFilters.png';
import AppHeader from './components/AppHeader';

const getUrlParameter = (values, param) => {
  let queryParams = '';
  values.forEach((value) => {
    queryParams += `&${param}=${value}`;
  });
  return queryParams;
};

const debouncePromisse = (func, wait) => {
  let timer = null;
  return async function (...args) {
    console.log(args);
    clearTimeout(timer);
    await new Promise((resolve) => {
      timer = setTimeout(resolve, wait);
    });
    return func(...args);
  };
};

const debouncedFetch = debouncePromisse(fetch, 1000);

function App(props) {
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
  }, [formData.limit, formData.offset]);

  useEffect(() => {
    fetchApiPokemon();
  }, [formData.search]);

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
      // setPokemonRequestState((prevState) => {
      //   if (prevState.isLoading === false) {
      //     return {
      //       ...prevState,
      //       error: false,
      //       isLoading: true,
      //     };
      //   } else {
      //     return prevState;
      //   }
      // });

      // setPokemonRequestState({
      //   ...pokemonRequestState,
      //   isLoading: true,
      // });
      const response = await debouncedFetch(apiPokemonUrl);
      // console.log('2');
      // setPokemonRequestState({
      //   ...pokemonRequestState,
      //   isLoading: false,
      // });
      const pokemonData = await response.json();
      setPokemonRequestState({
        ...pokemonRequestState,
        data: pokemonData.results,
      });
    } catch (error) {
      console.error(error);
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
                value={formData.search}
                onChange={searchInputvalue}
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
              onLimitChange={handleSelectField}
              limit={formData.limit}
              onClickPreviousButton={handlePreviousButton}
              onClickNextButton={handleNextButton}
              enableOrDisableButtons={pokemonRequestState.isLoading}
              onChangePreviousButton={handleDisableButton}
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
        />
      </Modal>

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
