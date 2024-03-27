import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home.js";
import Comeceagora from "./screens/Comeceagora.js";
import Historico from "./screens/Historico.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#0077cc" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Comeceagora"
            component={Comeceagora}
            options={{ title: "Comece Agora" }}
          />

          <Stack.Screen name="Historico" component={Historico} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
