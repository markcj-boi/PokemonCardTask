import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const pokemons = [
  {
    name: 'Charmander',
    hp: 39,
    type: 'Fire',
    icon: 'fire',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weakness: ['Water', 'Rock'],
  },
  {
    name: 'Squirtle',
    hp: 44,
    type: 'Water',
    icon: 'water',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    moves: ['Tackle', 'Bubble', 'Withdraw', 'Water Gun'],
    weakness: ['Grass', 'Electric'],
  },
  {
    name: 'Bulbasaur',
    hp: 45,
    type: 'Grass',
    icon: 'leaf',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weakness: ['Fire', 'Ice', 'Flying', 'Psychic'],
  },
];

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      {pokemons.map((poke, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.name}>{poke.name}</Text>
            <Text style={styles.hp}>
              <MaterialCommunityIcons name="heart" color="red" size={18} /> HP: {poke.hp}
            </Text>
          </View>

          <Image source={{ uri: poke.image }} style={styles.image} />

          <View style={styles.typeContainer}>
            <MaterialCommunityIcons name={poke.icon} size={20} color="orange" />
            <Text style={styles.typeText}> {poke.type}</Text>
          </View>

          <Text style={styles.label}>Moves:</Text>
          <Text style={styles.text}>{poke.moves.join(', ')}</Text>

          <Text style={styles.label}>Weakness:</Text>
          <Text style={styles.text}>{poke.weakness.join(', ')}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fefefe',
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 16,
    color: '#444',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 10,
  },
  typeContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  typeText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  text: {
    color: '#333',
    marginBottom: 5,
  },
});
