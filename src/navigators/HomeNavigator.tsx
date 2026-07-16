import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../../src/components/screens/HomeScreen"
import { Image, Text, TouchableOpacity,Dimensions, View } from "react-native"
import CategoryFilterScreen from "../components/screens/CategoryFilterScreen"
import ProductDetailsScreen from "../components/screens/ProductDetailsScreen"
import AntDesign from '@expo/vector-icons/AntDesign';
import {getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import CartScreen from "../components/screens/CartScreen"
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window')
const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

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
  name="CategoryDetails"
  component={CategoryFilterScreen}
  options={({ navigation }) => ({
    headerTintColor: 'white',
    headerBackTitle: '',
    headerStyle: { backgroundColor: '#5C3EBC' },

    headerTitle: () => (
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>
        Ürünler
      </Text>
    ),

    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('CartScreen')}
        style={{
          width: width * 0.22,
          height: 33,
          backgroundColor: 'white',
          marginRight: 10,
          borderRadius: 9,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 6,
        }}
        
      >
        <Image
          style={{ width: 23, height: 23, marginLeft: 6 }}
          source={require('../../assets/cart.png')}
        />

        <View style={{ flex: 1, height: 33, backgroundColor: '#F3effe', borderTopRightRadius: 10, borderBottomRightRadius: 9, justifyContent: 'center', alignItems: 'center', marginRight: 4 }}>
          <Text style={{ color: '#5d3ebd', fontWeight: 'bold', fontSize: 12 }}>
            ₺ 24,00
          </Text>
        </View>
      </TouchableOpacity>
    ),
  })}
/>
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

<Stack.Screen
  name="CartScreen"
  component={CartScreen}
  options={({ navigation }) => ({
    headerTintColor: "white",
    headerBackTitle: "",
    headerStyle: {
      backgroundColor: "#5C3EBC",
    },

    headerTitle: () => (
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 16,
        }}
      >
        Sepetim
      </Text>
    ),

    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingLeft: 10 }}
      >
<AntDesign name="close" size={24} color="white" />
      </TouchableOpacity>
    ),

    headerRight: () => (
  <TouchableOpacity
  style ={{paddingRight: 10}}
  >
<FontAwesome name="trash" size={24} color="white" />
  </TouchableOpacity>
    ),
  }
  )}
/>


    </Stack.Navigator>
  ) 
}

export default HomeNavigator;