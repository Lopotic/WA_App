/* import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const PassInput = ({
    iconName,
    password,
    ...props
  }) => {
    const [hidePassword, setHidePassword] = React.useState(password);

    return (
        <View style={styles.container}>
            <TextInput secureTextEntry={hidePassword}/>
            <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            />    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    }
})

export default PassInput; */
