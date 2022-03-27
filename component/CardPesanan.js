import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

import Arrow from '../assets/Arrow.png'

const CardPesanan = (props) => {
    return (
            <View style={styles.card}>
                <View style={styles.topTravel}>
                    <Text style={styles.H3}>{props.awal.replace(/["']/g, "")}</Text>
                    <Image source={Arrow} style={{width: 32,height:16}}></Image>
                    <Text style={styles.H3}>{props.tujuan.replace(/["']/g, "")}</Text>
                </View>
                <View style={styles.containTravel}>
                    <Text style={styles.title}>Jadwal Masuk Pelabuan</Text>
                    <Text>{props.tanggal.replace(/["']/g, "")}</Text>
                    <Text>{props.jam.replace(/["']/g, "")}</Text>
                    <Text style={styles.title}>Layanan</Text>
                    <Text>{props.layanan.replace(/["']/g, "")}</Text>
                    <View style={styles.line}/>
                </View>

                <View style={styles.bottomTravel}>
                    <Text>{props.usia.replace(/["']/g, "")} x {props.jumlah.replace(/["']/g, "")}</Text>
                    <Text>Rp.{props.total.replace(/["']/g, "")},00</Text>
                </View>

                <TouchableOpacity>

                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#E9E9E9',
        padding: 20,
        marginBottom:10,
    },
    topTravel:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 10,
    },
    H3:{
        fontWeight:'bold',
        fontSize:20,
    },
    line:{
       width: '100%',
       height: 2    ,
       backgroundColor: '#9D9D9D',
       marginTop:15,
       marginBottom:5,
    },
    
    bottomTravel:{
        alignItems: 'center',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    title: {
        marginTop:10,
        fontWeight:'bold',
    },
});

export default CardPesanan;