import React from 'react';

function Error({ fetch }) {
  const handleClick = (event) => {
    fetch();
  };
  return (
    <div>
      <img
        src='https://i.pinimg.com/originals/29/9e/d7/299ed754f22d3049563cee76446f239b.gif'
        alt='Error'
      />
      <p>Error!</p>
      <button type='button' onClick={handleClick}>
        Try Again!
      </button>
    </div>
  );
}

export default Error;
