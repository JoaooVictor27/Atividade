import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './componentes/Filmes';
import Series from './componentes/Series';

export default function App() {

  const listaFilmes = [
    {
      nome: "Sonic 3 o Filme",
      ano: 2024,
      diretor: "Jeff Fowler",
      tipo: "Ação",
      capa: "https://i.pinimg.com/736x/74/c7/17/74c717969a36f7d78c99f23702f46976.jpg"
    },
    {
      nome: "Batman",
      ano: 2024,
      diretor: "Alfred HiMatt Reevest",
      tipo: "Drama",
      capa: "https://i.pinimg.com/736x/e3/bf/9e/e3bf9e04cc68a7229019cf6db6b93c7e.jpg"
    },
    {
      nome: "Top Gun Maverick",
      ano: 2022,
      diretor: "Hector Babenco",
      tipo: "Ação",
      capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
    },
    {
      nome: "Avatar: O Caminho da Água",
      ano: 2022,
      diretor: "James Cameron",
      tipo: "Ficção Científica",
      capa: "https://i.pinimg.com/736x/b2/f8/43/b2f843111df8347133dca44dc2c5f57b.jpg"
    }
  ],

    listaSeries = [
      {
        nome: "The Last Of Us",
        ano: 2022,
        diretor: "Craig Mazin",
        temporadas: 2,
        capa: "https://i.pinimg.com/736x/da/71/74/da71743ddd8f1cc98fa0565215919275.jpg"
      },
      {
        nome: "Ted Lasso",
        ano: 2023,
        diretor: "Bill Lawrence ",
        temporadas: 3,
        capa: "https://i.pinimg.com/736x/8d/e8/f7/8de8f7b88dc557fad46689124799aaa4.jpg"
      },
      {
        nome: "Family Guy ",
        ano: 1999,
        diretor: "Seth Green",
        temporadas: 23,
        capa: "https://i.pinimg.com/736x/f5/46/8e/f5468eaacb6027084fc423ac399a138d.jpg"
      }
    ]

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.texto}>Filmes</Text>

        {
          listaFilmes.map(
            filme => {
              return (
                <Filmes
                  nome={filme.nome}
                  ano={filme.ano}
                  diretor={filme.diretor}
                  tipo={filme.tipo}
                  capa={filme.capa}
                />
              )
            }
          )
        }

        <Text style={styles.texto}>Series</Text>

        {
          listaSeries.map(
            series => {
              return (
                <Series
                  nome={series.nome}
                  ano={series.ano}
                  diretor={series.diretor}
                  tipo={series.temporadas}
                  capa={series.capa}
                />
              )
            }
          )
        }

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 50,
    fontWeight: "600",
    color: "Red",
    marginTop: 10,
    marginBottom: 10,
  },

});