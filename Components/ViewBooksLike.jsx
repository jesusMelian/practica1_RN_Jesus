import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export const ViewBooksLike = ({value, key, onDelete}) => {
    const [viewDetailBook, setViewDetailBook] = useState(false);
    return (
        <View>
            {/* <ViewModalDetailLike viewModal={viewDetailBook} onDelete={onDelete}/> */}
            <TouchableOpacity onPress={() => setViewDetailBook(true)} underlayColor={"pink"} activeOpacity={0.5}>
                <View style={styles.viewBooks} key={key}>
                    <Text style={styles.textBook}>{value}</Text>
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