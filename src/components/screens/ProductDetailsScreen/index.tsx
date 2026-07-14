import React, {useEffect, useState} from 'react'
import { Text,View,ScrollView } from 'react-native'
import {Product} from '../models'
import ImageCarousel from '../../ImageCoursel'
import { ActivityIndicator } from 'react-native'
import DetailBox from '../../DetailBox'
import DetaiilProperty from '../../DetailProperty'
import CardButton from '../../CardButton'

function index(props) {
  const[product, setProduct] = useState <Product>()
  useEffect(() => {
    setProduct(props.route.params.product)

  }, [])
  if(!product){
    return<ActivityIndicator color= {"#5D3EBD"}/>
  }
  return (
<View style={{ flex: 1 }}>
  <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
<ImageCarousel images= {product.images}/>
<DetailBox price = {product.fiyat} name = {product.name} quantity ={product.miktar}/>,
<Text style={{paddingVertical: 12, paddingHorizontal:10, color:'#808B99', fontWeight: '600' }}> Detaylar</Text>

 </ScrollView>

<CardButton/>
</View>  
)
}

export default index