import React from 'react';
import DetailsInfoEvolutions from './DetailsInfoEvolutions';

function DetailsInfoStats({ stats, id, evolutions }) {
  return (
    <div className='details-stats'>
      <div className='details-container__informations__stats'>
        <h3 className='details-container__informations__stats__title'>Stats</h3>
        {stats.map((stat) => {
          return (
            <>
              <p
                key={id}
                className='details-container__informations__stats__name'
              >
                {stat.name}
              </p>
              <div className='details-container__informations__stats__value'>
                <div
                  className='details-container__informations__stats__progressbar'
                  style={{ width: `${(100 * stat.value) / 255}%` }}
                ></div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <h3 className='paragraph'>Evolutions</h3>
        <div className='details-evolutions__container'>
          <DetailsInfoEvolutions evolutions={evolutions} />
        </div>
      </div>
    </div>
  );
}

export default DetailsInfoStats;
