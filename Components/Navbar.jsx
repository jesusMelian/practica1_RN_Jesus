import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
    const [showModalLikeBooks, setShowModalLikeBooks] = useState(false);
  return (
        <TouchableOpacity onPress={() => setShowModalLikeBooks(true)} style={styles.fabLocationBL}>
            <View style={styles.fab}>
                <View style={styles.fabText}>
                    <FontAwesomeIcon icon={faPlus} />
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
        right: 0
    },
    fabText: {
        padding: 22
    }
  });