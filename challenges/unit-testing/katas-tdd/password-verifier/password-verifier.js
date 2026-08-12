function verify(password) {
  if (password === null) {
    return "Password rejected";
  }
  if (password.length < 8) {
    return "Password rejected";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password rejected";
  }
  if (!/[0-9]/.test(password)) {
    return "Password rejected";
  }
  return "Password accepted";
}

module.exports = verify;
