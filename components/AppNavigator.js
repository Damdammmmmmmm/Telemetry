import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'C:/Users/user/Desktop/Telemetry_app/app/(tabs)/HomeScreen.js';
import Logger1 from 'C:/Users/user/Desktop/Telemetry_app/components/Logger1.js';
import Logger2 from 'C:/Users/user/Desktop/Telemetry_app/components/Logger2.js';
import Logger3 from 'C:/Users/user/Desktop/Telemetry_app/components/Logger3.js';
// Import other screens/components as needed

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen
      name="Logger1"
      component={Logger1}
      options={{
        title: 'Logger 1',
        headerStyle: { backgroundColor: 'white' }, // Change the header background color
        headerTitleStyle: { color: 'black' }, // Change the title text color
        headerTintColor: 'black', // Change the back arrow and other header icon colors
      }}
    />
    <Stack.Screen
      name="Logger2"
      component={Logger2}
      options={{
        title: 'Logger 2',
        headerStyle: { backgroundColor: 'white' }, // Change the header background color
        headerTitleStyle: { color: 'black' }, // Change the title text color
        headerTintColor: 'black', // Change the back arrow and other header icon colors
      }}
    />
    <Stack.Screen
      name="Logger3"
      component={Logger3}
      options={{
        title: 'Logger 3',
        headerStyle: { backgroundColor: 'white' }, // Change the header background color
        headerTitleStyle: { color: 'black' }, // Change the title text color
        headerTintColor: 'black', // Change the back arrow and other header icon colors
      }}
    />
    {/* Add more screens if needed */}
  </Stack.Navigator>
);

export default AppNavigator;
