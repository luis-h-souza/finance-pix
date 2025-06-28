import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingHorizontal: 24,
    backgorundColor: '#F8F9FA',
  },
  loginLogo: {
    resizeMode: 'contain',
    marginTop: 132,
    marginBottom: 64
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
  button: {
    height: 64,
    width: '100%',
    backgroundColor: '#087F5B',
    borderRadius: 16,
    marginTop: 24,
    paddingVertical: 16,
    boxShadow: '2px 4px 4px 0 #ADB5BD',
    shadowColor: '#ADB5BD',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleBtn: {
    width: '100%',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFF',
  },
});
