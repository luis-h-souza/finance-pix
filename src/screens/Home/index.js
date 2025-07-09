import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Header } from '../../components/Header/Header'
import { Saldo } from '../../components/Saldo/Saldo';
import { styles } from "./Style";

export function Home({ navigation }) {

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(key, value);
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={'Luis Henrique'} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >

        <View style={styles.container}>

          <Saldo />

          <View style={styles.hr}></View>

          <TouchableOpacity onPress={() => navigation.navigate('SendPix')}>
            <View style={styles.cards}>
              <Image source={require('../../../assets/icon/pix.png')} style={styles.iconCard} />
              <Text style={[styles.h2, { color: '#212529' }]}>Enviar Pix</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ReceivePix')}>
            <View style={[styles.cards, { marginTop: 16 }]}>
              <Image source={require('../../../assets/icon/pix.png')} style={styles.iconCard} />
              <Text style={[styles.h2, { color: '#212529' }]}>Receber Pix</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.cards, { marginTop: 16 }]}>
            <Image source={require('../../../assets/icon/chaves.png')} style={styles.iconCard} />
            <Text style={[styles.h2, { color: '#212529' }]}>Minhas chaves Pix</Text>
          </View>

          <View style={[styles.cards, { marginTop: 16 }]}>
            <Image source={require('../../../assets/icon/historico.png')} style={styles.iconCard} />
            <Text style={[styles.h2, { color: '#212529' }]}>Histórico</Text>
          </View>

          <View style={styles.hr}></View>

          <View style={[styles.bodyTitle, { marginBottom: 4 }]}>
            <Text style={styles.h1}>
              Favoritos
            </Text>
          </View>

          <View style={[styles.cards, { marginTop: 16 }]}>
            <Image source={require('../../../assets/icon/h.png')} style={styles.iconCard} />
            <Text style={[styles.h2, { color: '#212529' }]}>Salvar chaves</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}
