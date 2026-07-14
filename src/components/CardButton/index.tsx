import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';


// Ekran genişliğini dinamik almak için
const { width } = Dimensions.get('window');

function CardButton() { // Baş harfini büyük yaptık
  return (
    <TouchableOpacity
      style={{
        position: 'absolute', // Butonu ekranın akışından çıkarıp sabitlemek için scrollview yaparken sabit duruyor
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
          backgroundColor: '#5D3EBD', // Getir moru
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