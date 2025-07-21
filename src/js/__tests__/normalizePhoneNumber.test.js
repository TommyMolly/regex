const normalizePhoneNumber = require('../normalizePhoneNumber');

describe('normalizePhoneNumber', () => {
  test('преобразует российский номер с 8 в +7', () => {
    expect(normalizePhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
    expect(normalizePhoneNumber('89270000000')).toBe('+79270000000');
  });

  test('оставляет международный номер с + как есть (кроме символов)', () => {
    expect(normalizePhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
    expect(normalizePhoneNumber('+86 000 000 0000')).toBe('+860000000000');
  });

  test('удаляет все нецифровые символы кроме + в начале', () => {
    expect(normalizePhoneNumber('+1 (800) 123-45-67')).toBe('+18001234567');
    expect(normalizePhoneNumber('+49-123 456 789')).toBe('+49123456789');
  });

  test('если номер не начинается ни с + ни с 8, просто добавляет +', () => {
    expect(normalizePhoneNumber('1234567890')).toBe('+1234567890');
  });

  test('пустая строка даёт просто "+"', () => {
    expect(normalizePhoneNumber('')).toBe('+');
  });

  test('номер с мусором и пробелами', () => {
    expect(normalizePhoneNumber('8-999- 123 45 67')).toBe('+79991234567');
    expect(normalizePhoneNumber('+7(999)-123-45-67')).toBe('+79991234567');
  });
});
