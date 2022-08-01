import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ScrollView, FlatList } from 'react-native';


export default function Todoitem({item,pressHandler}) {
  return (
    <div>
        <TouchableOpacity onPress={()=>pressHandler(item.id)} >
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    </div>
  )
}
const styles = StyleSheet.create({
 item: {
      backgroundColor: 'pink',
      padding: "10px",
      marginLeft:5,
      marginRight:5,
      margin:5
        }
  });