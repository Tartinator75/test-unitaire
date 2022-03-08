const utilisators = require('./utilisators');

const nameCheck = () => console.log('Vérification du nom....');

describe('Vérification des noms', () => {
  beforeEach(() => nameCheck());

  test('Utilisateur est Mark', () => {
    const utilisateur = 'Mark';
    expect(utilisateur).toBe('Mark');
  });

  test('Utilisateur est Thibaut', () => {
    const utilisateur = 'Thibaut';
    expect(utilisateur).toBe('Thibaut');
  });
});

test('Ajouter 3 + 3 pour être égale 6', () => {
  expect(utilisators.add(3, 3)).toBe(6);
});

test('Ajoute 3 + 3 pour ne pas être égale 8', () => {
  expect(utilisators.add(3, 3)).not.toBe(8);
});

test('Devrait être nulle', () => {
  expect(utilisators.isNull()).toBeNull();
});

test('Devrait être faux', () => {
  expect(utilisators.checkValue(undefined)).toBeFalsy();
});

test('L`utilisateur doit être l`objet Nicolas Marin', () => {
  expect(utilisators.createUser()).toEqual({
    firstName: 'Nicolas',
    lastName: 'Marin'
  });
});

test('Devrait être inférieur à 1200', () => {
  const nbre1 = 600;
  const nbre2 = 600;
  expect(nbre1 + nbre2).toBeLessThanOrEqual(1200);
});

test('Il n`y a pas de R dans l`équipe', () => {
  expect('équipe').not.toMatch(/A/i);
});

test('L`administrateur doit être dans les noms d`utilisateur', () => {
  pseudos = ['Nicolas', 'Marin', 'administrateur'];
  expect(pseudos).toContain('administrateur');
});

test('Le nom de l`utilisateur récupéré doit être Leanne Graham', async () => {
  expect.assertions(1);
  const data = await utilisators.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});