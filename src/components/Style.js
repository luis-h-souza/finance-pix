import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingHorizontal: 24,
    backgorundColor: '#F8F9FA',
  },
  containerSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#087F5B'
  },
  loginLogo: {
    resizeMode: 'contain',
    marginTop: 132,
    marginBottom: 64
  },
  logoSplash: {
    resizeMode: 'contain'
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    letterSapcing: 1,
    color: '#212529'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5
  },
  textLink: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#087F5B'
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#FFFF'
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    minWidth: '100%',
    height: 64,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ADB5BD',
    boxShadow: '2px 2px 4px 0px #ADB5BD',
  },
  btn: {
    marginTop: 24,
    backgroundColor: '#087F5B',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    minWidth: '100%',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '2px 2px 4px 0 #ADB5BD',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default styles;