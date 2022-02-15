import React, {useState} from "react";
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, Image, View} from 'react-native';

export const AddBook = ({ handleAddBookLike, handleAddBookRead, showModal }) => {
    const [bookName, setBookName] = useState("");

  const handleBookChange = (bookText) => {
    setBookName(bookText);
  };

  const validateBookLike = () => {
      handleAddBookLike(bookName);
      setBookName("");
  }

  const validateBookRead = () => {
    handleAddBookRead(bookName);
    setBookName("");
}
  return (
    <Modal visible={showModal} animationType={"slide"} transparent={true}>
        <View style={styles.inputBookGroup}>
        <TextInput
          style={styles.textInputBook}
          placeholder="Add new Book to shopping list"
          value={bookName}
          onChangeText={handleBookChange}
        />
        <TouchableOpacity onPress={() => validateBookLike()}>
            <View>
                <View style={styles.btnLike}>
                    <Image source={require("../Icons/like2.png")} style={styles.tinyIcon}/>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => validateBookRead()}>
            <View>
                <View style={styles.btnLike}>
                    <Image source={require("../Icons/read.png")} style={styles.tinyIcon}/>
                </View>
            </View>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputBookGroup: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
      flex: 1
    },
    textInputBook: {
      borderBottomColor: "#BB86FC",
      borderBottomWidth: 1,
      height: 40,
      width: "75%",
    },
    
    btnLike: {
        backgroundColor: "#BB86FC",
        width: 30,
        height: 30,
        borderRadius: 5,
        marginTop: 10
        // justifyContent: 'center'
    },

    tinyIcon: {
        width:30,
        height: 30,
    }
  });