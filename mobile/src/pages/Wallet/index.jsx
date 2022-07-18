import React, { useContext } from 'react';
import { View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import Balance from '../../components/Balance';
import Menu from '../../components/Menu';
import styles from './styles';
import UserContext from '../../context/UserContext';
import TransferScreen from '../../components/TransferScreen';

function Wallet() {
  const { bottomSheetRef } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Balance />
      <Menu />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 550]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <TransferScreen />
      </BottomSheet>
    </View>
  );
}
export default gestureHandlerRootHOC(Wallet);
