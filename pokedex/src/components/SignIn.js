import React from 'react';
import AppHeader from './AppHeader';
import pokemonSignIn from '../icons/pokemonSignIn.png';

export default function SignIn() {
  return (
    <div className='sign-in-container'>
      <AppHeader />
      <div className='sign-in-container__form-container'>
        <div className='sign-in-container__form-container__form'>
          <h3 className='sign-in-container__form-container__form__title'>
            Sign in
          </h3>
          <div className='sign-in-container__form-container__form__img-area'>
            <img
              src={pokemonSignIn}
              alt='pokemon=img'
              className='sign-in-container__form-container__form__img-area__img'
            />
          </div>
          <div className='sign-in-container__form-container__form__input-area'>
            <input
              placeholder='Email'
              className='sign-in-container__form-container__form__input-area__input'
            />
            <input
              placeholder='Password'
              className='sign-in-container__form-container__form__input-area__input'
            />
          </div>
          <div className='sign-in-container__form-container__form__paragraph-container'>
            <p className='sign-in-container__form-container__form__paragraph-container__paragraph'>
              Forgot your password?
            </p>
          </div>

          <div className='sign-in-container__form-container__form__button-area'>
            <button
              type='button'
              className='sign-in-container__form-container__form__button-area__sign-in-button'
            >
              Sign in
            </button>
            <button
              type='button'
              className='sign-in-container__form-container__form__button-area__sign-up-button'
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
