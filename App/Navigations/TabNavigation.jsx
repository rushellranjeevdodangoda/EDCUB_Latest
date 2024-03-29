import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ActivityScreen from '../Screens/ActivityScreen/ActivityScreen';
import MemoriesScreen from '../Screens/MemoriesScreen/MemoriesScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name = 'home' component={HomeScreen}/>
        <Tab.Screen name = 'activities' component={ActivityScreen}/>
        <Tab.Screen name = 'memories' component={MemoriesScreen}/>
        <Tab.Screen name = 'settings'component={SettingsScreen}/>
    </Tab.Navigator>
  )
}