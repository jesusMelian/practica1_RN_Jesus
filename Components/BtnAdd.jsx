import React, {useState} from 'react'
import { Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const BtnAdd = ({onViewModal}) => {
    
  return (
        <TouchableOpacity onPress={() => onViewModal(true)} style={styles.fabLocationBL}>
            <View style={styles.fab}>
                <View style={styles.fabText}>
                    {/* <FontAwesomeIcon icon={faPlus}/> */}
                    <Image source={require("../Icons/addFill.png")} style={styles.tinyIcon}/>
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
        right: 65
    },
    tinyIcon: {
        width: 60,
    }
    
  });