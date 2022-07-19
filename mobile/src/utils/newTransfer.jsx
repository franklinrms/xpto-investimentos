const newTransfer = (type, balance, value) => {
  if (type === 'withdrawal') {
    return Number(balance) - Number(value);
  }
  return Number(balance) + Number(value);
};
export default newTransfer;
