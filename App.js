// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './App/Screens/LoginScreen/Login';
import Login2 from './App/Screens/LoginScreen/Login2';


export default function App() {
  return (
    <SafeAreaProvider> 
    <View style={appStyles.container}>
      <Login2/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>
  ); 
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Changed background color
    alignItems: 'flex-start', // Align items to flex-start
    justifyContent: 'center',
    paddingLeft: 20, // Optional: Add padding to the left side
    paddingTop: 50, // Optional: Add padding to the top
  },
});
