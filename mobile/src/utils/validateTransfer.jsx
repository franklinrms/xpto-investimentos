const validateWithdraw = (balance, value) => {
  if (Number(balance) < Number(value)) return false;
  return true;
};

const validateValue = (value) => {
  if (value === 'NaN' || value < 1) return false;
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
