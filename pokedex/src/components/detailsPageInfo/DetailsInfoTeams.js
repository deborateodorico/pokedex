import React from 'react';

function DetailsInfoTeams() {
  return (
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
  );
}

export default DetailsInfoTeams;
