import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function Home({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Text> Hello Home</Text>
            <Button title='go to about' onPress={() => navigation.toggleDrawer()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
})