import React, {useState} from 'react'
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, Image, View} from 'react-native';

export const ViewModalDetailRead = ({viewModal, setViewModal, onDelete, book, onEditBookRead}) => {
    const [bookName, setBookName] = useState(book.value);
    const [pageRead, setPageRead] = useState(book.pageRead);
    const [pageTotal, setPageTotal] = useState(book.pageTotal);
    const [percentage, setPercentage] = useState(book.percentage);

  const handleBookChange = (bookText) => {
    setBookName(bookText);
  };

  const handlePageReadChange = (pageReadText) => {
    setPageRead(pageReadText);
  }

  const handlePageTotalChange = (pageTotalText) => {
    setPageTotal(pageTotalText);
  }

  const handlePercentageChange = (percentageText) => {
    setPercentage(percentageText);
  }

  const validateBookRead = () => {
    const myPageRead = parseInt(pageRead);
    const myPageTotal = parseInt(pageTotal);
    let myPercentage = (myPageRead*100);
    myPercentage = (myPercentage/myPageTotal).toString();

      onEditBookRead(book.id, bookName, pageRead, pageTotal, myPercentage);
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
          disabled
        />
        <TextInput
            style={styles.textInputBook}
            placeholder="Insert number page read"
            placeholderTextColor={"#BB86FC"}
            value={pageRead}
            onChangeText={handlePageReadChange}
        />
        <TextInput
            style={styles.textInputBook}
            placeholder="Insert number page total"
            placeholderTextColor={"#BB86FC"}
            value={pageTotal}
            onChangeText={handlePageTotalChange}
        />
        <TextInput
            style={styles.textInputBook}
            placeholder="Insert number page"
            placeholderTextColor={"#BB86FC"}
            value={percentage+ "%"}
            onChangeText={handlePercentageChange}
            disabled
        />
        <TouchableOpacity onPress={() => validateBookRead()}>
            <View>
                <View style={styles.btnLike}>
                    <Image source={require("../Icons/save.png")} style={styles.tinyIcon}/>
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