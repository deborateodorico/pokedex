import React from 'react';

export default function DetailsInfoAbout({ about }) {
  return (
    <div className='details-about'>
      <p className='details-about__paragraph'>About</p>
      <p className='details-about__text'>{about}</p>
    </div>
  );
}
