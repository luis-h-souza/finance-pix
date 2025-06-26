import React from "react";
import { ScrollView, Text, View, Image } from "react-native";

import { Header } from '../../components/Header/Header'

import { styles } from "./Style";

export function Home({ navigation, title }) {

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >

    <View style={styles.container}>

      <Header />

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
          Área de transações
        </Text>
      </View>

      <View style={styles.cards}>
        <Image source={require('../../../assets/icon/pix.png')} style={styles.iconCard} />
        <Text style={[styles.h2, { color: '#212529' }]}>Enviar Pix</Text>
      </View>

      <View style={[styles.cards, { marginTop: 16 }]}>
        <Image source={require('../../../assets/icon/pix.png')} style={styles.iconCard} />
        <Text style={[styles.h2, { color: '#212529' }]}>Receber Pix</Text>
      </View>

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
  )
}
