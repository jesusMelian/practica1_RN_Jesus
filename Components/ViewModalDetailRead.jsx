import React, {useState} from 'react'
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, Image, View} from 'react-native';

export const ViewModalDetailRead = ({viewModal, onDelete, book, onEditBookRead}) => {
    const [bookName, setBookName] = useState(book.value);
    const [pageRead, setPageRead] = useState(book.pageRead);
    const [pageTotal, setPageTotal] = useState(book.pageTotal);
    const [percentage, setPercentage] = useState(book.percentage);
    const [showModal, setShowModal] = useState(viewModal);

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
      onEditBookRead(bookName, pageRead, pageTotal, percentage);
      setShowModal(false);
  }

  return (
    <Modal visible={showModal} animationType={"slide"} transparent={true}>
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
            value={percentage}
            onChangeText={handlePercentageChange}
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