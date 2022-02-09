import React from 'react';
import favorite from '../icons/favorite.png';
import colors from './colorsDictionary';

function PokemonInformationContainer({
  name,
  id,
  height,
  weight,
  stats,
  abilities,
  types,
  onClickAbility,
}) {
  return (
    <div className='details-container__informations'>
      <div className='details-container__informations__details'>
        <div className='details-container__informations__details__name-area'>
          <h1 className='details-container__informations__details__name-area__name'>
            {name}
          </h1>
          <p className='details-container__informations__details__name-area__id'>
            #{('0000' + id).slice(-4)}
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
            {`0.${height}m`}
          </p>
        </div>
        <div className='details-container__informations__filters__height-and-weight'>
          <p className='details-container__informations__filters__height-and-weight__paragraph-name'>
            Weight
          </p>
          <p className='details-container__informations__filters__height-and-weight__paragraph-number'>
            {`${weight}kg`}
          </p>
        </div>
        <div className='details-container__informations__filters__abilities'>
          <p className='details-container__informations__filters__abilities__paragraph-name'>
            Abilities
          </p>
          <p
            key={id}
            className='details-container__informations__filters__abilities__paragraph-value'
          >
            {abilities.map((ability, index) => {
              if (abilities.length - 1 === index)
                return (
                  <span
                    onClick={() =>
                      onClickAbility(ability.ability.name, ability.ability.url)
                    }
                    className='details-container__informations__filters__abilities__paragraph-value__click-modal'
                  >
                    {ability.ability.name}.
                  </span>
                );
              else {
                return (
                  <span
                    onClick={() =>
                      onClickAbility(ability.ability.name, ability.ability.url)
                    }
                    className='details-container__informations__filters__abilities__paragraph-value__click-modal'
                  >
                    {ability.ability.name},{' '}
                  </span>
                );
              }
            })}
          </p>
        </div>
      </div>
      <p className='details-container__informations__type'>Type</p>
      <div className='details-container__informations__types'>
        {types.map((type) => {
          return (
            <p
              key={id}
              className='details-container__informations__types__paragraph'
              style={{ border: colors[type.type.name].borderPokemon }}
            >
              {type.type.name}
            </p>
          );
        })}
      </div>
      <div className='details-container__informations__stats'>
        <h3 className='details-container__informations__stats__title'>Stats</h3>
        {stats.map((stat) => {
          return (
            <>
              <p
                key={id}
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
        <h3 className='details-container__informations__teams__title'>Teams</h3>
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
  );
}

export default PokemonInformationContainer;
