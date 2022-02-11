import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import Loading from './Loading';
import ApiError from './ApiError';
import ModalDetails from './ModalDetails';
import PokemonPictureContainer from './PokemonPictureContainer';
import PokemonInformationContainer from './detailsPageInfo/PokemonInformationContainer';
import PokemonFooterContainer from './PokemonFooterContainer';
import { addPokemon } from '../actions/index';

function PokemonDetails({ name, state, actions }) {
  const params = useParams();
  const pokemon = state.pokemonInfo.pokemons[params.name];

  useEffect(() => {
    fetchApiPageDetails();
  }, []);

  const [pokemonDetailRequest, setPokemonDetailRequest] = useState({
    name: '',
    id: 0,
    picture: '',
    types: [],
    abilities: [],
    height: 0,
    weight: 0,
    stats: [],
  });

  const [fetchDetailsStatus, setFetchDetailsStatus] = useState({
    isLoading: true,
    error: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [clickedAbility, setClikedAbility] = useState({
    AbilityName: '',
    url: '',
  });

  let apiPokemonDetails = `${process.env.REACT_APP_DETAILS_PAGE_ADDRESS}/${params.name}`;

  const fetchApiPageDetails = async () => {
    try {
      setFetchDetailsStatus({ isLoading: true });
      const response = await fetch(apiPokemonDetails);
      setFetchDetailsStatus({ isLoading: false });

      const pokemonData = await response.json();
      actions.addPokemonActions({
        name: pokemonData.name,
        id: pokemonData.id,
        picture: pokemonData.sprites.other['official-artwork'].front_default,
        types: pokemonData.types,
        abilities: pokemonData.abilities,
        height: pokemonData.height,
        weight: pokemonData.weight,
        stats: pokemonData.stats,
      });
    } catch (error) {
      setFetchDetailsStatus({
        ...fetchDetailsStatus,
        error: true,
        isLoading: false,
      });
    }
  };

  const handleClickAbility = (abilityName, abilityUrl) => {
    setModalIsOpen(true);
    setClikedAbility({
      ...clickedAbility,
      AbilityName: abilityName,
      url: abilityUrl,
    });
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='details-page'>
      <AppHeader />
      {!fetchDetailsStatus.isLoading && (
        <div className='details-container'>
          <PokemonPictureContainer
            picture={pokemonDetailRequest.picture}
            types={pokemonDetailRequest.types}
          />
          <PokemonInformationContainer
            id={pokemonDetailRequest.id}
            name={pokemonDetailRequest.name}
            height={pokemonDetailRequest.height}
            weight={pokemonDetailRequest.weight}
            abilities={pokemonDetailRequest.abilities}
            types={pokemonDetailRequest.types}
            stats={pokemonDetailRequest.stats}
            onClickAbility={handleClickAbility}
          />
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content: {
            maxWidth: 664,
            width: 'calc(100% - 20px)',
            height: 272,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            borderRadius: 8,
          },
        }}
      >
        <ModalDetails
          onCloseModal={handleCloseModal}
          ability={clickedAbility.AbilityName}
          url={clickedAbility.url}
        />
      </Modal>
      <PokemonFooterContainer />
      {fetchDetailsStatus.error && <ApiError />}
      {fetchDetailsStatus.isLoading && <Loading />}
    </div>
  );
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPokemonActions: (newValue) => dispatch(addPokemon(newValue)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
