import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Header } from "../../components/Header/Header"
import { styles } from "../Home/Style"
import { Saldo } from "../../components/Saldo/Saldo"

export function Transaction({ navigation }) {

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >

      <Header title={'PIX'} />
      <View style={styles.container}>

        <Saldo />

        <View style={styles.bodyTitle}>
          <Text style={[styles.h1, { fontSize: 16, fontWeight: '600', color: '#212529', marginBottom: 0 }]}>
            Realize suas transações de forma rápida e fácil
          </Text>

          <View style={[styles.hr, { marginTop: 16, marginBottom: 16 }]}></View>

          <TouchableOpacity onPress={() => navigation.navigate('SendPix')}>
            <View style={[styles.cards, { marginTop: 44, height: 80 }]}>
              <Image source={require('../../../assets/icon/pix.png')} style={[styles.iconCard, { width: 54, height: 54 }]} />
              <Text style={[styles.h1, { color: '#212529' }]}>Enviar Pix</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ReceivePix')}>
            <View style={[styles.cards, { marginTop: 44, height: 80 }]}>
              <Image source={require('../../../assets/icon/pix.png')} style={[styles.iconCard, { width: 54, height: 54 }]} />
              <Text style={[styles.h1, { color: '#212529' }]}>Receber Pix</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
