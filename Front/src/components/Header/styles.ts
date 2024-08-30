import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 24,
  },
  logoContainer: {
    width: 180,
    height: 195,
    alignItems: "center",
    marginBottom: 26,
  },
  logo: {
    resizeMode: "contain",
  },
  textContainer: {
    flexDirection: "row",
    width: 275,
  },
  textSubContainer: {
    padding: 8,
    flex: 1,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "700",
    color: 'white'
  },
});
