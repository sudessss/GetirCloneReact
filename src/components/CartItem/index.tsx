import React from 'react'
import { Product } from '../screens/models'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

type CartItemProps = {
    product:Product
}

const {width, height} = Dimensions.get('window') 

function index({product} : CartItemProps) {
  return (
    
<View
  style={{
    height: height * 0.13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingLeft: 20,
    backgroundColor: 'white',
  }}
>    <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style= {{width: height*0.13, height: height*0.13}} source= {{uri: product.image}}
        />
        <View>
        <Text style = {{fontWeight:'600', fontSize:13}}>{product.name}</Text>
        <Text style = {{color:'grey', fontSize:12, marginTop:3}}>{product.miktar}</Text>
        <Text style = {{color :'#5e3ebd', fontWeight:'bold', marginTop:8}}>₺ {product.fiyat}</Text>
        </View>


    </View>
     <View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.25,
    height: height * 0.045,
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  }}
>
  <TouchableOpacity
    style={{ flex: 1, alignItems: 'center' }}
  >
    <Text style={{ fontSize: 18 }}>-</Text>
  </TouchableOpacity>

  <View
    style={{
      backgroundColor: '#5d3ebd',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    }}
  >
    <Text
      style={{
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      2
    </Text>
  </View>

  <TouchableOpacity
    style={{ flex: 1, alignItems: 'center' }}
  >
    <Text
      style={{
        fontSize: 18,
        color: '#5d3ebd',
        fontWeight: 'bold',
      }}
    >
      +
    </Text>
  </TouchableOpacity>
</View>
  </View>
  )
}

export default index