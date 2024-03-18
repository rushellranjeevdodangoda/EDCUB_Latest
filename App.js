// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './App/Screens/LoginScreen/Login';
import Login2 from './App/Screens/LoginScreen/Login2';
import Avatar from './App/Screens/LoginScreen/Avatar';


export default function App() {
  return (
    <SafeAreaProvider> 
    <View style={appStyles.container}>
      <Avatar/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>
  ); 
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Changed background color
    alignItems: 'center',
    justifyContent: 'center',
     // Add horizontal padding to the container
    paddingTop:50,// Add padding to the top if necessary
  },
});
