import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Propinas from "./Propinas";
export default function App() {
  return (
    <View style={styles.fondoApp}>
      <View style={styles.container}>
        <Text style={styles.txt}>
          Cambio propinas
        </Text>
      </View>
      <Propinas />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    paddingVertical: 50,
  },
  fondoApp: {
    backgroundColor: "#C0E3E6",
    flex: 1,
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "hsl(172, 67%, 45%)",
  },
});
