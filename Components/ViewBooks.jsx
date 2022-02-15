import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ViewBooks = ({value, key, onDelete}) => {
    console.log("HOLAAAA");
  return (
    <TouchableOpacity onPress={onDelete} underlayColor={"pink"} activeOpacity={0.5}>
            <View style={styles.viewBooks} key={key}>
                <Text style={styles.textBook}>{value}</Text>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    viewBooks: {
        borderBottomColor: '#A6A6A6',
        backgroundColor: '#2E2D2D',
        borderWidth: 1,
        borderRadius: 5,
        width: "95%",
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50  
    },
    textBook: {
        fontSize: 19,
        width: "90%",
        color: '#FFFFFF',
    }
});