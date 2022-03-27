import React from 'react';
import {Text, StyleSheet} from 'react-native';

const H1Kapalzy = () =>{
    return(
        <Text style={styles.H1}>Kapalzy</Text>
    );
}

const styles = StyleSheet.create({
    H1: {
        color: '#00579C',
        fontWeight: 'bold',
        fontSize:30,
        textAlign: 'center',
        marginBottom: 30,
        marginTop:10,
    },
});

export default H1Kapalzy;