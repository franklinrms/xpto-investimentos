import React, { useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [balance, setBalance] = useState(0);
  const [myStocks, setMyStocks] = useState([]);
  const [transferSent, setTransferSent] = useState(false);

  const balanceUpdate = (value) => {
    const result = Number(value).toFixed(2);
    setBalance(result);
  };

  const bottomSheetRef = useRef(null);
  const bottomTransferRef = useRef(null);

  const contextValue = useMemo(() => ({
    myStocks,
    setMyStocks,
    balance,
    balanceUpdate,
    bottomSheetRef,
    transferSent,
    setTransferSent,
    user,
    setUser,
    bottomTransferRef,
  }), [myStocks, balance, bottomSheetRef, bottomTransferRef, transferSent, user]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}
UserProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
