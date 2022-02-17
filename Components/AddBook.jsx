import React, {useState} from "react";
import { Button, Modal, StyleSheet, TextInput, TouchableOpacity, Image, View} from 'react-native';

export const AddBook = ({ handleAddBookLike, handleAddBookRead, showModal }) => {
    const [bookName, setBookName] = useState("");
    const [pageRead, setPageRead] = useState("0");
    const [pageTotal, setPageTotal] = useState("0");
    const [percentage, setPercentage] = useState();

  const handleBookChange = (bookText) => {
    setBookName(bookText);
  };

  const handlePageReadChange = (pageReadText) => {
    setPageRead(pageReadText);
  }

  const handlePageTotalChange = (pageTotalText) => {
    setPageTotal(pageTotalText);
    setPercentage(pageRead*100/pageTotal);
  }

  const handlePercentageChange = (percentageText) => {
    setPercentage(percentageText);
  }

  const validateBookLike = () => {
      handleAddBookLike(bookName);
  }

  const validateBookRead = () => {
    const myPageRead = parseInt(pageRead);
    const myPageTotal = parseInt(pageTotal);
    let myPercentage = (myPageRead*100);
    myPercentage = (myPercentage/myPageTotal).toString();

    console.log("TIPO DE MYPERCENTAGE: " + typeof(myPercentage));
    setPercentage(myPercentage.toString());
    handleAddBookRead(bookName, pageRead, pageTotal, myPercentage);
    setBookName("");
    setPageRead();
    setPageTotal();
}
  return (
    <Modal visible={showModal} animationType={"slide"} transparent={true}>
        <View style={styles.inputBookGroup}>
        <TextInput
          style={styles.textInputBook}
          placeholder="Add new Book to shopping list"
          placeholderTextColor={"#BB86FC"}
          value={bookName}
          onChangeText={handleBookChange}
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