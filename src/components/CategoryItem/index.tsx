import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native'
import React from 'react'
import { Category } from '../screens/models';

const { width } = Dimensions.get("window");

type categoryItemProps = {
    item: Category
}

const index = ({ item }: categoryItemProps) => {
  return (
    <TouchableOpacity 
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