import React, { Component } from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    async getMovies() {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            this.setState({ data: json.movies , isLoading: false  });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    render(style) {
        const { data, isLoading } = this.state;

        return (
            <View style={styles.view}>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <Text>{item.title}, {item.releaseYear}</Text>
                        )}
                    />
                )}
            </View>
        );
    }

}
const styles =StyleSheet.create({

})
