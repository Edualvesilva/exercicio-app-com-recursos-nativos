import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Historico() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const loadHistorico = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@edusalve");
        if (jsonValue !== null) {
          setHistorico(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.log("Error loading data from AsyncStorage:", error);
      }
    };

    loadHistorico();
  }, []);

  return (
    <ScrollView>
      {historico.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.title}>Imagem {index + 1}:</Text>
          {item.image && (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}

          <Text style={styles.title}>Localização:</Text>
          {item.location && (
            <Text style={styles.text}>
              Latitude: {item.location.coords.latitude}
              {"\n"}
              Longitude: {item.location.coords.longitude}
            </Text>
          )}

          <Text style={styles.title}>Nome da localização:</Text>
          <Text style={styles.text}>{item.texto}</Text>
        </View>
      ))}
    </ScrollView>
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
