import React from 'react';
import loading from '../icons/loading.png';

function Loading() {
  return (
    <div className='loading is-animating'>
      <img src={loading} alt='Loading' />
    </div>
  );
}

export default Loading;
