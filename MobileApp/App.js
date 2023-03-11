import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LoginScreen from './Screens/loginScreen';
import TheRest from './components/the_rest';

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Login" component={LoginScreen}
          />
          <Stack.Screen
            name='the_rest' component={TheRest}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

