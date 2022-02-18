import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export const BtnViewBooks = ({changeViewRead}) => {
    const changeFlatList = () => {
        console.log("CHANGEFLATLIST");
        changeViewRead(true);
    }
  return (
    <TouchableOpacity onPress={() => changeFlatList()} style={styles.fabLocationBL}>
            <View style={styles.fab}>
                <View style={styles.fabText}>
                    {/* <FontAwesomeIcon icon={faPlus}/> */}
                    <Image source={require("../Icons/book.png")} style={styles.tinyIcon}/>
                </View>
            </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: "#5856D6",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center'
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    tinyIcon: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    }
    
  });