import React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';

import Kosong from '../assets/Kosong.png';

const Pembatalan = () => {
    return (
        <View style={styles.container}>
            <Image source={Kosong} style={{marginTop:'60%'}}></Image>
            <Text style={{color: '#00579C',fontWeight: 'bold',fontSize:18}}>Tidak ada aktifitas pembatalan Tiket</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 24,
        backgroundColor: '#F2F2F2',
        alignItems:'center',
        justifyContent:'center'
    },
});

export default Pembatalan;