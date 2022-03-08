const axios = require('axios');

const utilisators = {
  add: (nbre1, nbre2) => nbre1 + nbre2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const utilisateur = { firstName: 'Nicolas' };
    utilisateur['lastName'] = 'Marin';
    return utilisateur;
  },
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = utilisators;