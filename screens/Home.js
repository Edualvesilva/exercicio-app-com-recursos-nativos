import { SafeAreaView, Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Comeceagora from "./Comeceagora.js";
export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titulo}>Bem-Vindo ao BeFake</Text>
        <Button
          title="Comece agora?"
          onPress={() => {
            navigation.navigate("Comeceagora");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
