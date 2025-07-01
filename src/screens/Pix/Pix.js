import { Image, ScrollView, Text, View } from "react-native"
import { Header } from "../../components/Header/Header"
import { styles } from "../Home/Style"

export function Transaction({ title }) {
  console.log('transaction')

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
          <Text style={styles.h1}>
            Área de transfêrencia
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
