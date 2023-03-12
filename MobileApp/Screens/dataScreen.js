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
            <View style={styles.row}>
              <Text>Name:</Text>
              <Text>{user.name}</Text>
            </View>  
            <View style={styles.row}>
              <Text>Surname:</Text>
              <Text> {user.surname}</Text>
            </View>
            <View style={styles.row}>
              <Text>Phone:</Text>
              <Text>{user.phone}</Text>
            </View>
            <View style={styles.row}>
              <Text>Mail:</Text>
              <Text>{user.mail}</Text>
            </View>
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
    },
    data: {
      marginTop:30,
      backgroundColor: `#f8f8ff`, 
      borderRadius: 5,
      borderColor: `#f8f8ff`,
      borderRightWidth: 25,
      borderLeftWidth: 25,
      borderWidth: 10,
    },
    row:{
      flexDirection:'row',
      alignItems: 'stretch',
    },
  })