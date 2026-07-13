import React from 'react'
import {View, Text} from 'react-native'
import ProductItem from '../ProductItem'
import productsGetir from '../../../assets/productsGetir'
function index() {
  return (
    //Main View
  <View>
   
    <View style = {{flexDirection:'row', alignItems: 'center', backgroundColor:'white'}}>
      {productsGetir.slice(0, 2).map(item => (
  <ProductItem key={item.id} item={item} />
))}
       
        </View>
    <Text style={{color:'grey', fontWeight:'bold', padding:14
    }}>
Çubuk
    </Text>
   
<View style={{flexDirection:'row', flexWrap:'wrap', backgroundColor:'white', paddingVertical:10, paddingLeft:10, alignItems:'center'}}>
 {productsGetir.slice(2).map(item => (
  <ProductItem key={item.id} item={item} />
))}
</View>

</View>
  
  )
}

export default index