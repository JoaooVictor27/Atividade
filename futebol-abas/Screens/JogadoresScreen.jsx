import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Card, Avatar, Text } from 'react-native-paper';

const jogadores = [
  {
    nome: "Vitor Roque",
    numero: 9,
    imagem: "https://i.pinimg.com/736x/13/b4/0d/13b40da04683734e36f0bc3c412a1c68.jpg"
  },
  {
    nome: "Raphael Veiga",
    numero: 10,
    imagem: "https://i.pinimg.com/736x/09/5c/44/095c44499262c0241a14c24534aefd21.jpg"
  },
  {
    nome: "Richard Rios",
    numero: 25,
    imagem: "https://i.pinimg.com/736x/53/e2/e0/53e2e01b7385e7e14ca00163ab8decc6.jpg"
  },
  {
    nome: "Paulinho",
    numero: 7,
    imagem: "https://i.pinimg.com/736x/59/16/03/5916031e4d67cfa7de9a37ef46d27d9a.jpg"
  },
  {
    nome: "Weverton",
    numero: 1,
    imagem: "https://i.pinimg.com/736x/03/9c/48/039c48cb562b2611c910fc7a4d5397b2.jpg"
  },
];

export default function JogadoresScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={jogadores}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.container}>
              <Avatar.Image source={{ uri: item.imagem }} size={60} style={styles.avatar} />
              <View style={styles.textContainer}>
                <Text style={styles.nome}> {item.numero} - {item.nome}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0f172a', 
  },
  card: {
    backgroundColor: '#334155',
    borderRadius: 10,
    marginBottom: 10,
    padding: 8,
    elevation: 3,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#1e293b',
  },
  textContainer: {
    marginLeft: 12,
    flexShrink: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
  },
});
  