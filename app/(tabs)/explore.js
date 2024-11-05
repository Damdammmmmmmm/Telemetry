import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Make sure this import is correct

const ExploreScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [dataLoggerLocations, setDataLoggerLocations] = useState([
    { id: '1', latitude: 14.688445, longitude: 120.957051, title: 'Data Logger 1', description: 'Monitoring pressure' },
    { id: '2', latitude: 14.714729, longitude: 120.973008, title: 'Data Logger 2', description: 'Monitoring temperature' },
    { id: '3', latitude: 14.706994, longitude: 120.960775, title: 'Data Logger 3', description: 'Monitoring humidity' },
    // Add more data logger locations here
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  if (!userLocation) {
    return null; // Optionally return a loading indicator here
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={userLocation}
      showsUserLocation={true}
    >
      {dataLoggerLocations.map(logger => (
        <Marker
          key={logger.id}
          coordinate={{ latitude: logger.latitude, longitude: logger.longitude }}
          title={logger.title}
          description={logger.description}
          image={require('C:/Users/Denver/Desktop/Telemetry/assets/images/LoggerIcon.png')} // Use your custom icon for data loggers
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    marginTop: 25,
  },
});

export default ExploreScreen;
