import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BtnAdd } from './Components/BtnAdd';
import { BtnViewBooks } from './Components/BtnViewBooks';
import { BtnViewBooksLike } from './Components/BtnViewBooksLike';
import { AddBook } from './Components/AddBook';
import { ViewBooksLike } from './Components/ViewBooksLike';
import { ViewBooks } from './Components/ViewBooks';

export default function App() {
  const [listBookLike, setListBookLike] = useState([]);
  const [listBookRead, setListBookRead] = useState([]);
  const [id, setId] = useState(1);
  const [viewBookModalLike , setViewBookModalLike] = useState(false);
  const [viewRead, setViewRead] = useState(false);


    const handleAddBookLike = (bookName) => {
        setId(id+1);
        setListBookLike((bookList)=> [...bookList, {id: id, value: bookName}]);

        //CIERRO EL MODAL 
        setViewBookModalLike(false);
        console.log("VIEW BOOKSLIKE: ",listBookLike);
    }
    const handleAddBookRead = (bookName, pageRead, pageTotal, percentage) => {
      setId(id+1);
      setListBookRead((bookList)=> [...bookList, {id: id, value: bookName, pageRead: pageRead, pageTotal: pageTotal, percentage: percentage}]);
      
      //CIERRO EL MODAL 
      setViewBookModalLike(false);
      console.log("VIEW BOOKSREAD: ",listBookRead);
    } 

    const handleRemoveBookLike = (id) => {
      setListBookLike(listBookLike.filter(book => book.id != id));
      console.log("BORRANDO LIBRO CON ID: " + id);
    }

    const handleRemoveBookRead = (id) => {
      setListBookLike(listBookRead.filter(book => book.id != id));
      console.log("BORRANDO LIBRO CON ID: " + id);
    }

    const changeViewRead = (bool) => {
      console.log("CAMBIAMOS A: ", bool);
      setViewRead(bool)
    }

    const handleEditBookRead = (id, bookName, pageRead, pageTotal, percentage) => {
      handleRemoveBookRead(id);
      setListBookRead((bookList)=> [...bookList, {id: id, value: bookName, pageRead: pageRead, pageTotal: pageTotal, percentage: percentage}]);
      
      //CIERRO EL MODAL 
      setViewBookModalLike(false);
      console.log("VIEW BOOKSREAD: ",listBookRead);
    } 
  return (
    <View style={styles.container}>
      {/* <ViewBooksLike listBookRead={listBookRead} handleRemoveBook={handleRemoveBook} /> */}
      {/* ACTIVO UNA LISTA O LA OTRA DEPENDIENDO DE LO QUE PULSE EN EL BOTON */}
      {!viewRead ?
        <View >
            {/* A FlatList se de pasa la lista de datos en data= y render item es cada uno de los elementos */}
            <FlatList data={listBookLike} renderItem={ itemData => {
                const { id, value } = itemData.item;
                return(
                    <ViewBooksLike
                        value={value}
                        // image={image}
                        onDelete={handleRemoveBookLike} 
                    />
                )
            }
            }/>
        </View>
      : 
        <View >
              {/* A FlatList se de pasa la lista de datos en data= y render item es cada uno de los elementos */}
              <FlatList data={listBookRead} renderItem={ itemData => {
                  const { id, value } = itemData.item;
                  return(
                      <ViewBooks 
                          book={itemData.item}
                          // image={image}
                          onDelete={handleRemoveBookRead} 
                          onEditBookRead={handleEditBookRead}
                      />
                  )
              }
              }/>
          </View>
      }
      <AddBook handleAddBookLike={handleAddBookLike} handleAddBookRead={handleAddBookRead} showModal={viewBookModalLike} />
      {/* BOTONES */}
      <BtnAdd onViewModal={setViewBookModalLike}/>
      {!viewRead ?
        <BtnViewBooks changeViewRead={changeViewRead}/>
      :
        <BtnViewBooksLike changeViewRead={changeViewRead}/>
      }
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
