import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Alert,Keyboard, TouchableWithoutFeedback,TouchableOpacity, Button, TextInput, ScrollView, FlatList } from 'react-native';
import Header from './components/Header';
import Todoitem from './components/Todoitem';
import Addtodo from './components/Addtodo'

export default function App() {

  const [todo, setTodo] = useState([
    { name: 'apple',  id: '1' },
    { name: 'banana', id: '2' },
    { name: 'peas',   id: '3' },
    { name: 'orange', id: '4' },
    { name: 'mango',  id: '5' },


  ])
  const handelclick = () => {
    console.log(1 + 1);
    setName(`royal`)
  }
  const pressHandler = (id) => {
    console.log(id);
    setTodo((Pname) => {
      return Pname.filter(todo => todo.id != id)
    })


  }
  const submitHandler = (text) => {
    if(text.length > 3){
      setTodo(prevTodos => {
        return [
          {name:text, id: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
    
      console.log('hello');
    }
  };
  return (

    <View >
      <Header/>
      
      <View style={styles.contain}>
        {/* to form */}
        <Addtodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
           data={todo}
           renderItem={({ item }) => (
            <Todoitem item={item} pressHandler={pressHandler}/> )}
          />

        </View>

      </View>

      {/*     <FlatList
        numColumns={5}
        keyExtractor={(item) => item.id}
        data={name}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
 */}



      <Text>Enter name :</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#0000',
    margin:"20px 20px",
    justifyContent: 'center',
  }, view: {
    flex: 1,
    backgroundColor: 'pink',
    padding: "20px"
  }, text: {
    flex: 1,
    color: "blue",
    fontWeight: "700"
  }, body: {
    flex: 1,
    backgroundColor: "yellow",
    margin: 5,
    padding: 5
  }, bodyBold: {
    fontWeight: "700"
  }, TextInput: {
    flex: 1,
    border: "1px solid black"
  }, item: {
    backgroundColor: 'pink',
    padding: "10px",
    margin: 1
  }
});
