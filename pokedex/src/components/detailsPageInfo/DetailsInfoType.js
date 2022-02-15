import React from 'react';
import colors from '../colorsDictionary';

function DetailsInfoType({ types, id }) {
  return (
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
  );
}

export default DetailsInfoType;
