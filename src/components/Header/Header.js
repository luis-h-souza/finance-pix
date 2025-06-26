import { View, Text } from "react-native";
import { styles } from "./Style";

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>HOME</Text>
      <View style={styles.greeting}>
        <View style={styles.circle}></View>
        <Text style={styles.text}>Olá, Luis!</Text>
      </View>
    </View>
  )
}
