import * as React from 'react';
import { Text, View, StyleSheet, Image ,ImageBackground} from 'react-native';
import colors from '../components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({navigation}){
    return(
      <ImageBackground  source={require('../assets/fof.png')} style={{width: '100%', height: '100%'}}>
        <View style = { styles.container }>
          <View style = { styles.nadpis }>
            <Text style = { styles.header }>Mobilní aplikace</Text>
            <MaterialCommunityIcons style = { styles.icon } name='cellphone-text'/>
          </View>
            <Text style = {styles.jmena}>Martin Fořt</Text>
            <Text style = {styles.jmena}>David Soboň</Text>
            <Text style = {styles.jmena}>Luboš Pitter</Text>
        </View>
      </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
    },
    header: {
      padding: 20,
      fontSize: 35,
      marginTop: 20,
      fontWeight: 'bold',
      borderBottomWidth: StyleSheet.hairlineWidth,

    },
    jmena: {
      fontSize: 20,
      marginTop: 100,
      fontWeight: 'bold',
    },
    nadpis:{
      flexDirection: 'row',
    },
    icon: {
      marginTop: 55,
      fontSize: 25,
      marginHorizontal: -15,
      borderBottomWidth: StyleSheet.hairlineWidth,

    }
  })