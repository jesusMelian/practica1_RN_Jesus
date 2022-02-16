import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {ViewModalDetailRead} from './ViewModalDetailRead';

export const ViewBooks = ({book, key, onDelete, onEditBookRead}) => {
    const [viewDetailBook, setViewDetailBook] = useState(false);

    return (
        <View>
            <ViewModalDetailRead viewModal={viewDetailBook} setViewModal={setViewDetailBook} onDelete={onDelete} book={book} onEditBookRead={onEditBookRead}/>
            <TouchableOpacity onPress={() => setViewDetailBook(true)} underlayColor={"pink"} activeOpacity={0.5}>
                <View style={styles.viewBooks} key={key}>
                    <Text style={styles.textBook}>{book.value}</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    viewBooks: {
        borderBottomColor: '#A6A6A6',
        backgroundColor: '#2E2D2D',
        borderWidth: 1,
        borderRadius: 5,
        width: "95%",
        margin: 5,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50  
    },
    textBook: {
        fontSize: 19,
        width: "90%",
        color: '#FFFFFF',
    }
});