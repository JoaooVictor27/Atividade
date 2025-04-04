import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import {PaperProvider, Text} from 'react-native-paper'
import Time from './componentes/Time';

export default function App() {

  const times = [
    {
      nome: "Cruzeiro",
      anoFundacao: 1895,
      mascote: "Raposa",
      imagem: "https://i.pinimg.com/736x/bd/89/33/bd8933aad5e1a5c59ddd6cf0d3f1a46a.jpg",
      jogadores: [
        { nome: "Gabriel Barbosa", numero: 9, imagem: "https://i.pinimg.com/736x/3c/26/f2/3c26f23a12e930b17ad7287b4db08b90.jpg" },
        { nome: "Dudu", numero: 7, imagem: "hhttps://i.pinimg.com/736x/4d/45/d0/4d45d0cca0f614943ce9aed9e597f881.jpg" },
        { nome: "Cássio", numero: 1, imagem: "https://i.pinimg.com/736x/84/92/ad/8492ad692e20b4c4483d1627971bb0a5.jpg" },
        { nome: "Kaio Jorge", numero: 19, imagem: "hhttps://i.pinimg.com/736x/46/50/ed/4650ed8e3743015ccd5318041b58260c.jpg" },
        { nome: "Wallace", numero: 12, imagem: "https://i.pinimg.com/736x/f3/be/d3/f3bed3df9c318d99830e29e7ff94bdd5.jpg" },
      ],
    },
    {
      nome: "Palmeiras",
      anoFundacao: 1914,
      mascote: "Porco",
      imagem: "https://i.pinimg.com/736x/3d/9f/11/3d9f11fb01715a8c5ecef52cc2669dbe.jpg",
      jogadores: [
        { nome: "Estevão", numero: 7, imagem: "https://i.pinimg.com/736x/d8/38/66/d83866f3fca4ad8c0569275a043d8a2f.jpg" },
        { nome: "Vitor Roque", numero: 9, imagem: "hhttps://i.pinimg.com/736x/13/b4/0d/13b40da04683734e36f0bc3c412a1c68.jpg" },
        { nome: "Gustavo Gómez", numero: 15, imagem: "https://i.pinimg.com/474x/6f/c6/55/6fc655734d82e5dfe73d6a6364a2e5c9.jpg" },
        { nome: "Weverton", numero: 1, imagem: "https://i.pinimg.com/474x/98/15/b2/9815b2742d1d3f1733e8bf556f8132f1.jpg" },
        { nome: "Raphael Veiga", numero: 23, imagem: "https://i.pinimg.com/474x/94/6a/d6/946ad6271c4771121792f110591c9ff7.jpg" },

      ],
    },
    {
      nome: "Corinthians",
      anoFundacao: 1910,
      mascote: "Mosqueteiro",
      imagem: "https://i.pinimg.com/236x/01/1f/31/011f317c76941ce53a2addcc9cfbf84a.jpg",
      jogadores: [
        { nome: "Depay", numero: 10, imagem: "hhttps://i.pinimg.com/736x/77/7a/51/777a51f1eda8471d47cea2c3bd780696.jpg" },
        { nome: "Hugo Souza", numero: 1, imagem: "https://i.pinimg.com/736x/6a/66/16/6a6616f5d4e81b8e8b342b651300cacb.jpg" },
        { nome: "Carrilo", numero: 34, imagem: "hhttps://i.pinimg.com/736x/83/f1/9c/83f19cd2c4ac272eeb668300fbfde436.jpg" },
        { nome: "Yuri Alberto", numero: 9, imagem: "https://i.pinimg.com/474x/7d/bd/e0/7dbde00eb2ef3c90d0b04265d36e948b.jpg" },
        { nome: "Guarro", numero: 8, imagem: "https://i.pinimg.com/736x/85/98/82/85988266cd4c8209dd5d57c5f58c2e8d.jpg" },
      ],
    },
    {
      nome: "Atlético Mineiro",
      anoFundacao: 1908,
      mascote: "Galo",
      imagem: "https://i.pinimg.com/236x/0b/00/31/0b0031de783db64c86272078ba9eb72e.jpg",
      jogadores: [
        { nome: "Hulk", numero: 7, imagem: "https://i.pinimg.com/474x/ff/9b/38/ff9b384ca6fd51ce56afbdfe14e5b67d.jpg" },
        { nome: "Rony", numero: 10, imagem: "https://i.pinimg.com/736x/09/32/c0/0932c0443f8d7d8877d339a8565c8703.jpg" },
        { nome: "Everson", numero: 22, imagem: "https://i.pinimg.com/236x/2d/2f/f8/2d2ff8cad95ac498721d23269ba9540c.jpg" },
        { nome: "Lyanco", numero: 4, imagem: "https://i.pinimg.com/736x/fd/7f/3c/fd7f3c57e50ade4ceb516a4fced7d888.jpg" },
        { nome: "Arana", numero: 2, imagem: "https://i.pinimg.com/474x/22/d4/14/22d41443e6c56d61ce71c74380e4f8ff.jpg" },
      ],
    },
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text variant='displaySmall'>Lista de Times</Text>

        <FlatList
          data={times}
          renderItem={({ item }) => (
            <Time
              nome={item.nome}
              anoFundacao={item.anoFundacao}
              mascote={item.mascote}
              imagem={item.imagem}
              jogadores={item.jogadores}
            />
          )}
        />


      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
