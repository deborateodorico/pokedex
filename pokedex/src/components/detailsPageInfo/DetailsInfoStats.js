import React from 'react';

function DetailsInfoStats({ stats, id }) {
  return (
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
  );
}

export default DetailsInfoStats;
