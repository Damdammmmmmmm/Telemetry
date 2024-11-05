import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Logger3() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the GP screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
