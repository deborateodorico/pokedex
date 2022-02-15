import React from 'react';
import DetailsInfoName from './DetailsInfoName';
import DetailsInfoFilter from './DetailsInfoFilter';
import DetailsInfoType from './DetailsInfoType';
import DetailsInfoStats from './DetailsInfoStats';
import DetailsInfoTeams from './DetailsInfoTeams';

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
      <DetailsInfoName id={id} name={name} />
      <DetailsInfoFilter
        height={height}
        weight={weight}
        id={id}
        abilities={abilities}
        onClickAbility={onClickAbility}
      />
      <p className='details-container__informations__type'>Type</p>
      <DetailsInfoType types={types} id={id} />
      <DetailsInfoStats id={id} stats={stats} />
      <DetailsInfoTeams />
    </div>
  );
}

export default PokemonInformationContainer;
