import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';


const { width } = Dimensions.get('window');

function CardButton() { 
  return (
    <TouchableOpacity
      style={{
        position: 'absolute', 
        bottom: 30,            
        left: 0,
        right: 0,
        width: '100%',
        height: 70,          
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#f0f0f0',
        paddingHorizontal: 16,
        borderRadius:40
      }}
    >
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#5D3EBD', 
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardButton;