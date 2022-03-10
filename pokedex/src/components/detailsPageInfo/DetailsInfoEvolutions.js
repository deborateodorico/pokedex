import React from 'react';
import seta from '../../icons/seta.svg';

export default function DetailsInfoEvolutions({ evolutions }) {
  const evolution = () => {
    if (evolutions.length === 1) {
      return (
        <div className='details-evolutions__container'>
          <div>
            <img
              src={evolutions[0].pictureUrl}
              alt='evolution'
              className='details-evolutions__container__img'
            />
            <p className='details-evolutions__container__id'>
              #{('0000' + evolutions[0].id).slice(-4)}
            </p>
            <p className='details-evolutions__container__name'>
              {evolutions[0].name}
            </p>
          </div>
        </div>
      );
    }
  };

  const evolutionRecursao = () => {
    let newEvolution = evolutions[1];
    if (evolutions.length > 1) {
      return (
        <div className='details-evolutions__container'>
          <div>
            <img
              src={evolutions[0].pictureUrl}
              alt='evolution'
              className='details-evolutions__container__img'
            />
            <p className='details-evolutions__container__id'>
              #{('0000' + evolutions[0].id).slice(-4)}
            </p>
            <p className='details-evolutions__container__name'>
              {evolutions[0].name}
            </p>
          </div>
          <div className='arrow-img'></div>
          <div className='arrow-ball'></div>

          <DetailsInfoEvolutions evolutions={newEvolution} />
        </div>
      );
    }
  };
  return (
    <>
      {evolution()}
      {evolutionRecursao()}
    </>
  );
}
