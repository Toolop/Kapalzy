import React from 'react';
import { FlatList,Image, StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView,Pressable,Modal} from 'react-native';

import Search from '../../assets/Search.png';
import Ship from '../../assets/Ship.png'
import Seat from '../../assets/Seat.png'
import Clock from '../../assets/Clock.png'
import Calender from '../../assets/Calender.png'

import H1Kapalzy from '../../component/H1Kapalzy';
import DataPembuatan from '../../controller/DataPembuatan.json'


const Home = ({ navigation }) => {
    const [awal,changeAwal] = React.useState('')
    const [tujuan,changeTujuan] = React.useState('')
    const [layanan,changeLayanan] = React.useState('')
    const [jam,changeJam] = React.useState('')
    const [tanggal,changeTanggal] = React.useState('')
    let [visibleModalAwal, setVisibleModalAwal ] = React.useState(false)
    let [visibleModalTujuan, setVisibleModalTujuan ] = React.useState(false)
    let [visibleModalLayanan, setVisibleModalLayanan ] = React.useState(false)
    let [harga, changeHarga ] = React.useState(null)
    let [usia, changeUsia ] = React.useState('Dewasa')
    let [jumlah,changeJumlah] = React.useState('1')
    let total = harga * jumlah;

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{padding:0}}>
                    <View style={styles.card}>
                        <H1Kapalzy></H1Kapalzy>
                        <Text style={styles.label}>Pelabuhan Awal</Text>
                        <View style={styles.inputWrapper}>
                            <Image source={Ship} style={styles.inputIcon}></Image>
                            <Pressable onPress={() => setVisibleModalAwal(true)} style={{width:'100%'}}>
                                <View pointerEvents="none">
                                    <TextInput 
                                        style={styles.input} 
                                        onChangeText={changeAwal}
                                        value={awal}
                                    />
                                </View>
                            </Pressable>
                        </View>
                        <Text style={styles.label}>Pelabuhan Tujuan</Text>
                        <View style={styles.inputWrapper}>
                            <Image source={Ship} style={styles.inputIcon}></Image>
                            <Pressable onPress={() => setVisibleModalTujuan(true)} style={{width:'100%'}}>
                                <View pointerEvents="none">
                                    <TextInput 
                                        style={styles.input} 
                                        onChangeText={changeTujuan}
                                        value={tujuan}
                                    />
                                </View>
                            </Pressable>
                        </View>
                        <Text style={styles.label}>Pilih Layanan</Text>
                        <View style={styles.inputWrapper}>
                            <Image source={Seat} style={styles.inputIcon}></Image>
                            <Pressable onPress={() => setVisibleModalLayanan(true)} style={{width:'100%'}}>
                                <View pointerEvents="none">
                                    <TextInput 
                                        style={styles.input}  
                                        onChangeText={changeLayanan}
                                        value={layanan}
                                        />
                                </View>
                            </Pressable>
                        </View>
                        <Text style={styles.label}>Pilih Tanggal Masuk</Text>
                        <View style={styles.inputWrapper}>
                            <Image source={Calender} style={styles.inputIcon}></Image>
                            <TextInput 
                            style={styles.input}
                            onChangeText={changeTanggal}
                            value={tanggal} />
                        </View>
                        <Text style={styles.label}>Pilih Jam Masuk</Text>
                        <View style={styles.inputWrapper}>
                            <Image source={Clock} style={styles.inputIcon}></Image>
                            <TextInput 
                                style={styles.input}
                                onChangeText={changeJam}
                                value={jam}
                                />
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <TextInput style={styles.inputstatus} onChangeText={changeUsia} value={usia} />
                            <TextInput style={[styles.inputstatus,{width:'30%',textAlign:'center'}]} onChangeText={changeJumlah} value={jumlah} keyboardType="numeric"/>
                        </View>
    
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={styles.createTicket} onPress={()=>navigation.navigate('BuatTiket',{
                                    awal:awal,
                                    tujuan: tujuan,
                                    layanan: layanan,
                                    tanggal: tanggal,
                                    jam: jam,
                                    jumlah:jumlah,
                                    usia: usia,
                                    total:total,
                                })}>
                                <Image source={Search} style={styles.imagesearch}></Image>
                                <Text style={styles.buttontext}>Buat Tiket</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>

            <Modal transprent visible={visibleModalAwal} transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalCard}>
                        <Text style={styles.TitleModal}>Pelabuhan Awal</Text>
                        <FlatList
                        data={DataPembuatan}
                        keyExtractor={item => item.Id}
                        renderItem={({index,item}) => {
                            return(
                                <ScrollView>
                                    <TouchableOpacity style={styles.buttonChoose} onPress={()=>[setVisibleModalAwal(false),changeAwal(item.Asal)]}>
                                        <Text style={{fontSize:10,}}>{item.AsalProvinsi}</Text>
                                        <Text>{item.Asal}</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            )
                        }}>

                        </FlatList>
                    </View>
                </View>
            </Modal>

            <Modal transprent visible={visibleModalTujuan} transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalCard}>
                        <Text style={styles.TitleModal}>Pelabuhan Awal</Text>
                        <FlatList
                        data={DataPembuatan}
                        keyExtractor={item => item.Id}
                        renderItem={({index,item}) => {
                            return(
                                <ScrollView>
                                    <TouchableOpacity style={styles.buttonChoose} onPress={()=>[setVisibleModalTujuan(false),changeTujuan(item.Tujuan)]}>
                                        <Text style={{fontSize:10,}}>{item.TujuanProvinsi}</Text>
                                        <Text>{item.Tujuan}</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                            )
                        }}>

                        </FlatList>
                    </View>
                </View>
            </Modal>

            <Modal transprent visible={visibleModalLayanan} transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalCard}>
                        <Text style={styles.TitleModal}>Pilih Layanan</Text>
                        <FlatList
                        data={DataPembuatan}
                        keyExtractor={item => item.Id}
                        renderItem={({index,item}) => {
                            return(
                                <ScrollView>
                                    <TouchableOpacity style={styles.buttonChoose} onPress={()=>[setVisibleModalLayanan(false),changeLayanan(item.Layanan),changeHarga(item.Harga)]}>
                                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                            <Text>{item.Layanan}</Text>
                                            <Text style={{fontSize:10,}}>Rp {item.Harga},00</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            )
                        }}>

                        </FlatList>
                    </View>
                </View>
            </Modal>

            

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F2F2F2',
    },
    card: {
        marginTop:80,
        width:'90%',
        backgroundColor:'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40,
        borderRadius: 10,
        padding: 20,
        maxWidth:500,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    input: {
        height: 40,
        width:'90%',
        marginRight:10,
        maxWidth:400,
        marginTop:1,
        borderWidth: 1,
        marginLeft:10,
        padding: 10,
        borderRadius:5,
        borderColor:'#D9DCDC',
        backgroundColor:'#EFF4F4',
        
    },
    inputstatus: {
        marginBottom:20,
        marginTop:10,
        height: 40,
        width:'60%',
        borderWidth: 1,
        maxWidth:500,
        padding: 10,
        borderRadius:5,
        borderColor:'#D9DCDC',
        backgroundColor:'#EFF4F4',
        
    },
    createTicket:{
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
    imagesearch:{
        height:20,
        width: 20,
        marginLeft:10,
        position:'absolute',
    },
    inputIcon:{
        width:24,
        height:24,
    },
    inputWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },
    label:{
        color:'#9D9D9D',
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
    buttonChoose:{
        padding:10,
        marginBottom:5,
    }
});

export default Home;