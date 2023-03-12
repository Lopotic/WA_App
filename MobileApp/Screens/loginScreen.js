import React from 'react';
import { Text, StyleSheet, TextInput, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import PassInput from '../components/passInput';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';

import MyButton from '../components/button';

const LoginScreen = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (login === 'frajer' && password === '1234') {
        navigation.navigate('the_rest', { screen: 'Home' });
      } else {
        Alert.alert('Špatné heslo nebo jméno, prosím zkuste znovu');
      }
    };

    /* const handleSecureText = () => {
      if (condition) {
        
      }
    } */
    return (
        <SafeAreaView style={styles.temp}>
            <View style={styles.temp2}>
                <Text>Login</Text>
                <TextInput placeholder='login' style={styles.input} onChangeText={setLogin}/>
                <Text>Password</Text>
                <PassInput onChangeText={setPassword }/>
            </View>
                <MyButton title='Login' onPress={handleLogin}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    temp: {
        flex: 1,
        alignItems: 'center',
    },
    temp2: {
        marginBottom: 22,
        marginTop: 56,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 16,
        width: 250,
      },
})
export default LoginScreen;
