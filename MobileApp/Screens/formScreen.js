import * as React from 'react';
import { useState, useEffect } from 'react';
import {Text, View, StyleSheet, TextInput, ImageBackground, ScrollView } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      <ImageBackground  source={require('../assets/fof.png')} style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.pop}>
            <Text style={styles.nadpis}>Vyplňte informace</Text>
            <MaterialCommunityIcons style = { styles.icon } name='card-account-details-outline'/>
          </View>
          <Text style={styles.text}>Jméno</Text>
          <TextInput  style={styles.input} onChangeText={text => setName(text)} placeholder='Name'/>
        
          <Text style={styles.text}>Příjmení</Text>
          <TextInput style={styles.input} onChangeText={text => setSurname(text)} placeholder='Surname'/>

          <Text style={styles.text}>Telefoní číslo</Text>
          <TextInput style={styles.input} onChangeText={text => setMobile(text)} placeholder='Mobile Phone'/>
        
          <Text style={styles.text}>E-mail</Text>
          <TextInput style={styles.input} onChangeText={text => setMail(text)} placeholder='Email'/>

          <MyButton title='ULOŽIT' onPress={handleSave} />
        </View>
      </ScrollView>
      </ImageBackground>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text:{
      fontSize: 19,
      fontStyle: 'italic',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    nadpis:{
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginTop: 20,
      justifyContent: 'space-between',
    },
    pop:{
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon: {
      marginTop: 31,
      fontSize: 25,
      marginHorizontal: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      marginBottom: 10,
      width: 250,
    },
  })