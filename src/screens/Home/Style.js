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
  },
  h1: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 32,
    letterSapcing: 1,
    color: '#212529'
  },
  h2: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 32,
    letterSapcing: 1,
    color: '#FFFFFF'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#FFFFFF'
  },
  saldo: {
    minWidth: 344,
    height: 70,
    marginTop: 24,
    backgroundColor: '#087F5B',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    elevation: 12,
    boxShadow: '2px 2px 4px 0 #ADB5BD',
    shadowColor: '#ADB5BD',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  eye: {
    width: 40,
    height: 40,
    marginRight: 24
  },
  bodyTitle: {
    minWidth: 344,
    marginBlock: 20,
    paddingStart: 8,
    justifyContent: 'flex-start',
  },
  cards: {
    flexDirection: 'row',
    minWidth: 344,
    height: 70,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 16,
    alignItems: 'center',
    boxShadow: '2px 2px 4px 0 #ADB5BD',
    shadowOffset: {
      width: 2, height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowColor: '#ADB5BD',
  },
  iconCard: {
    width: 48,
    height: 48,
    marginStart: 32,
    marginEnd: 44
  },
  hr: {
    width: 350,
    height: 1,
    marginTop: 40,
    backgroundColor: 'rgba(173, 181, 189, 0.3)',
  },

})
