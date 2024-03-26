import { SafeAreaView, Text, View } from "react-native";
import Arrumardados from "./Arrumardados";
export default function Historico({ route }) {
  const { location, image, text } = route.params;

  return (
    <SafeAreaView>
      <View>
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Historico</Text>
          <Arrumardados location={location} image={image} text={text} />
        </View>
      </View>
    </SafeAreaView>
  );
}
