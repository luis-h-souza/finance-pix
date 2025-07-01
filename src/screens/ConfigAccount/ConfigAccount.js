import { Image, ScrollView, Text, View } from "react-native"
import { Header } from "../../components/Header/Header"
import { styles } from "../Home/Style"

export function ConfigAccount({ title }) {

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >

      <Header title={'CONFIGURAÇÕES'} />
      <View style={styles.container}>

        <View style={styles.bodyTitle}>
          <Text style={styles.h1}>
            Configurações
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
