import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

export default function ToDos({ toDos }) {
  return toDos.length > 0 ? (
    <FlatList
      data={toDos}
      style={styles.container}
      renderItem={itemData => (
        <View style={styles.todo}>
          <Text>{itemData.item.value}</Text>
        </View>
      )}
    />
  ) : (
    <View style={styles.container}>
      <Text>No Todos added :(</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginStart: 20,
    marginEnd: 20,
    borderColor: '#f5f5f5',
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    padding: 10,
    borderRadius: 7
  }
});
