import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput, ScrollView, FlatList } from 'react-native';


export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todo list...</Text>
    </View>
  )
}
 const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral',
        
    },title:{
        fontSize:"20px",
        textAlign:"center",
        color:"white",
        fontWeight:"500"
    }
 })