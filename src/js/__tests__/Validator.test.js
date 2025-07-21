import Validator from '../Validator.js';

describe('Validator.validateUsername', () => {
  test('валидное имя: содержит допустимые символы', () => {
    expect(Validator.validateUsername('User_abc')).toBe(true);
    expect(Validator.validateUsername('Name-Test_1A')).toBe(true);
  });

  test('недопустимые символы', () => {
    expect(Validator.validateUsername('User!name')).toBe(false);
    expect(Validator.validateUsername('Имя')).toBe(false); 
    expect(Validator.validateUsername('Name@123')).toBe(false);
  });

  test('начинается с цифры, -, _', () => {
    expect(Validator.validateUsername('1Username')).toBe(false);
    expect(Validator.validateUsername('-Username')).toBe(false);
    expect(Validator.validateUsername('_Username')).toBe(false);
  });

  test('заканчивается цифрой, -, _', () => {
    expect(Validator.validateUsername('Username1')).toBe(false);
    expect(Validator.validateUsername('Username-')).toBe(false);
    expect(Validator.validateUsername('Username_')).toBe(false);
  });

  test('более 3 цифр подряд', () => {
    expect(Validator.validateUsername('User1234')).toBe(false);
    expect(Validator.validateUsername('Test0000Test')).toBe(false);
  });

  test('ровно 3 цифры подряд — допустимо', () => {
    expect(Validator.validateUsername('User999Test')).toBe(true);
  });

  test('пустая строка — невалидна', () => {
    expect(Validator.validateUsername('')).toBe(false);
  });
});
