import React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from '../components/button';


const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.temp}>
            <View style={styles.temp2}>
                <Text>Login</Text>
                <TextInput id='login' placeholder='login'/>
                <Text>Password</Text>
                <TextInput id='password' placeholder='password'/>
            </View>
                <MyButton title='Login' onPress={() => navigation.navigate('the_rest', {screen: 'Home'})}/>
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
    }
})
export default LoginScreen;
