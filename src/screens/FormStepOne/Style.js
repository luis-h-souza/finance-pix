import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4f5f6",
    justifyContent: "center",
    padding: 24,
    gap: 12
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    letterSapcing: 1,
    color: '#212529',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500'
  },
  group: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  control: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16
  },
  error: {
    color: '#DC1637',
    fontSize: 14,
    marginTop: 8,
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
});
