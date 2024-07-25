import React from 'react'
import { View, StyleSheet, Text, useWindowDimensions, ScrollView, FlatList } from 'react-native'

export default function List({ data }) {
    width = useWindowDimensions().width * 0.9;

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    console.log(index)
                    return (
                        <View style={[{ width: width }, styles.list]} >
                            <Text style={styles.textStyle}>{item.name}</Text>
                            <Text style={styles.textStyle}>{item.description}</Text>
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => <Text style={{ color: 'red' }}>No data found</Text>}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    list: {

        backgroundColor: 'black',

        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
        padding: 12,

    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold'
    }
})