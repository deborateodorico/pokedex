import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AppHeader from './AppHeader';
import Loading from './Loading';
import ApiError from './ApiError';
import colors from './colorsDictionary';
import favorite from '../icons/favorite.png';
import pagination from '../icons/pagination.png';
import barraFooter from '../icons/barraFooter.png';

export default function PokemonDetails() {
  const params = useParams();

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

  const [loadingDetails, setLoadingDetails] = useState(true);

  const [detailsState, setDetailsState] = useState({
    isLoading: false,
    error: false,
  });

  let apiPokemonDetails = `${process.env.REACT_APP_DETAILS_PAGE_ADDRESS}/${params.name}`;

  const fetchApiPageDetails = async () => {
    try {
      setLoadingDetails(true);
      console.log(loadingDetails);
      const response = await fetch(apiPokemonDetails);
      setLoadingDetails(false);
      console.log(loadingDetails);
      const pokemonData = await response.json();
      setPokemonDetailRequest({
        ...pokemonDetailRequest,
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
      setDetailsState({
        ...detailsState,
        error: true,
        isLoading: false,
      });
    }
  };

  const type = pokemonDetailRequest.types[0]
    ? pokemonDetailRequest.types[0].type.name
    : 'normal';

  return (
    <div className='details-page'>
      <AppHeader />
      {!loadingDetails && (
        <div className='details-container'>
          <div
            className='details-container__pokemon'
            style={{
              background: colors[type].background,
            }}
          >
            <img
              src={pokemonDetailRequest.picture}
              alt='pokemon'
              className='details-container__pokemon__img'
            />
            <div className='details-container__pokemon__favorite-area'>
              <button className='details-container__pokemon__favorite-area__add-button'>
                + Add to team
              </button>
              <img
                src={favorite}
                alt='favorite'
                className='details-container__pokemon__favorite-area__icon'
              />
            </div>
          </div>
          <div className='details-container__informations'>
            <div className='details-container__informations__details'>
              <div className='details-container__informations__details__name-area'>
                <h1 className='details-container__informations__details__name-area__name'>
                  {pokemonDetailRequest.name}
                </h1>
                <p className='details-container__informations__details__name-area__id'>
                  #{('0000' + pokemonDetailRequest.id).slice(-4)}
                </p>
              </div>
              <div className='details-container__informations__details__favorite-area'>
                <button className='details-container__informations__details__favorite-area__add-button'>
                  + Add to team
                </button>
                <img
                  src={favorite}
                  alt='favorite'
                  className='details-container__informations__details__favorite-area__icon'
                />
              </div>
            </div>
            <div className='details-container__informations__filters'>
              <div className='details-container__informations__filters__height-and-weight'>
                <p className='details-container__informations__filters__height-and-weight__paragraph-name'>
                  Height
                </p>
                <p className='details-container__informations__filters__height-and-weight__paragraph-number'>
                  {`0.${pokemonDetailRequest.height}m`}
                </p>
              </div>
              <div className='details-container__informations__filters__height-and-weight'>
                <p className='details-container__informations__filters__height-and-weight__paragraph-name'>
                  Weight
                </p>
                <p className='details-container__informations__filters__height-and-weight__paragraph-number'>
                  {`${pokemonDetailRequest.weight}kg`}
                </p>
              </div>
              <div className='details-container__informations__filters__abilities'>
                <p className='details-container__informations__filters__abilities__paragraph-name'>
                  Abilities
                </p>
                <p
                  key={pokemonDetailRequest.id}
                  className='details-container__informations__filters__abilities__paragraph-value'
                >
                  {pokemonDetailRequest.abilities.map((ability, index) => {
                    if (pokemonDetailRequest.abilities.length - 1 === index)
                      return `${ability.ability.name}.`;
                    else {
                      return `${ability.ability.name}, `;
                    }
                  })}
                </p>
              </div>
            </div>
            <p className='details-container__informations__type'>Type</p>
            <div className='details-container__informations__types'>
              {pokemonDetailRequest.types.map((type) => {
                return (
                  <p
                    key={pokemonDetailRequest.id}
                    className='details-container__informations__types__paragraph'
                    style={{ border: colors[type.type.name].borderPokemon }}
                  >
                    {type.type.name}
                  </p>
                );
              })}
            </div>
            <div className='details-container__informations__stats'>
              <h3 className='details-container__informations__stats__title'>
                Stats
              </h3>
              {pokemonDetailRequest.stats.map((stat) => {
                return (
                  <>
                    <p
                      key={pokemonDetailRequest.id}
                      className='details-container__informations__stats__name'
                    >
                      {stat.stat.name}
                    </p>
                    <div className='details-container__informations__stats__value'>
                      <div
                        className='details-container__informations__stats__progressbar'
                        style={{ width: `${(100 * stat.base_stat) / 255}%` }}
                      ></div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className='details-container__informations__teams'>
              <h3 className='details-container__informations__teams__title'>
                Teams
              </h3>
              <div className='details-container__informations__teams__add-area'>
                <p className='details-container__informations__teams__add-area__teams-paragraph'>
                  No teams yet
                </p>
                <a
                  href='url'
                  className='details-container__informations__teams__add-area__add-teams'
                >
                  Add to team
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className='footer-container'>
        <div className='footer-container__footer-left'>
          <button className='footer-container__footer-left__button'>
            <img
              src={pagination}
              alt='previous-icon'
              className='footer-container__footer-left__button__img'
            />
          </button>
          <div className='footer-container__footer-left__previous'>
            <p className='footer-container__footer-left__previous__id'>#0002</p>
            <p className='footer-container__footer-left__previous__name'>
              Venusaur
            </p>
          </div>
        </div>
        <div className='footer-container__bar'>
          <img
            src={barraFooter}
            alt='bar'
            className='footer-container__bar__img'
          />
        </div>
        <div className='footer-container__footer-right'>
          <div className='footer-container__footer-right__next'>
            <p className='footer-container__footer-right__next__id'>#0003</p>
            <p className='footer-container__footer-right__next__name'>
              Charmeleon
            </p>
          </div>
          <button className='footer-container__footer-right__button'>
            <img
              src={pagination}
              alt='previous-icon'
              className='footer-container__footer-right__button__img'
            />
          </button>
        </div>
      </footer>
      {detailsState.error && <ApiError />}
      {loadingDetails && <Loading />}
    </div>
  );
}
