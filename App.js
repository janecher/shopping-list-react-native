
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <Text style={styles.text}>Yo what's up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'darkblue',
    fontSize: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});