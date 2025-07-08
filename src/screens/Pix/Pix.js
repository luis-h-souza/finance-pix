import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Header } from "../../components/Header/Header"
import { styles } from "../Home/Style"

export function Transaction({ navigation }) {

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >

      <Header title={'PIX'} />
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
          <Text style={[styles.h1, { fontSize: 20, fontWeight: '600', color: '#212529' }]}>
            Realize suas transações de forma rápida e fácil
          </Text>

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
