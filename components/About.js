import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Text, Button, Pressable } from 'react-native'

export default function About({ navigation, route }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.name,
            headerStyle: { backgroundColor: 'lightblue' },
            headerTintColor: 'black',
            headerTitleStyle: { fontWeight: 'bold' },
            headerRight: () => (
                <Pressable onPress={() => alert('This is a button!')}><Text>Menu</Text></Pressable>
            ),
        })
    }, [navigation, route.params?.name])
    return (
        <View style={styles.container}>
            <Text> Hello {route.params?.name}</Text>
            <Button title='go to home' onPress={() => navigation.navigate('Home', { name: route.params?.name })}></Button>
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