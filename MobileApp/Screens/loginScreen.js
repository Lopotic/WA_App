import React from 'react';
import { Text, StyleSheet, TextInput, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';

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

    return (
        <SafeAreaView style={styles.temp}>
            <View style={styles.temp2}>
                <Text>Login</Text>
                <TextInput id='login' placeholder='login' style={styles.input} value={login} onChangeText={setLogin}/>
                <Text>Password</Text>
                <TextInput id='password' placeholder='password' style={styles.input} secureTextEntry={true} value={password} onChangeText={setPassword}/>
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
