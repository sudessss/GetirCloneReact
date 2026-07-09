import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native'
import React from 'react'
import { Category } from '../screens/models';
import { useNavigation } from '@react-navigation/native'


const { width } = Dimensions.get("window");



type categoryItemProps = {
    item: Category
}

function index ({ item }: categoryItemProps) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress= {() => navigation.navigate("CategoryDetails", {category:item})}
      style={{
        width: width * 0.25,        
        height: width * 0.24,      
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", 
        marginTop: 20,
        paddingHorizontal: 4,      
      }}
    > 
      <Image 
        style={{ 
          width: width * 0.18, 
          height: width * 0.18, 
          borderRadius: 8, 
        }} 
        source={{ uri: item.src }} 
      />

      <Text 
        numberOfLines={2} 
        style={{ 
          fontSize: 12, 
          fontWeight: '500', 
          color: "#616161",
          textAlign: "center" 
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  )
}

export default index