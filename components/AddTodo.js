import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTodo({ show, toggleModal, addTodo }) {
  const [input, setInput] = useState('');

  const handleChange = text => {
    setInput(text);
  };

  return (
    <Modal visible={show} style={styles.modal} animationType="fade">
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Add Todo"
          onChangeText={handleChange}
          value={input}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add"
            style={styles.button}
            onPress={() => {
              addTodo(input);
              setInput('');
              toggleModal(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: '#222',
    borderWidth: 2,
    borderRadius: 4,
    width: '60%',
    padding: 10
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 20,
    marginVertical: 20,
    width: '60%'
  }
});
