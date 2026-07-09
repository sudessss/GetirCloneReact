import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../../src/components/screens/HomeScreen"
import { Image } from "react-native"
const Stack =createStackNavigator()
function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name= "Home"
        component= {HomeScreen}
        options={{
          headerStyle:{backgroundColor : "#5C3EBC"},
          headerTitle: () => (<Image
          source={require("../../assets/getirlogocopy.png")}
          style= {{
            height: 30,
            width:70,
            marginTop:-8

          }}/>
        )}}/>
    </Stack.Navigator>
  ) 
}

export default HomeNavigator