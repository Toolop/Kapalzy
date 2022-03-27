import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native';
import CardPesanan from '../../component/CardPesanan';

import H1Kapalzy from '../../component/H1Kapalzy';

const BuatTiket = ({ navigation, route }) => {
    const { awal,tujuan,jam,layanan,tanggal,usia,jumlah,total } = route.params;
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{padding:24}}>
                    <View style={styles.card}>
                    <H1Kapalzy></H1Kapalzy>
                        <Text style={styles.bodyText}>Kuota Tersedia(100000)</Text>
                        <Text style={styles.bodyText}>Rincian Tiket</Text>
                        <CardPesanan 
                            awal= {JSON.stringify(awal)} 
                            tujuan = {JSON.stringify(tujuan)}
                            tanggal = {JSON.stringify(tanggal)}
                            jam = {JSON.stringify(jam)}
                            layanan = {JSON.stringify(layanan)}
                            usia = {JSON.stringify(usia)}
                            jumlah = {JSON.stringify(jumlah)}
                            total  = {JSON.stringify(total)}
                        ></CardPesanan>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <Text style={[styles.bodyText,{fontSize:18}]}>Total</Text>
                            <Text style={[styles.bodyText,{fontSize:18}]}>Rp {JSON.stringify(total).replace(/["']/g, "")},00</Text>
                        </View>

                        <View style={styles.ButtonBar}>
                            <TouchableOpacity style={styles.Button} onPress={() => navigation.goBack()}>
                                <Text style={[styles.ButtonText,{color:'#00579C'}]}>Kembali</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.Button,{backgroundColor:'#00579C',}]}
                                onPress={()=>navigation.navigate('Submit',{
                                    awal:awal,
                                    tujuan: tujuan,
                                    layanan: layanan,
                                    tanggal: tanggal,
                                    jam: jam,
                                    jumlah:jumlah,
                                    usia: usia,
                                    total:total,

                                })}>
                                <Text style={[styles.ButtonText,{color:'white'}]}>Lanjutkan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    bodyText:{
        fontWeight:'bold',
        marginBottom:20,
    },
    card: {
        marginTop:80,
        width:'100%',
        backgroundColor:'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        padding: 20,
        maxWidth:500,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    ButtonBar: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,
        marginBottom:10,
    },
    ButtonText:{
        fontWeight:'bold',
        fontSize:17,
    },
    Button: {
        width:140,
        paddingLeft:30,
        paddingRight: 30,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#00579C',
        alignItems:'center'
    }
});

export default BuatTiket;