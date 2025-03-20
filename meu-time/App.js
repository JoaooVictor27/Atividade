import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, ScrollView, Alert, Dimensions, ImageBackground } from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  const handleGoal = () => {
    Alert.alert("Gol Do Barcelona!");
  };

  return (
    // Use ImageBackground para definir uma imagem como fundo
    <ImageBackground
      source={{ uri: "https://i.pinimg.com/736x/5e/e2/17/5ee21774bedc9d54b03e65936bc8eb33.jpg" }} // Substitua pela sua imagem
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Barcelona</Text>
        <Text style={styles.info}>Fundação: 29 de novembro de 1899</Text>
        <Text style={styles.info}>Estádio: Camp Nou</Text>
        <Text style={styles.info}>Títulos Espanhois: 27</Text>
        <Text style={styles.info}>Champions League: 5</Text>
        <Text style={styles.info}>
          Barcelona, o Catalão da Espanha, conhecido por sua filosofia baseada no tik-taka, tendo várias eras vitoriosas.
        </Text>

        <Image
          source={{ uri: "https://i.pinimg.com/736x/5d/77/fc/5d77fcb161cf86d135c00b645de55087.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.pinimg.com/736x/8f/dc/0b/8fdc0b1e5c35f6d01c2bbe4ad7bf6824.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.pinimg.com/736x/16/47/15/164715c737550ba815688901ed329b23.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.pinimg.com/736x/b0/53/96/b053961467298b69815e79af3a548746.jpg" }}
          style={styles.image}
        />
        <Image
          source={{ uri: "https://i.pinimg.com/736x/38/06/92/3806929123215f522ec65db31fb1a80c.jpg" }}
          style={styles.image}
        />

        <Button title="GOLO" onPress={handleGoal} />
        <StatusBar style="auto" />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    fontFamily: "Poppins",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    fontFamily: "Poppins",
  },
  image: {
    width: width * 0.9,
    height: width * 1.5,
    marginVertical: 10,
    borderRadius: 15,
  },
});