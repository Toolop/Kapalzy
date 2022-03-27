import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,ScrollView } from 'react-native';

import CardPesanan from '../component/CardPesanan';
import DataPelayaran from '../controller/DataPelayaran.json';

const Pesanan = () => {
    return (
        <View style={styles.container}>
                <FlatList
                data={DataPelayaran}
                keyExtractor={item => item.Id}
                renderItem={({index,item}) => {
                    return(
                        <ScrollView>
                            <View style={{padding:24}}>
                                <CardPesanan
                                    awal= {item.Asal}
                                    tujuan = {item.Tujuan}
                                    tanggal = {item.Tanggal}
                                    jam = {item.Waktu}
                                    layanan = {item.Layanan}
                                    usia = {item.Usia}
                                    total = {item.total}
                                    jumlah = {item.jumlah}
                                ></CardPesanan>
                            </View>

                        </ScrollView>
                    )
                }}>

                </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F2F2F2',
    },
});

export default Pesanan;