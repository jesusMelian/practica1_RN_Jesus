import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native';

export const ViewBooksLike = ({listBookLike, handleRemoveBook}) => {
    console.log("LISTA DE LIBROS LIKE: ", listBookLike);
    return (
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
    )
}
