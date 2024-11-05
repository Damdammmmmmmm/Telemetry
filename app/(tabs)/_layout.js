import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Import FontAwesome5
import Octicons from '@expo/vector-icons/Octicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Telemetry',
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="graph" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Data Logger Locations',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="map-marked" size={24} color={color} /> // Update to use FontAwesome5
          ),
        }}
      />
    </Tabs>
  );
}
