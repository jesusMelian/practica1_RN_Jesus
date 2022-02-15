import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BtnAdd } from './Components/BtnAdd';
import { BtnViewBooks } from './Components/BtnViewBooks';
import { AddBook } from './Components/AddBook';
import { ViewBooksLike } from './Components/ViewBooksLike';
import { ViewBooks } from './Components/ViewBooks';

export default function App() {
  const [listBookLike, setListBookLike] = useState([]);
  const [listBookRead, setListBookRead] = useState([]);
  const [id, setId] = useState(1);
  const [viewBookModalLike , setViewBookModalLike] = useState(false);

    const handleAddBookLike = (bookName) => {
        setId(id+1);
        setListBookLike((bookList)=> [...bookList, {id: id, value: bookName}]);

        //CIERRO EL MODAL 
        setViewBookModalLike(false);
        console.log("VIEW BOOKSLIKE: ",listBookLike);
    }
    const handleAddBookRead = (bookName) => {
      setId(id+1);
      setListBookRead((bookList)=> [...bookList, {id: id, value: bookName}]);
      
      //CIERRO EL MODAL 
      setViewBookModalLike(false);
      console.log("VIEW BOOKSREAD: ",listBookRead);
    } 

    const handleRemoveBook = (id) => {
      console.log("BORRANDO LIBRO CON ID: " + id);
    }

  return (
    <View style={styles.container}>
      {/* <ViewBooksLike listBookRead={listBookRead} handleRemoveBook={handleRemoveBook} /> */}
      <View >
            {/* A FlatList se de pasa la lista de datos en data= y render item es cada uno de los elementos */}
            <FlatList data={listBookLike} renderItem={ itemData => {
                const { id, value } = itemData.item;
                return(
                    <ViewBooks 
                        value={value}
                        // image={image}
                        onDelete={() => handleRemoveBook(id)} 
                    />
                )
            }
            }/>
        </View>

      <AddBook handleAddBookLike={handleAddBookLike} handleAddBookRead={handleAddBookRead} showModal={viewBookModalLike} />
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
