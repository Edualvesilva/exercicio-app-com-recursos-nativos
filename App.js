import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as mediaLibrary from "expo-media-library";

import { useState } from "react";

export default function App() {
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
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button title="Tirar uma nova foto" onPress={acessarCamera} />
        <Button title="Escolha uma imagem da Galeria" onPress={pickImage} />
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        ) : (
          <Text>Sem Foto!</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
