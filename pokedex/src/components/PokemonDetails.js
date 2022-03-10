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
  }, [params.name]);

  const [fetchDetailsStatus, setFetchDetailsStatus] = useState({
    isLoading: true,
    error: false,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [clickedAbility, setClikedAbility] = useState({
    name: '',
    id: '',
  });

  const fetchApiPageDetails = async () => {
    const apiPokemonDetails = `${process.env.REACT_APP_DETAILS_PAGE_ADDRESS}/${params.name}`;

    try {
      setFetchDetailsStatus({ isLoading: true });
      const response = await fetch(apiPokemonDetails);

      const pokemonData = await response.json();

      actions.addPokemonActions({
        name: pokemonData.pokemon.name,
        id: pokemonData.pokemon.id,
        pictureUrl: pokemonData.pokemon.pictureUrl,
        types: pokemonData.pokemon.types,
        abilities: pokemonData.pokemon.abilities,
        height: pokemonData.pokemon.height,
        weight: pokemonData.pokemon.weight,
        about: pokemonData.pokemon.flavorText,
        stats: [
          {
            name: 'Attack',
            value: pokemonData.pokemon.attack,
          },
          {
            name: 'Defense',
            value: pokemonData.pokemon.defense,
          },
          {
            name: 'Special-Attack',
            value: pokemonData.pokemon.specialAttack,
          },
          {
            name: 'Special-Defense',
            value: pokemonData.pokemon.specialDefense,
          },
          {
            name: 'Speed',
            value: pokemonData.pokemon.speed,
          },
        ],
        nextPokemon: {
          name: pokemonData.nextPokemon.name,
          id: pokemonData.nextPokemon.id,
        },
        prevPokemon: {
          name: pokemonData.prevPokemon.name,
          id: pokemonData.prevPokemon.id,
        },
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

  const handleClickAbility = (abilityName, abilityId) => {
    setModalIsOpen(true);
    setClikedAbility({
      ...clickedAbility,
      name: abilityName,
      id: abilityId,
    });
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='details-page'>
      <AppHeader />
      {!fetchDetailsStatus.isLoading && pokemon && (
        <div className='details-container'>
          <PokemonPictureContainer
            picture={pokemon.pictureUrl}
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
            about={pokemon.about}
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
            position: 'relative',
            padding: 0,
            borderRadius: 8,
            inset: 0,
          },
        }}
      >
        <ModalDetails
          onCloseModal={handleCloseModal}
          ability={clickedAbility.name}
          id={clickedAbility.id}
        />
      </Modal>
      {!fetchDetailsStatus.isLoading && pokemon && (
        <PokemonFooterContainer
          prevPokemon={pokemon.prevPokemon}
          nextPokemon={pokemon.nextPokemon}
        />
      )}

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
