import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  Wwidth = useWindowDimensions().width;
  Wheight = useWindowDimensions().height
  return (
    <>

      <StatusBar style={Platform.OS === 'android' ? 'light' : 'dark'} />

      <SafeAreaProvider>
        <SafeAreaView style={styles.safeContainer}>
          <View style={styles.container}>

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
    </>

  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    ...Platform.select({
      ios: {

        backgroundColor: 'plum'
      },
      android: {
        backgroundColor: 'black'
      }

    }),
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
