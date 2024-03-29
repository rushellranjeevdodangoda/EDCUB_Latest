import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <View style={appStyles.container}>
          <TabNavigation/>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  ); 
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
});
