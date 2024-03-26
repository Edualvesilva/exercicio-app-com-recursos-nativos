import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as mediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect, useRef } from "react";

import * as Location from "expo-location";
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      mapRef.current?.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [location]);

  let text = "Aguardando...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const acessarCamera = async () => {
    const imagem = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (!imagem.canceled) {
      /* Usando a api do mediaLibrary para salvar no armazenamento físico do dispositivo */
      await mediaLibrary.saveToLibraryAsync(imagem.assets[0].uri);
      setImage(imagem.assets[0].uri);
    }
    console.log(imagem);
  };

  const localizarNoMapa = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button title="Tirar uma nova foto" onPress={acessarCamera} />
        <Button title="Escolha uma imagem da Galeria" onPress={pickImage} />
        {image ? (
          <Image source={{ uri: image }} style={styles.imagem} />
        ) : (
          <Text>Sem Foto!</Text>
        )}

        <View>
          {location && location.coords ? (
            <MapView style={styles.map} ref={mapRef}>
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
              />
            </MapView>
          ) : (
            <Text>Carregando mapa.....</Text>
          )}
          <Button title="localizar no mapa" onPress={localizarNoMapa} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9B9898",
  },
  map: { width: 350, height: 350, borderColor: "#FFF" },
});
