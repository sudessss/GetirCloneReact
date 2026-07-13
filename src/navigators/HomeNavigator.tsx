import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../../src/components/screens/HomeScreen"
import { Image, Text, TouchableOpacity } from "react-native"
import CategoryFilterScreen from "../components/screens/CategoryFilterScreen"
import ProductDetailsScreen from "../components/screens/ProductDetailsScreen"
import AntDesign from '@expo/vector-icons/AntDesign';
import {getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const tabHiddenRoutes = ["ProductDetails"];

function HomeNavigator({ route }) {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({
        tabBarStyle: { display: "none" },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: "flex" },
      });
    }
  }, [navigation, route]);


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

        <Stack.Screen
        name= "CategoryDetails"
        component= {CategoryFilterScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitle: " ",

          headerStyle:{backgroundColor : "#5C3EBC"},
          headerTitle: () => (
         <Text style = {{fontWeight: 'bold', color:'white', fontSize: 16}}>Ürünler</Text>
        )}}/>

        <Stack.Screen
  name="ProductDetails"
  component={ProductDetailsScreen}
  options={({ navigation }) => ({
    headerBackTitle: "",
    headerTintColor: "white",

    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 10 }}
      >
        <AntDesign name="close" size={22} color="white" />
      </TouchableOpacity>
    ),

    headerStyle: {
      backgroundColor: "#5C3EBC",
    },

    headerRight:() => (
<TouchableOpacity style={{paddingRight:10}}>
  <MaterialIcons name="favorite" size={24} color="#32177a" />
</TouchableOpacity>
    ),

    headerTitle: () => (
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 14,
        }}
      >
        Ürün Detayı
      </Text>
    ),
  })}
/>



    </Stack.Navigator>
  ) 
}

export default HomeNavigator;