import React, { useState, useEffect } from 'react';
import closer from '../icons/closer.png';

function ModalDetails({ onCloseModal, ability, id }) {
  const urlAddress = `${process.env.REACT_APP_DETAILS_ABILITY_ADDRESS}/${id}`;

  useEffect(() => {
    fetchUrlModal();
  }, []);

  const [abilityDescription, setAbilityDescription] = useState({
    description: '',
  });

  const fetchUrlModal = async () => {
    const response = await fetch(urlAddress);
    const data = await response.json();

    const item = data.effect_entries.find((item) => {
      return item.language.name === 'en';
    });

    setAbilityDescription({
      ...abilityDescription,
      description: item.effect,
    });
  };
  return (
    <div className='modal-container'>
      <div className='modal-container__header'>
        <h3 className='modal-container__header__title'>Ability info</h3>
        <button
          type='button'
          onClick={onCloseModal}
          className='modal-container__header__closer-button'
        >
          <img
            src={closer}
            alt='closer-icon'
            className='modal-container__header__closer-button__img'
          />
        </button>
      </div>
      <div className='modal-container__ability-area'>
        <p className='modal-container__ability-area__details'>{ability}</p>
        <p className='modal-container__ability-area__description'>
          {abilityDescription.description}
        </p>
      </div>
      <div className='modal-container__footer'>
        <button
          className='modal-container__footer__button'
          type='button'
          onClick={onCloseModal}
        >
          Ok, got it
        </button>
      </div>
    </div>
  );
}

export default ModalDetails;
