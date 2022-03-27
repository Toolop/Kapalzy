import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView, Modal} from 'react-native';

import H1Kapalzy from '../../component/H1Kapalzy';
import CardPesanan from '../../component/CardPesanan';

const ModalSubmit = ({navigation,visible}) => {
    return(
        <Modal transprent visible={visible} transparent={true}>
            <View style={styles.modal}>
                <View style={styles.modalCard}>
                    <Text style={styles.TitleModal}>Pembayaran</Text>
                    <View style={{marginTop:20,marginBottom:20,}}>
                        <Text style={styles.TextModal}>Transfer Ke nomor Rekning</Text>
                        <Text style={styles.TextModal}>89172xxxxxx</Text>
                        <Text style={[styles.TextModal,{marginTop:20,}]}>Bank BAC</Text>
                    </View>
                    <TouchableOpacity style={[styles.submitBtn,{maxWidth:100}]} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttontext}>Selesai</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </Modal>
    )
}

const Submit = ({ navigation, route }) => {
    const { awal,tujuan,jam,layanan,tanggal,usia,jumlah,total } = route.params;
    const [visible, setVisible ] = React.useState(false)
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{padding:24}}>
                    <View style = {styles.card}>
                        <H1Kapalzy></H1Kapalzy>
                            <Text style={styles.H4}>Informasi Pemesanan</Text>

                            <Text style={[styles.H4,{marginTop:10}]}>
                                Data Pemesanan
                            </Text>
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
                            <Text>Nama Lengkap</Text>
                            <TextInput style={styles.Input}></TextInput>
                            <Text>Identitas</Text>
                            <TextInput style={styles.Input}></TextInput>
                            <Text>Umur</Text>
                            <TextInput style={styles.Input}></TextInput>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity style={styles.submitBtn} onPress={() => setVisible(true)}>
                                    <Text style={styles.buttontext}>Submit</Text>
                                </TouchableOpacity> 
                            </View>
                    </View>
                </View>
            </ScrollView>
            <ModalSubmit visible={visible} navigation={navigation} ></ModalSubmit>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    H4:{
        fontWeight:'bold',
        marginBottom:10,
    },
    card: {
        marginTop:60,
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
    Input: {
        marginBottom:20,
        marginTop:3,
        height: 40,
        width:'100%',
        borderWidth: 1,
        maxWidth:500,
        padding: 10,
        borderRadius:5,
        borderColor:'#D9DCDC',
        backgroundColor:'#EFF4F4',
        
    },
    submitBtn:{
        width:'80%',
        margin:'auto',
        backgroundColor:'#EE9E54',
        padding:12,
        borderRadius:5,
        flexDirection:'row',
        marginBottom:10,
        alignItems:'center'
    },
    buttontext: {
        color:'white',
        fontSize:15,
        width:'100%',
        textAlign:'center',

    },
    modal:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
    },
    modalCard:{
        backgroundColor:'white',
        width: '80%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    TitleModal:{
        width:'100%',
        backgroundColor:'#EE9E54',
        color: 'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:10,

    },
    TextModal:{
        textAlign:'center',
        fontWeight:'bold',
    }
});

export default Submit;