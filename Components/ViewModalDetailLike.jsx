import React, {useState} from 'react'
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, Image, View} from 'react-native';

export const ViewModalDetailLike = ({viewModal, setViewModal, onDelete, book, onEditBookLike}) => {
    const [bookName, setBookName] = useState(book.value);

  const handleBookChange = (bookText) => {
    setBookName(bookText);
  };

  const validateBookLike = () => {
      onEditBookLike(book.id, bookName);
      setViewModal(false);
  }

  return (
    <Modal visible={viewModal} animationType={"slide"} transparent={true}>
        <View style={styles.inputBookGroup}>
        <TextInput
          style={styles.textInputBook}
          placeholder="Add new Book to shopping list"
          placeholderTextColor={"#BB86FC"}
          value={bookName}
          onChangeText={handleBookChange}
        />
        <TouchableOpacity onPress={() => validateBookLike()}>
            <View>
                <View style={styles.btnLike}>
                    <Image source={require("../Icons/save.png")} style={styles.tinyIcon}/>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(book.id)}>
            <View>
                <View style={styles.btnLike}>
                    <Image source={require("../Icons/delete.png")} style={styles.tinyIcon}/>
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
      flex: 1,
      backgroundColor: "rgba(0,0,0, 0.7)",
    },
    textInputBook: {
      borderBottomColor: "#BB86FC",
      borderBottomWidth: 1,
      height: 40,
      width: "75%",
      color: "#BB86FC",
    },
    
    btnLike: {
        backgroundColor: "#BB86FC",
        width: 40,
        height: 40,
        borderRadius: 5,
        marginTop: 10
        // justifyContent: 'center'
    },

    tinyIcon: {
        width:40,
        height: 40,
    }
  });