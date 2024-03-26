import React from "react";
import { View, Text, Image } from "react-native";

export default function Arrumardados({ location, image, text }) {
  location = location || { coords: { latitude: null, longitude: null } };
  if (!location.coords) {
    return <View />;
  }

  return (
    <View
      style={{
        marginTop: 20,
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
      }}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, resizeMode: "co" }}
        />
      )}

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>Localização:</Text>
      {location && (
        <Text>
          Latitude: {location.coords.latitude}
          <br />
          Longitude: {location.coords.longitude}
        </Text>
      )}

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        Nome da locação:
      </Text>
      <Text>{text}</Text>
    </View>
  );
}
Arrumardados.defaultProps = {
  location: { coords: { latitude: null, longitude: null } },
};
