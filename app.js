import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Square from './components/Square'
import FilmRequest from './components/FilmRequest'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
   
      <View style = {styles.container}>
          <FilmRequest/>

       
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : "center",
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
