import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BtnAdd } from './Components/BtnAdd';
import { BtnViewBooks } from './Components/BtnViewBooks';

export default function App() {
  return (
    <View style={styles.container}>
      <BtnAdd />
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
