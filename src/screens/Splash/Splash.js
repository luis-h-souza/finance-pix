import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import { styles } from './Style';

export function Splash({ navigation }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      navigation.navigate('Login')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.containerSplash}>
      <Image
        source={require('../../../assets/icon/logo.png')}
        style={styles.logoSplash}
      />
    </View>
  )
}
