import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');
    const handalechange = (val)=>{
        
setText(val);
    }
  return (
    <View>
        <TextInput style={styles.input}
        placeholder='write your todo'
        onChangeText={handalechange}/>
        <Button title='add todo'onPress={()=>submitHandler(text)}/>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        border: "2px solid black",
        padding:5,
        borderRadius:5,
        margin:2
        
    }
})
