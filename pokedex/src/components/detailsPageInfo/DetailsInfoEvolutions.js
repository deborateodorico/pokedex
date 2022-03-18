import React from 'react';

const ShowEvolutions = ({ name, id, picture }) => {
  return (
    <div>
      <img
        src={picture}
        alt='evolution'
        className='details-evolutions__container__img'
      />
      <p className='details-evolutions__container__id'>
        #{('0000' + id).slice(-4)}
      </p>
      <p className='details-evolutions__container__name'>{name}</p>
    </div>
  );
};

export default function DetailsInfoEvolutions({ evolutions }) {
  const RenderEvolution = () => {
    if (evolutions.length === 1) {
      return (
        <div className='details-evolutions__container'>
          <ShowEvolutions
            name={evolutions[0].name}
            id={evolutions[0].id}
            picture={evolutions[0].pictureUrl}
          />
        </div>
      );
    }
  };

  const renderEvolutionRecursion = () => {
    const allPossibleEvolutions = [...evolutions];
    allPossibleEvolutions.shift();

    if (evolutions.length > 1) {
      return (
        <div className='details-evolutions__container'>
          <ShowEvolutions
            name={evolutions[0].name}
            id={evolutions[0].id}
            picture={evolutions[0].pictureUrl}
          />
          <div className='arrow-container'>
            <div className='arrow-img'></div>
            <div className='arrow-ball'></div>
          </div>

          <div>
            {allPossibleEvolutions.map((evolucao) => (
              <DetailsInfoEvolutions evolutions={evolucao} />
            ))}
          </div>
        </div>
      );
    }
  };
  return (
    <>
      {RenderEvolution()}
      {renderEvolutionRecursion()}
    </>
  );
}
