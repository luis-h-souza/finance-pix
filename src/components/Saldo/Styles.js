import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que o conteúdo cresça e se ajuste à altura do ScrollView
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1, // Ocupa toda a altura da tela
  },
  container: {
    flex: 1,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'start',
    backgorundColor: '#F8F9FA',
    paddingHorizontal: 24,
  },
  h2: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 32,
    letterSapcing: 1,
    color: '#FFFFFF'
  },
  saldo: {
    minWidth: '100%',
    height: 70,
    marginTop: 24,
    backgroundColor: '#087F5B',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    flexDirection: 'row',
    boxShadow: '2px 2px 4px 0 #ADB5BD',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.80, // Sombra iOS
  },
  eye: {
    width: 40,
    height: 40,
    marginRight: 24
  },
});
