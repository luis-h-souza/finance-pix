import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 124,
    backgroundColor: '#087F5B',
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 24,
    shadowColor: '#ADB5BD',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: '#FFFFFF',
    marginStart: 40,
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
    marginEnd: 40,
  },
})
