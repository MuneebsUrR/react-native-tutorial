import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, Image, ImageBackground, ScrollView, Pressable, Modal, ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import Box from './components/Box';

export default function App() {
  const [handleVisible, setHandleVisible] = useState(false)
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'lightblue'}}>
     
    </SafeAreaView>


    // <>
    //   <SafeAreaView>
    //     <View style={styles.container}>
    //       <Button title='Click to open modal' onPress={() => setHandleVisible(true)}></Button>
    //       <Button title='Click to get Alert' onPress={() => Alert.alert("Alert", "wrong credentials", [
    //         { text: 'cancel' }, { text: 'ok' }
    //       ])}></Button>
    //       <ActivityIndicator />
    //       <ActivityIndicator size='large' color='black' animating={true} />
    //       <Modal visible={handleVisible} animationType='slide' onRequestClose={() => setHandleVisible(false)}>
    //         <View style={{ padding: 70 }}>
    //           <Button title='close' color='midnightblue' onPress={() => setHandleVisible(false)}></Button>

    //           <Text style={{ textAlign: 'center' }}>Hello World</Text>
    //         </View>
    //       </Modal>
    //       <View style={[styles.box, styles.androidshadow]}>
    //         <Text style={{ textAlign: 'center' }}>Box</Text>
    //       </View>
    //     </View>
    //   </SafeAreaView>
    // </>


  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    margin: 10,
    backgroundColor: 'lightgreen',
    width: 100,
    height: 100,
  },
  androidshadow: {
    shadowColor: 'yellow',
    elevation: 15,
  }
});
