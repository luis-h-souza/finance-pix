import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'start',
    backgorundColor: '#F8F9FA',
    paddingHorizontal: 24,
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
  h2: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  bodyTitle: {
    minWidth: '100%',
    marginBottom: 16,
    marginTop: 24,
    paddingStart: 8,
    justifyContent: 'flex-start',
  },
  cards: {
    flexDirection: 'row',
    minWidth: '100%',
    height: 70,
    marginTop: 32,
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
    marginEnd: 32
  },
  hr: {
    minWidth: '100%',
    height: 1,
    marginVertical: 24,
    backgroundColor: 'rgba(173, 181, 189, 0.3)',
  },
  iconBackground: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(8, 127, 91, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 32,
    marginStart: 32,
  },
    h1: {
    fontSize: 20,
    fontWeight: '600',
    color: '#212529'
  },
})
