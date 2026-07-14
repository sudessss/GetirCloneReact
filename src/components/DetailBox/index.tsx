import React from 'react'
import {Text,View} from 'react-native'
import DetailProperty from '../DetailProperty'

type DetailBoxProps ={
price: number;
name: string;
quantity: string;
}
function index({price, name, quantity} : DetailBoxProps) {
  return (
<View style = { {width: '100%', height: 100, backgroundColor: "white", alignItems:'center', paddingTop:10} }>
<Text style = {{color: "#5D3EBD", fontWeight: 'bold', fontSize: 20}}> <Text>{"₺"}</Text>{price}</Text>
<Text style = {{fontWeight: '700', fontSize:15, marginTop:10}}>{name}</Text>
<Text style ={{color:'#848897', fontWeight:'600', marginTop:8, paddingBottom:18}}>{quantity}</Text>
<DetailProperty/>
</View>
  )
}

export default index