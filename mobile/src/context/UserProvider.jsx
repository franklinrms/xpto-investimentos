import React, { useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    userId: '',
    email: 'eu@eu.com',
    name: 'Franklin',
  });
  const [balance, setBalance] = useState(7100.19);
  const [transferSent, setTransferSent] = useState(false);
  const [allStocks, setAllStocks] = useState([{
    stockId: 'ABEV3',
    name: 'Ambev SA',
    price: 14.59,
  }]);
  const [myStocks, setMyStocks] = useState([{
    stockId: 'ABEV3',
    name: 'Ambev SA',
    price: 14.59,
  }, {
    stockId: 'PETR4',
    name: 'Petrobras',
    price: 27.96,
  }]);

  const balanceUpdate = (value) => {
    const result = Number(value).toFixed(2);
    setBalance(result);
  };

  const bottomSheetRef = useRef(null);

  const contextValue = useMemo(() => ({
    allStocks,
    setAllStocks,
    myStocks,
    setMyStocks,
    balance,
    balanceUpdate,
    bottomSheetRef,
    transferSent,
    setTransferSent,
    user,
    setUser,
  }), [myStocks, balance, bottomSheetRef, transferSent, user]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
