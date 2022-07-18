import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
//   const [userId, setUserId] = useState('');
  const [balance, setBalance] = useState(100.00);
  const [allStocks, setAllStocks] = useState([{
    stockId: 'ABEV3',
    name: 'Ambev SA',
    price: 14.59,
  }]);
  const [myStocks, setMyStocks] = useState([{
    stockId: 'ABEV3',
    name: 'Ambev SA',
    price: 14.59,
  }]);

  const contextValue = useMemo(() => ({
    allStocks,
    setAllStocks,
    myStocks,
    setMyStocks,
    balance,
    setBalance,
  }), [myStocks, balance]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
