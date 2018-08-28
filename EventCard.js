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
        <View style={styles.counterContainer}>
            <View styles={styles.counter}>
                <Text style={styles.counterText}>{days}</Text>
                <Text style={styles.counterLabel}>Days</Text>
            </View>
                <View styles={styles.counter}>
                    <Text style={styles.counterText}>{hours}</Text>
                    <Text style={styles.counterLabel}>Hours</Text>
                </View>

                <View styles={styles.counter}>
                    <Text style={styles.counterText}>{minutes}</Text>
                    <Text style={styles.counterLabel}>Minutes</Text>
                </View>
                <View styles={styles.counter}>
                    <Text style={styles.counterText}>{seconds}</Text>
                    <Text style={styles.counterLabel}>Seconds</Text>
                </View>
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