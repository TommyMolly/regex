class Validator {
  static validateUsername(username) {
    // Проверка на допустимые символы: только латинские буквы, цифры, -, _
    if (!/^[A-Za-z0-9_-]+$/.test(username)) {
      return false;
    }

    // Не должно начинаться или заканчиваться цифрой, _ или -
    if (/^[\d_-]/.test(username) || /[\d_-]$/.test(username)) {
      return false;
    }

    // Не должно быть более 3 цифр подряд
    if (/\d{4,}/.test(username)) {
      return false;
    }

    return true;
  }
}

module.exports = Validator;