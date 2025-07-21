function normalizePhoneNumber(input) {
  const cleaned = input.replace(/[^\d+]/g, '');

  if (cleaned.startsWith('+')) {
    return '+' + cleaned.slice(1).replace(/\D/g, '');
  }

  if (cleaned.startsWith('8')) {
    return '+7' + cleaned.slice(1);
  }

  return '+' + cleaned.replace(/\D/g, '');
}

module.exports = normalizePhoneNumber;
