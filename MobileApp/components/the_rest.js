import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../Screens/homeScreen';
import Form from '../Screens/formScreen';
import DataScreen from '../Screens/dataScreen';

const Tab = createBottomTabNavigator();

const TheRest = () => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={HomeScreen} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
                
              }} />
            <Tab.Screen name="Form" component={Form}
              options={{
                tabBarLabel: 'Form',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='form-select' color={color} size={size}/>
                ),
              }}/>
            <Tab.Screen name="Personal Data" component={DataScreen}
              options={{
              tabBarLabel: 'Personal Data',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}/>
          </Tab.Navigator>
    );
}

export default TheRest;
