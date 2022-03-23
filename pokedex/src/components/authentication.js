import Cookies from 'js-cookie';

const createAccount = (name, email, password) => {
  fetch('http://pokedex.jhonnymichel.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data.name, response.message);
      Cookies.set('token', response.token);
    });
};

const getUser = () => {
  fetch('http://pokedex.jhonnymichel.com/profile', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.user.name, response.user.email);
    });
};

const signIn = (email, password) => {
  fetch('http://pokedex.jhonnymichel.com/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.message);
      Cookies.set('token', response.token);
    });
};

const signOut = () => {
  fetch('http://pokedex.jhonnymichel.com/signout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.message);
      Cookies.remove('token');
    });
};

window.createAccount = createAccount;

window.signIn = signIn;

window.signOut = signOut;

window.getUser = getUser;
