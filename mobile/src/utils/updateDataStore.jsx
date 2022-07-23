import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function updateDataStore(user, balance, myStocks) {
  const USERS_DATA = await AsyncStorage.getItem('USER_DATA');
  const data = JSON.parse(USERS_DATA);

  const userIndex = data.findIndex((d) => d.userId === user.userId);

  data.splice(userIndex, 1, { ...user, balance, myStocks });

  const UPDATED_DATA = JSON.stringify(data);

  await AsyncStorage.setItem('USER_DATA', UPDATED_DATA);
  console.log('🚀 ~ data', data[userIndex]);
}
