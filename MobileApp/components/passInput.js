import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './colors';


const PassInput = ({
    iconName,
    password,
    onChangeText,
    ...props
  }) => {
    const [hidePassword, setHidePassword] = React.useState(password);

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='password' style={{flex: 1}} secureTextEntry={hidePassword} onChangeText={onChangeText}/>
            <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword) }
            style={{marginTop: 4, fontSize:18}}
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            />    
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 16,
        width: 250,
        flexDirection: 'row',
    },
})

export default PassInput;
