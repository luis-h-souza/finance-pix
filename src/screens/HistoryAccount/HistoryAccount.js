import { Image, ScrollView, Text, View } from "react-native"
import { Header } from "../../components/Header/Header"
import { styles } from "../Home/Style"

export function HistoryAccount({ title }) {

  return (
    <View style={{ flex: 1 }}>
      <Header title={'Extrato'} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >

        <View style={styles.container}>

          <View style={styles.bodyTitle}>
            <Text style={styles.h1}>
              ùltimas transações
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
