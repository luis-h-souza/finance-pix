import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./Styles"
import { Header } from "../../components/Header/Header"
import Ionicons from '@expo/vector-icons/Ionicons';

export function SendPix({ navigation }) {

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >

      <Header title={'Enviar Pix'} />
      <View style={styles.container}>

        <View style={styles.saldo}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../../assets/icon/showEye.png')} style={styles.eye} />
            <Text style={styles.h2}>Saldo</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'end' }}>
            <Text style={styles.h2}>R$ xxx,xx</Text>
          </View>
        </View>

        <View style={styles.bodyTitle}>
          <Text style={styles.h1}>
            Escolha uma das opções abaixo para enviar seu Pix
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SendPixQRCode')}>
          <View style={[styles.cards, { marginTop: 32, height: 92 }]}>
            <View style={styles.iconBackground}>
              <Ionicons name="qr-code" size={32} color="#FFF" />
            </View>
            <Text style={[styles.h2, { color: '#212529' }]}>Enviar Pix por QR Code</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SendPixKey')}>
          <View style={[styles.cards, { marginTop: 32, height: 92 }]}>
            <View style={styles.iconBackground}>
              <Ionicons name="key-outline" size={32} color="#FFF" />
            </View>
            <Text style={[styles.h2, { color: '#212529' }]}>Enviar Pix por Chave</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SendPixContact')}>
          <View style={[styles.cards, { marginTop: 32, height: 92 }]}>
            <View style={styles.iconBackground}>
              <Ionicons name="person-circle-sharp" size={42} color="#FFF" />
            </View>
            <Text style={[styles.h2, { color: '#212529' }]}>Enviar Pix para Contato</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}
