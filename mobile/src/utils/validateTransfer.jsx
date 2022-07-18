const validateWithdraw = (balance, value) => {
  if (balance < value) return false;
  return true;
};

const validateValue = (value) => {
  if (value === 'NaN') return false;
  return true;
};

const validateTransfer = (type, balance, value) => {
  if (type === 'withdrawal' && validateWithdraw(balance, value) && validateValue(value)) {
    return true;
  }
  if (type === 'deposit' && validateValue(value)) {
    return true;
  }
  return false;
};
export default validateTransfer;
