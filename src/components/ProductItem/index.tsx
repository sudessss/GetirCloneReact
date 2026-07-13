import React from 'react'
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { Product } from '../screens/models';
import { useNavigation } from '@react-navigation/native';const {width,height} = Dimensions.get('window') 
type productItemType={
  item : Product
}
function index({item} : productItemType) {
  const navigation = useNavigation()
  return (
<TouchableOpacity 
onPress={() => navigation.navigate("ProductDetails" , {product:item})}
  style = {{
    width: width*0.28,
   marginLeft:10,
    height: height*0.25,
    marginTop:12

}}>
    <Image style ={{width : width *0.28, height: width* 0.28, borderRadius:12, borderWidth:0.3, borderColor:'gray' }} source = {{uri:item.image}}/>
    <View
  style={{
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  }}
>
  <Text
    style={{
      fontSize: 11,
      color: "#747990",
      textDecorationLine: "line-through",
    }}
  >
    {"\u20BA"}{item.fiyat}
  </Text>

  <Text
    style={{
      color: "#5D3EBD",
      fontWeight: "bold",
      fontSize: 12,
      marginLeft: 8,
    }}
  >
    {"\u20BA"}{item.fiyatIndirimli}
  </Text>
</View>

<Text
  numberOfLines={2}
  style={{
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  }}
>
  {item.name}
</Text>
<Text
  style={{
    fontSize: 12,
    color: "gray",
    marginTop: 3,
    fontWeight: "600",
  }}
>
  {item.miktar}
</Text><View style={{position:'absolute',borderWidth:0.3,right:-10,top:-10,borderRadius:5,
              shadowRadius: 3.8,
              shadowOpacity: 0.05,borderColor:'lightgrey',backgroundColor:'white',
         flexDirection:'row',justifyContent:'center',alignItems:'center',width:30,height:30}}>
        <Entypo name="plus" size={22} color="#5D3EBD" />
</View>
    </TouchableOpacity>
 )
}

export default index