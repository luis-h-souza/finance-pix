import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./Styles"
import { Header } from "../../components/Header/Header"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Saldo } from "../../components/Saldo/Saldo";

export function ReceivePix({ navigation }) {

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >

      <Header title={'Receber Pix'} />
      <View style={styles.container}>

        <Saldo />

        <View style={styles.bodyTitle}>
          <Text style={styles.h1}>
            Escolha uma das opções abaixo para receber seu Pix
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SendPixQRCode')}>
          <View style={[styles.cards, { marginTop: 32, height: 92 }]}>
            <View style={styles.iconBackground}>
              <Ionicons name="qr-code" size={32} color="#FFF" />
            </View>
            <Text style={[styles.h2, { color: '#212529' }]}>Receber Pix por QR Code</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SendPixKey')}>
          <View style={[styles.cards, { marginTop: 32, height: 92 }]}>
            <View style={styles.iconBackground}>
              <Ionicons name="key-outline" size={32} color="#FFF" />
            </View>
            <Text style={[styles.h2, { color: '#212529' }]}>Receber Pix por Chave</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SendPixContact')}>
          <View style={[styles.cards, { marginTop: 32, height: 92 }]}>
            <View style={styles.iconBackground}>
              <Ionicons name="person-circle-sharp" size={42} color="#FFF" />
            </View>
            <Text style={[styles.h2, { color: '#212529' }]}>Receber Pix para Contato</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}
