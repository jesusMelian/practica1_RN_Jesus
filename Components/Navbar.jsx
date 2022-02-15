import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
    const [showModalLikeBooks, setShowModalLikeBooks] = useState(false);
  return (
    <View>
        <TouchableOpacity onPress={() => setShowModalLikeBooks(true)} >
            <FontAwesomeIcon icon={faPlus} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });