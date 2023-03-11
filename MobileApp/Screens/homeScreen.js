import * as React from 'react';
import { Text, View, StyleSheet, Image ,ImageBackground} from 'react-native';
import colors from '../components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function HomeScreen({navigation}){
    return(
      <ImageBackground  source={require('../assets/hxgn.png')} style={{width: '100%', height: '100%'}}>
        <View style = { styles.container }>
          <View style = { styles.header }>
            <Text>Mobilní aplikace</Text> 
            <MaterialCommunityIcons title='android'/>
          </View>
          <View style = {styles.jmena}>
            <Text>Martin Fořt</Text>
            <Text>David Soboň</Text>
            <Text>Luboš Pitter</Text>
          </View>
        </View>
      </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    header: {
      padding: 20,
      fontSize: 30,
      alignItems: 'center',
      marginTop: 50,
      fontWeight: 'bold',
    },
    jmena: {
      fontSize: 20,
      marginTop: 200,
      alignItems: 'center',
      fontWeight: 'bold',
    },
  })