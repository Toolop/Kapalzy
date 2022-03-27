import React, { useState } from 'react';
import { Modal, Text,View,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Lup from '../assets/Lup.png'
import Profile from '../assets/Profile.png'
import CallCenter from '../assets/CallCenter.png'
import History from '../assets/History.png'

const Lainnya = ({visible}) => {

  return(
          <View style={styles.modal}>
              <View style={styles.modalCard}>
                  <View style={styles.modalHeader}>

                    <Text style={styles.TitleModal}>Menu</Text>

                  </View>
                  <View style={{marginTop:20,marginBottom:20,}}>
                      <View style={styles.MenuContainer}>
                        <TouchableOpacity style={styles.buttonMenu}>
                          <Image source={Lup} style={{width:50,height:50}}></Image>
                          <Text style={styles.ButtonText}>Cek Pemesanan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonMenu}>
                          <Image source={Profile} style={{width:50,height:50}}></Image>
                          <Text style={styles.ButtonText}>Detail Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonMenu}>
                          <Image source={CallCenter} style={{width:50,height:50}}></Image>
                          <Text style={styles.ButtonText}>Hubungi Kami</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonMenu}>
                          <Image source={History} style={{width:50,height:50}}></Image>
                          <Text style={styles.ButtonText}>Riwayat Pemesanan</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View>

  )
}


const styles = StyleSheet.create({
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
      borderRadius:10,
      paddingLeft:20,
      paddingRight:20,
  },
  TitleModal:{
      color: 'black',
      textAlign:'center',
      fontWeight:'bold',
      fontSize:24,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
  },
  modalHeader:{
      padding:10,
      marginTop:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
      
  },
  TextModal:{
      textAlign:'center',
      fontWeight:'bold',
  },
  buttonMenu:{
    borderWidth:1,
    padding:15,
    width:125,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  ButtonText:{
    fontWeight: 'bold',
    fontSize:10,
    flexWrap:'nowrap'
  },
  MenuContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
  }
});


export default Lainnya;