import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import ToDos from './components/ToDos';
import AddTodo from './components/AddTodo';

export default function App() {
  const [toDos, setToDos] = useState([]);

  const [isShowModal, setIsShowModal] = useState(false);

  const addTodo = newToDo => {
    setToDos(toDos => [
      ...toDos,
      { value: newToDo, key: Math.random().toString() }
    ]);
  };

  toggleModal = bool => setIsShowModal(bool);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Add new ToDo" onPress={() => setIsShowModal(true)} />
      </View>
      <AddTodo addTodo={addTodo} show={isShowModal} toggleModal={toggleModal} />

      <ToDos toDos={toDos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 50
  },
  button: {
    marginStart: 20,
    marginEnd: 20
  }
});
