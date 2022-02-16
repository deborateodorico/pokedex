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

function PokemonDetails({ pokemons, actions }) {
  const params = useParams();
  const pokemon = pokemons[params.name];

  useEffect(() => {
    fetchApiPageDetails();
  }, []);

  const [fetchDetailsStatus, setFetchDetailsStatus] = useState({
    isLoading: true,
    error: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [clickedAbility, setClikedAbility] = useState({
    name: '',
    url: '',
  });

  let apiPokemonDetails = `${process.env.REACT_APP_DETAILS_PAGE_ADDRESS}/${params.name}`;

  const fetchApiPageDetails = async () => {
    try {
      setFetchDetailsStatus({ isLoading: true });
      const response = await fetch(apiPokemonDetails);

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

      setFetchDetailsStatus({ isLoading: false });
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
      name: abilityName,
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
            picture={pokemon.picture}
            types={pokemon.types}
          />
          <PokemonInformationContainer
            id={pokemon.id}
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            types={pokemon.types}
            stats={pokemon.stats}
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
          ability={clickedAbility.name}
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
  return { pokemons: state.pokemons };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPokemonActions: (newValue) => dispatch(addPokemon(newValue)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
