import { Image, Text, View } from 'react-native';
import { styles } from './Styles';

export function Saldo() {
  return (
    <View style={styles.saldo}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../../assets/icon/showEye.png')} style={styles.eye} />
        <Text style={styles.h2}>Saldo</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'end' }}>
        <Text style={styles.h2}>R$ xxx,xx</Text>
      </View>
    </View>
  )
}
