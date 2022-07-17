const checkEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

const checkPassword = (password) => {
  const minLength = 7;
  return (password.length) > minLength;
};

const validateLogin = (email, password) => {
  if (checkEmail(email) && checkPassword(password)) {
    return false;
  }
  return true;
};
export default validateLogin;
