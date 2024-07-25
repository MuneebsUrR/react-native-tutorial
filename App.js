import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Switch, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import List from './components/List';
import data from './Listdata.json'
import LoginForm from './components/LoginForm';
export default function App() {
  const [name, setName] = useState();
  const [isDark, setIsDark] = useState(false);
  Wwidth = useWindowDimensions().width;
  Wheight = useWindowDimensions().height
  return (
    <>


      <SafeAreaProvider>
        <SafeAreaView style={styles.safeContainer}>
          <StatusBar style={Platform.OS === 'android' ? 'light' : 'dark'} />
          <View style={styles.container}>
           
            <LoginForm />
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
  input: {
    borderWidth: 2,
    padding: 8,
    margin: 15,

  },
  multiline: {
    borderWidth: 2,
    padding: 8,
    margin: 15,
    height: 100,
    textAlignVertical: 'top'
  }
});
