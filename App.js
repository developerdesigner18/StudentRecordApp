import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bottomtab from '@navigation/bottomtab';
import Attendance from '@screens/Attendance';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={Bottomtab} />
        <Stack.Screen name="attendance" component={Attendance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
