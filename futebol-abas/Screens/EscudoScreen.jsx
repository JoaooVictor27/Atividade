import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient' 

export default function EscudoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
 
      <LinearGradient
        colors={['#006B3F', '#5D9F57']} 
        style={styles.background}
      >
        <View style={styles.container}>
          <Text variant='headlineSmall' style={styles.title}>Palmeiras</Text>

          <Card>
            <Card.Content>
              <Title>Escudo</Title>
              <Paragraph>
                O escudo do Palmeiras representa nossa história e nossa paixão!
              </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/96/a4/6d/96a46d845af876f648963f99df451e82.jpg' }} />
          </Card>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
})
