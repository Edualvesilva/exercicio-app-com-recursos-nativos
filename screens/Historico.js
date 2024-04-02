import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Historico() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const loadHistorico = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@edusalve");
        if (jsonValue !== null) {
          const data = JSON.parse(jsonValue);
          setImage(data.image);
          setLocation(data.location);
          setTexto(data.texto);
        }
      } catch (error) {
        console.log("Error loading data from AsyncStorage:", error);
      }
    };

    loadHistorico();
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});
