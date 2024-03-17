// Login.js
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => console.log('Go back')} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
      
      {/* Title */}
      <Text style={styles.title}>Create Account</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>Embark on a journey of joyful learning and shared moments!</Text>
      
      {/* Parent Name Label */}
      <Text style={styles.label}>Parent name</Text>
      
      {/* Parent Name Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Anya Chalotra"
      />

      {/* Email Label */}
      <Text style={styles.label}>Email</Text>
      
      {/* Email Text Input */}
      <TextInput
        style={styles.input}
        placeholder="anyachalotra95@gmail.com"
        keyboardType="email-address"
      />

      {/* Phone Label */}
      <Text style={styles.label}>Phone</Text>
      
      {/* Phone Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      {/* Password Label */}
      <Text style={styles.label}>Password</Text>
      
      {/* Password Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      {/* Agreement Text */}
      <Text style={styles.agreementText}>By Creating Account you agree to the <Text style={[styles.linkText, { color: '#FF6E77' }]}>Terms of service</Text> and <Text style={[styles.linkText, { color: '#FF6E77' }]}>Privacy policy</Text></Text>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => console.log('Login pressed')}>
          <Text style={[styles.loginLinkText, { color: '#FF6E77', fontWeight: 'bold' }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
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
  agreementText: {
    fontSize: 14,
    marginTop: 20, // Add spacing between the last input and the agreement text
  },
  linkText: {
    color: '#FF6E77',
    fontWeight: 'bold', // Make the links bold instead of underlined
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
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20, // Add spacing between the "Next" button and the login text
  },
  loginText: {
    fontSize: 16,
  },
  loginLinkText: {
    fontSize: 16,
  },
});
