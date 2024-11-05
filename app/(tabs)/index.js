import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from 'C:/Users/user/Desktop/Telemetry_app/components/AppNavigator.js';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={AppNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
