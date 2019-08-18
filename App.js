import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ListView
} from 'react-native';

export default function App() {
  const [text, setText] = useState('ayyyy lmao');
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = newToDo => {
    setToDos(toDos => [...toDos, newToDo]);
    setInput('');
  };

  const handleChange = text => {
    setInput(text);
    console.log(text, toDos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        title="ayyy  lmao"
        placeholder="Add Todo"
        onChangeText={handleChange}
        value={input}
      />
      <Button title="Add" onPress={() => addTodo(input)} />
      <View>
        {toDos.map((todo, index) => (
          <Text key={index}>{todo}</Text>
        ))}
      </View>
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
  }
});
