import { SafeAreaView, Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem-Vindo ao BeFake</Text>
        <Button
          title="Comece agora?"
          onPress={() => {
            navigation.navigate("Comeceagora");
          }}
          style={styles.button}
          color="#007bff"
        />

        <Button
          title="Historico"
          onPress={() => {
            navigation.navigate("Historico");
          }}
          style={styles.button}
          color="#007bff"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
