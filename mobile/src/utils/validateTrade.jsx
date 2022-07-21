const validateBuy = (balance, value) => {
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
const validateSell = (amount, amountOwned) => {
  if (amount > amountOwned) return false;
  return true;
};

const validateTrade = (type, balance, value, amount, amountOwned) => {
  if (type === 'Comprar' && validateBuy(balance, value) && validateValue(value) && validateAmount(amount)) {
    return true;
  }
  if (type === 'Vender' && validateValue(value) && validateAmount(amount) && validateSell(amount, amountOwned)) {
    return true;
  }
  return false;
};
export default validateTrade;
