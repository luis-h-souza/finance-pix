import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4f5f6",
    justifyContent: "center",
    padding: 24,
    gap: 16
  },
  buttonSteps: {
    height: 56,
    width: '100%',
    backgroundColor: '#087F5B',
    borderRadius: 16,
    marginTop: 24,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '2px 4px 4px 0 #ADB5BD',
    shadowColor: '#ADB5BD',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  titleBtnSteps: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#FFFF'
  },

});