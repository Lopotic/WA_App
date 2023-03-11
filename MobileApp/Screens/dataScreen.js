import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, Text, View, StyleSheet, ImageBackground} from 'react-native';

import Delete from '../components/delete';
import MyButton from '../components/button';

import * as SQlite from 'expo-sqlite';
import colors from '../components/colors';
const db = SQlite.openDatabase('db.db');

export default function DataScreen(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM data',
        [],
        (_, { rows }) => {
          setUsers(rows._array);
        },
        error => {
          console.log(error);
        }
      );
    });
  };

  const handleClearAll = (id) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM data WHERE id = ?',
        [id],
        fetchUsers,
        error => {
          console.log(error);
        }
      );
    });
  };

  return(
    <ImageBackground  source={require('../assets/fof.png')} style={{width: '100%', height: '100%'}}>
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <MyButton title='Load Data' onPress={fetchUsers}/>
        {users.map(user => ( 
          <View key={user.id} style={styles.data}>
            <Text>Name: {user.name}</Text>
            <Text>Surname: {user.surname}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Mail: {user.mail}</Text>
            <Delete title='SMAZAT' onPress={()=>handleClearAll(user.id)}/> 
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginVertical: 15,
      marginTop: -80,      

    },
    data: {
      marginVertical: 15, 
      backgroundColor: `#f8f8ff`, 
      borderRadius: 5,    
    },
  })