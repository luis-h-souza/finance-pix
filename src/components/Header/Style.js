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
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#FFFFFF',
    letterSpacing: 1,
    marginStart: 40,
    paddingTop: 20
  },
  greeting: {
    flexDirection: 'collumn',
    marginEnd: 40,
    alignItems: 'center',
    paddingTop: 20
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    marginBottom: 2
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.5,
    color: '#FFFFFF'
  },
})
