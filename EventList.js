import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, Alert } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';
import { getEvents } from './api';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 40,
        maxHeight: '85%',
        backgroundColor: '#F3F3F3'
    },
    refresh: {
        marginRight: 75
    }
});

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                })),
            });
        }, 1000)

        getEvents().then(events => this.setState({ events }));
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

    handleRefresh = () => {
        getEvents().then(events => this.setState({ events }));
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Got it!', onPress: () => console.log('Data Refreshed')},
            ],
            { cancelable: false }
          )
    }

    render() {
        return [
            <FlatList
                key="flatlist"
                style={ styles.list }
                data= { this.state.events }
                renderItem={({ item }) => <EventCard event={item} />}
                keyExtractor={item => item.id} 
            />,
            <ActionButton
                key="fab"
                onPress={this.handleAddEvent}
                buttonColor="rgba(231, 76, 60, 1)" 
            />,
            <ActionButton
            key="fresh"
            style={ styles.refresh }
            onPress={this.handleRefresh}
            buttonColor="rgba(144, 245, 0, 1)" />
        ];
    }
}

export default EventList;