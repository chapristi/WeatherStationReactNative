import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import FilmRequest from './components/FilmRequest'

export default function App() {
    return (

        <View style = {styles.container}>
            <FilmRequest />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
