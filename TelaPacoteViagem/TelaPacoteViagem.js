import React from 'react'

import {View, Text, StyleSheet, Image, Button, TouchableOpacity, ScrollView} from 'react-native'

import Constants from 'expo-constants'

import logo from '../assets/pracaLiberdade.jpg'

import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


export default () => {
  return(
    <ScrollView>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <TouchableOpacity style={styles.botao1} onPress={()=>alert('Abrindo álbum de fotos, aguarde...')}>
          <View style={styles.header3}>
            <Ionicons name="camera-outline" size={48} color="white" />
            <Text style={styles.textoBotao1}>  Pacote</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.texto2}>Belo Horizonte</Text>
          <TouchableOpacity>
            <View style={styles.header1}>
              <Foundation name="check" size={18} color="black" />
              <Text style={styles.textoLista}>  Aéreo ida e volta</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.header2}>
              <Foundation name="check" size={18} color="black" />
              <Text style={styles.textoLista}>  7 diárias</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.header2}>
              <Foundation name="check" size={18} color="black" />
              <Text style={styles.textoLista}>  Café da manhã</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.texto3}>A partir de</Text>
          <View style={styles.header3}>
              <Text style={styles.texto4}>R$ 3.843</Text>
              <TouchableOpacity style={styles.botao2} onPress={()=>alert('Abrindo o pacote. Aguarde... ')}>
                <Text style={styles.textoBotao2}>Confira</Text>
              </TouchableOpacity>
          </View>
          <Text style={styles.texto5}>TAXAS INCLUSAS</Text>
          <Text style={styles.texto6}>   ______________________________</Text>
          <Text style={styles.texto7}>EM ATÉ 10 X SEM JUROS</Text>  
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  container: { flex: 1, marginTop: Constants.statusBarHeight},

  logo: { width: 400, height: 350},

  botao1: { height: 48, width: 170, backgroundColor: '#FF8C00', borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 10, marginLeft: 15 },

  textoBotao1: { fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 25, alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: 8 },

  texto2: { fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 32, alignItems: 'center', justifyContent: 'center', color: 'black', marginTop: 10, marginLeft: 15 },

  textoLista: { fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 18, alignItems: 'center', justifyContent: 'center', color: 'black'},

  texto3: { fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 18, alignItems: 'center', justifyContent: 'center', color: 'black', marginTop: 30, marginLeft: 15 },

  header1: {alignItems: "left", dispaly: 'flex', flexDirection: 'row', marginTop: 20, marginLeft: 50},

  header2: {alignItems: "left", dispaly: 'flex', flexDirection: 'row', marginTop: 15, marginLeft: 50},

  header3: {alignItems: "left", dispaly: 'flex', flexDirection: 'row'},

  texto4: { fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 48, alignItems: 'center', justifyContent: 'center', color: 'black', marginLeft: 15 },

  botao2: { height: 50, width: 115, backgroundColor: '#32CD32', alignItems: 'center', justifyContent: 'center', marginTop: 5, marginLeft: 15},

  textoBotao2: { fontFamily: 'Roboto', fontWeight: 'normal', fontSize: 20, alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: 2 },

  texto5: { fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignItems: 'center', justifyContent: 'center', color: 'black', marginLeft: 15 },

  texto6: { fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignItems: 'center', justifyContent: 'center', color: '#A9A9A9', marginLeft: 5, marginRight: 5 },

  texto7: { fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignItems: 'center', justifyContent: 'center', color: '#0099ff', marginLeft: 70, marginRight: 70},

})