import * as React from 'react';
import { useState, useEffect, setState } from 'react';
import {Text, View, StyleSheet, TextInput } from 'react-native';
import * as SQLite from 'expo-sqlite';

import MyButton from '../components/button';
const db = SQLite.openDatabase('db.db');


export default function Form(){
  const [name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Phone, setMobile] = useState('');
  const [Mail, setMail] = useState('');

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, surname TEXT, phone TEXT, mail TEXT)')
    });
  })

  const handleSave = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO data (name, surname, phone, mail) VALUES (?, ?, ?, ?)',
        [name, Surname, Phone, Mail],
        () => {
          console.log('User saved!');
        },
        error => {
          console.log(error);
        }
      );
    });
  };


    return(
      <View style={styles.container}>
        <Text style={styles.text}>Please fill this info bellow and submit it to the database</Text>

        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.inputs} onChangeText={text => setName(text)} placeholder='Name'/>
        
        <Text style={styles.text}>Surname</Text>
        <TextInput onChangeText={text => setSurname(text)} placeholder='Surname'/>

        <Text style={styles.text}>Mobile Phone</Text>
        <TextInput onChangeText={text => setMobile(text)} placeholder='Mobile Phone'/>
        
        <Text style={styles.text}>Email</Text>
        <TextInput onChangeText={text => setMail(text)} placeholder='Email'/>

        <MyButton title='SAVE' onPress={handleSave} />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text:{
      fontSize: 18,
      fontStyle: 'italic',
      marginTop: 15,
    },
  })