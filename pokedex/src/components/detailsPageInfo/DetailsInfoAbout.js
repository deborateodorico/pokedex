import React from 'react';

export default function DetailsInfoAbout({ about }) {
  return (
    <div className='details-about'>
      <h4 className='details-about__paragraph'>About</h4>
      <p className='details-about__text'>{about}</p>
    </div>
  );
}
