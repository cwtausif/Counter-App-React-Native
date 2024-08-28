import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
    if (count === 11) {
      resetCounter();
    }
  };

  const resetCounter = () => {
    setCount(0);
    Vibration.vibrate(); // Trigger vibration when counter resets
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.incrementButton} onPress={incrementCounter}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={resetCounter}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#113009', // Set a solid background color instead
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  incrementButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '60%',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
