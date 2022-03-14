import React from 'react';

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
    const todasAsPossiveisEvolucoes = [...evolutions];
    todasAsPossiveisEvolucoes.shift();

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
          <div className='arrow-container'>
            <div className='arrow-img'></div>
            <div className='arrow-ball'></div>
          </div>

          <div>
            {todasAsPossiveisEvolucoes.map((evolucao) => (
              <DetailsInfoEvolutions evolutions={evolucao} />
            ))}
          </div>
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
