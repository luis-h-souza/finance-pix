import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginBottom: Platform.OS === 'ios' ? 38 : 24, // Ajuste para iOS/Android
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.9)', // Fundo translúcido
    flexDirection: 'row',
    borderRadius: 99,
    gap: 10,
    elevation: 10, // Sombra Android
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.80, // Sombra iOS
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBackground: {
    padding: 8,
    borderRadius: '51%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
