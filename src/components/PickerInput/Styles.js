import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4f5f6",
    justifyContent: "center",
    padding: 24,
    gap: 16
  },
  containerError: {
    width: '100%',
    marginBottom: 8,
  },
  error: {
    color: '#DC1637',
    fontSize: 14,
    fontStyle: 'italic',
    marginStart: 16
  },
  containerInput: {
    width: '100%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    width: '100%',
    height: 56,
    overflow: 'hidden',
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ADB5BD',
    elevation: 12,
    shadowColor: '#ADB5BD',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
})
