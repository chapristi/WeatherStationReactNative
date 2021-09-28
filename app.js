import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import axios from 'axios';
import CurrentWeather from './components/currentWeather'
export default function App() {
  const API_URL = (lat, long) =>
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=3780b59f3e313bbe20a3699001209872&lang=fr&units=metric`;

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getCorrdinates = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== 'granted') {
        return;
      }
      const userLocation = await Location.getCurrentPositionAsync();
      getWeather(userLocation);
    };
    getCorrdinates();
  }, []);
  const getWeather = async (location) => {
    try {
      const response = await axios.get(
        API_URL(location.coords.latitude, location.coords.longitude)
      );
      setData(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={{ color: 'blue' }} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <CurrentWeather data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems : 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
    padding: 8,
  },
});
