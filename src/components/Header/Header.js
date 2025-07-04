import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { styles } from "./Style";

export function Header({ title }) {
  return (
    <View style={styles.header}>
      <View style={styles.content}>

        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
