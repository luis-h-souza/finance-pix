import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingHorizontal: 20,
    backgorundColor: '#F8F9FA',
    paddingHorizontal: 16
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    letterSapcing: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.5
  },
  textLink: {
    fontSize: 16,
    fontWeight: '400',
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
    paddingVertical: 16,
    minWidth: 324,
    height: 64,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ADB5BD',
    boxShadow: '2px 2px 4px 0 #ADB5BD',
  },
  btn: {
    marginTop: 24,
    backgroundColor: '#087F5B',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
    minWidth: 324,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '2px 2px 4px 0 #ADB5BD',
  },
})

export default styles;