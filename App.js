import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ListView,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [text, setText] = useState('ayyyy lmao');
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = newToDo => {
    setToDos(toDos => [
      ...toDos,
      { value: newToDo, key: Math.random().toString() }
    ]);
    setInput('');
  };

  const handleChange = text => {
    setInput(text);
    console.log(text, toDos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Todo"
        onChangeText={handleChange}
        value={input}
      />
      <Button
        title="Add"
        style={styles.button}
        onPress={() => addTodo(input)}
      />
      <FlatList
        data={toDos}
        renderItem={itemData => (
          <View style={styles.todo}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  todo: {
    padding: 20,
    backgroundColor: '#ccc',
    width: 300
  },
  button: {
    marginVertical: 20
  }
});
