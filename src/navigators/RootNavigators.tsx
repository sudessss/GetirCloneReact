import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = () => {
  return (
    <TouchableOpacity
        style = {{
            width:60,
            height:60,
            backgroundColor: "#5C3EBC",
            borderRadius: 30,
            justifyContent: 'center',
            alignItems:'center',
            marginLeft: 20,
            marginTop:-10,
            borderWidth:2,
            borderColor:'white'
        }
        }
>
      <MaterialIcons
        name="format-list-bulleted"
        size={35}
        color="#FFD00C"
      />
    </TouchableOpacity>
  );
};

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5D3EBF',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
    
      <Tab.Screen
        name = "List"
        component={HomeNavigator}
        options={{
            tabBarButton:(props)=> <CustomTabBarButton{...props}/>
        }}

         />


      <Tab.Screen
        name="Profil"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="gift"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;