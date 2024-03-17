import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function Login2() {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => console.log('Go back')} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>

      {/* EDCUB Logo */}
      <Image source={require('../LoginScreen/EDCUB_logo.png')} />
      
      {/* Title */}
      <Text style={styles.title}>Unlock the World of</Text>
      <Text style={styles.title2}>Playtime Wonders!</Text>
      {/* Subtitle */}
      <Text style={styles.subtitle}>Sign in to EDCUB for interactive adventuresthat make every moment memorable. Let the fun commence!</Text>
      
      {/* Email Label */}
      <Text style={styles.label}>Email</Text>
      
      {/* Email Text Input */}
      <TextInput
        style={styles.input}
        placeholder="anyachalotra95@gmail.com"
        keyboardType="email-address"
      />

      {/* Password Label */}
      <Text style={styles.label}>Password</Text>
      
      {/* Password Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor: '#FFFFFF', // Set background color to white
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6E77',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20, // Add spacing between inputs
  },
  nextButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20, // Adjusted marginTop to increase the gap between the agreement text and the button
    backgroundColor: '#FF6E77',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
