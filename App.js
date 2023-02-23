import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const quotes = [
  {
    id: 1,
    text: "May the Force be with you.",
  },
  {
    id: 2,
    text: "I find your lack of faith disturbing.",
  },
  {
    id: 3,
    text: "No, I am your father.",
  },
  {
    id: 4,
    text: "These aren't the droids you're looking for.",
  },
  {
    id: 5,
    text: "Help me, Obi-Wan Kenobi. You're my only hope.",
  },
  {
    id: 6,
    text: "Do. Or do not. There is no try.",
  },
  {
    id: 7,
    text: "I've got a bad feeling about this.",
  },
  {
    id: 8,
    text: "It's a trap!",
  },
  {
    id: 9,
    text: "Use the Force, Luke.",
  },
  {
    id: 10,
    text: "The Force will be with you, always.",
  },
];

const Separator = () => {
  return <View style={styles.separator} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quotes from Star Wars</Text>
      <FlatList
        data={quotes}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
    marginTop: 10,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
});

export default App;