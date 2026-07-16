import React from 'react'
import {View, Text} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import productsGetir from '../../../../assets/productsGetir'
import CartItem from '../../CartItem'
function CartScreen() {
  return (
    <FlatList
    data = {productsGetir.slice(0,1)}
    renderItem={({item}) => <CartItem product={item}/>}

    />
  )
}

export default CartScreen;