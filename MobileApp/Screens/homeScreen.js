import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../components/colors';

export default function HomeScreen({navigation}){
    return(
      <View style={styles.container}>
        <Text>This is a HomeScreen, you can see basic info here.</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.grey,
    },
  })