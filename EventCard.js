import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import {
    formatDate,
    getCountdownParts,
} from './api';


const styles = StyleSheet.create({

});

export default function EventCard({ event }) {
    const {
        days,
        hours,
        minutes,
        seconds,
    } = getCountdownParts(event.date);

    return(
        <View style={styles.card}>
            <View style={styles.cardReader}>
                <Text style={styles.date}>{formatDate(event.date)}</Text>
                <Text style={styles.title}>{event.title}</Text>
            </View>
        </View>
    )
}

EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    }),
};