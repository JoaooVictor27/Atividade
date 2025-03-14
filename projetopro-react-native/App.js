import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

//Componente principal
//Ele deve retornar o que será renderizado na tela (Template feito com JSK)
export default function App() {
  //Lógica do meu componente
  const nome = "João"

  function alerta() {
    alert("Voce fez o L")
  }
  
  
  //Retorno com Jsk
  return (
    <View style={styles.container}>
      {/*COmentário dentro do template JSK */}
      {/* Código javascript */}
      <Text>{}</Text>
    
      <Text></Text>
      <Button title='Rachadinha' onPress={alerta}></Button>
      <Image
       source={{uri:'https://i.pinimg.com/736x/6f/e1/6f/6fe16f0f0b8ff6e33dd901a79d55e5ae.jpg'}}
       style={{
        height: 400,
        width: 200,
       }}
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

