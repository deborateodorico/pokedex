import React from 'react';

function DetailsInfoFilter({ height, weight, id, abilities, onClickAbility }) {
  return (
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
  );
}

export default DetailsInfoFilter;
