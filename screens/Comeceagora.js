import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as mediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect, useRef } from "react";

import * as Location from "expo-location";
export default function Home() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão Negada");
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
    <ScrollView contentContainerStyle={styles.container} scr>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button
          title="Tirar uma nova foto"
          onPress={acessarCamera}
          style={styles.button}
          color="#007bff"
        />
        <View style={styles.middleContainer}>
          <TextInput
            placeholder="Nome da sua localização"
            style={styles.textoinput}
            autoFocus
          />
        </View>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagem} />
        ) : (
          <Text>Sem Foto!</Text>
        )}

        <View style={styles.ViewMap}>
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
          <Button
            title="localizar no mapa"
            onPress={localizarNoMapa}
            style={styles.buttonMap}
            color="#007bff"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9B9898",
    padding: 20,
  },
  map: { width: 300, height: 300, borderColor: "#FFF", marginVertical: 10 },

  imagem: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: -55,
  },
  button: {
    marginVertical: 10,
    width: 200,
  },

  textoinput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  ViewMap: {
    marginTop: 80,
    flex: 0.95,
  },
});
