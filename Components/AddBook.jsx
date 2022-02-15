import React, {useState} from "react";
import { Button, Modal, StyleSheet, TextInput, View} from 'react-native';

export const AddBook = ({ handleAddBook, showModal }) => {
    const [bookName, setBookName] = useState("");

  const handleBookChange = (bookText) => {
    setBookName(bookText);
  };

  const validateBook = () => {
      handleAddBook(bookName);
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
        <Button style={styles.buttonAdd} title="Add" onPress={() => validateBook()} />
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
      borderBottomColor: "teal",
      borderBottomWidth: 1,
      height: 40,
      width: "75%",
    },
    
  });