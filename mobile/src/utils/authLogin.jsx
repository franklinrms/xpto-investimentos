import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function authLogin(email, password) {
  const USERS_DATA = await AsyncStorage.getItem('USER_DATA');
  const data = JSON.parse(USERS_DATA);

  const user = data.find((d) => (d.email.toLowerCase() === email && d.password === password));
  return user;
}
