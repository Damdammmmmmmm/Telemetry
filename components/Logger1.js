import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { LineChart, BarChart } from 'react-native-chart-kit';

const Logger1 = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>STATUS: WORKING</Text>
      </View>
      
      <View style={styles.gridContainer}>
        <View style={styles.item}>
          <ProgressCircle
            percent={35}
            radius={50}
            borderWidth={8}
            color="#00aaff"
            shadowColor="#e0e0e0"
            bgColor="#fff"
          >
            <Text style={styles.metricText}>5.27 psi</Text>
          </ProgressCircle>
        </View>
        
        <View style={styles.item}>
          <LineChart
            data={{
              datasets: [{ data: [5, 15, 10, 20, 18, 30] }]
            }}
            width={screenWidth / 2.5}
            height={100}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: () => '#8884d8',
            }}
            bezier
            style={{ borderRadius: 10 }}
          />
        </View>

        <View style={styles.item}>
          <ProgressCircle
            percent={65}
            radius={25}
            borderWidth={8}
            color="#6060ff"
            shadowColor="#e0e0e0"
            bgColor="#fff"
          >
            <Text style={styles.metricText}>65% flow rate</Text>
          </ProgressCircle>
        </View>
        
        <View style={styles.item}>
          <Text style={styles.metricText}>10 m³/s flow rate</Text>
          <LineChart
            data={{
              datasets: [{ data: [10, 20, 15, 25, 22, 30] }]
            }}
            width={screenWidth / 2.5}
            height={50}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: () => '#83a1ff',
            }}
            bezier
            style={{ borderRadius: 10 }}
          />
        </View>
        
        <View style={styles.item}>
          <ProgressCircle
            percent={97}
            radius={50}
            borderWidth={8}
            color="#5050ff"
            shadowColor="#e0e0e0"
            bgColor="#fff"
          >
            <Text style={styles.metricText}>97% Data Sent</Text>
          </ProgressCircle>
        </View>
        
        <View style={styles.item}>
          <BarChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
              datasets: [{ data: [20, 45, 28, 80, 99] }]
            }}
            width={screenWidth / 2.5}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: () => '#ff735e',
              barPercentage: 0.5,
            }}
            style={{ borderRadius: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  statusContainer: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
  },
  metricText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Logger1;
