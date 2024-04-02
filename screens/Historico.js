import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Historico() {
  /* useState to register the data loaded from Storage. */
  const [favoritesList, setfavoritesList] = useState([]);

  /*  useEffect will be used when the user get in the favorites screen (so,it just happens once)*/
  useEffect(() => {
    const LoadFavorites = async () => {
      try {
        /* Acessing the created storage before and saving the data's strings */
        const data = await AsyncStorage.getItem("@favoritesEdu");

        /* If there's data, turn it into a object (JSON.parse) and update the state with a favoritesList */
        if (data) {
          setfavoritesList(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error to load the data: " + error);
        Alert.alert("Error", "Something went wrong ");
      }
    };
    LoadFavorites();
  }, []);
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <Text style={styles.title}>Localização:</Text>
      {location && (
        <Text style={styles.text}>
          Latitude: {location.coords.latitude}
          {"\n"}
          Longitude: {location.coords.longitude}
        </Text>
      )}

      <Text style={styles.title}>Nome da localização:</Text>
      <Text style={styles.text}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    marginTop: 5,
  },
});
