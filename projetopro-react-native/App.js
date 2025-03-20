import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

//Componente principal
//Ele deve retornar o que será renderizado na tela (Template feito com JSK)
export default function App() {
  //Lógica do meu componente










  
  
  //Retorno com Jsk
  return (
    <View style={styles.container}>
      {/*COmentário dentro do template JSK */}
      {/* Código javascript */}
      <Text>{}</Text>
    
      <Text></Text>
      <Button title='Rachadinha' onPress={alerta}></Button>
      <Image
       source={{uri:'https://i.pinimg.com/736x/d4/f7/05/d4f705498447bc4bfc4abc4a6c0f2dab.jpg'}}
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

