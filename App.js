import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  Wwidth = useWindowDimensions().width;
  Wheight = useWindowDimensions().height
  return (


    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View
            style={[
              styles.box,
              {
                width: Wwidth > 400 ? '90%' : '60%',
                height: Wheight > 400 ? '70%' : '50%',
              },
            ]}
          >
            <Text>Welcome!</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: 'lightcoral' },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
