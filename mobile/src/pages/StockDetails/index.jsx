import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import styles from './styles';
import GoBack from '../../components/GoBack';
import TradeButton from '../../components/TradeButton';
import UserContext from '../../context/UserContext';
import TradeScreen from '../../components/TradeScreen';

function StockDetails({ route }) {
  const { bottomSheetRef } = useContext(UserContext);
  const {
    back, name, stockId, price,
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerCompany}>
        <View>
          <Text style={styles.label}>{stockId}</Text>
          <Text style={styles.subTitle}>{name}</Text>
        </View>
        <Text style={styles.label}>{`R$ ${price}`}</Text>
      </View>

      {/* <Text>###### Gráfico #######</Text> */}
      {/* <Text>###### Gráfico #######</Text> */}

      <TradeButton />

      <GoBack route={back} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 650]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <TradeScreen stockId={stockId} price={price} />
        {/* <SuccessScreen /> */}
      </BottomSheet>
    </View>
  );
}

export default gestureHandlerRootHOC(StockDetails);

StockDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.string),
}.isRequired;
