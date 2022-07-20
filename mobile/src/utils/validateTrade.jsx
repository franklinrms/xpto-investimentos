const validateSell = (balance, value) => {
  if (Number(balance) < Number(value)) return false;
  return true;
};

const validateValue = (value) => {
  if (!value || value === 'NaN' || value <= 0) return false;
  return true;
};
const validateAmount = (amount) => {
  if (!amount || amount === 'NaN' || amount < 1) return false;
  return true;
};

const validateTrade = (type, balance, value, amount) => {
  if (type === 'Comprar' && validateSell(balance, value) && validateValue(value) && validateAmount(amount)) {
    return true;
  }
  if (type === 'Vender' && validateValue(value) && validateAmount(amount)) {
    return true;
  }
  return false;
};
export default validateTrade;
