import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BtnAdd } from './Components/BtnAdd';
import { BtnViewBooks } from './Components/BtnViewBooks';
import { AddBook } from './Components/AddBook';

export default function App() {
  const [listBookLike, setListBookLike] = useState([]);
  const [listBookRead, setListBookRead] = useState([]);
  const [id, setId] = useState(1);
  const [viewBookModalLike , setViewBookModalLike] = useState(false);

    const handleInputBookLike = (bookName) => {
        setId(id+1);
        setListBookLike((bookList)=> [...bookList, {id: id, value: bookName}]);
        console.log(listBookLike);
    }
    const handleInputBookRead = (bookName) => {
      setId(id+1);
      setListBookRead((bookList)=> [...bookList, {id: id, value: bookName}]);
      //console.log(listBookRead);
    } 

    const handleRemoveBook = (id) => {
      console.log("BORRANDO LIBRO CON ID: " + id);
    }

  return (
    <View style={styles.container}>
      <AddBook showModal={viewBookModalLike} />
      {/* BOTONES */}
      <BtnAdd onViewModal={setViewBookModalLike}/>
      <BtnViewBooks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});
