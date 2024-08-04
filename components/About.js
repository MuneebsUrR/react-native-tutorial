import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Text, Button, Pressable } from 'react-native'

export default function About({ navigation, route }) {

    return (
        <View style={styles.container}>
            <Text> Hello {route.params?.name}</Text>
            <Button title='go to home' onPress={() => navigation.navigate('Home')}></Button>
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