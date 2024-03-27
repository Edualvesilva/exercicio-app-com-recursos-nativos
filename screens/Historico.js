import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function Historico({ route }) {
  const { location, image, text } = route.params;

  if (!location.coords) {
    return <View />;
  }

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
      <Text style={styles.text}>{text}</Text>
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
