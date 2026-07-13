import React, {useEffect, useState} from 'react'
import { Text,View } from 'react-native'
import {Product} from '../models'
import ImageCarousel from '../../ImageCoursel'
import { ActivityIndicator } from 'react-native'

function index(props) {
  const[product, setProduct] = useState <Product>()
  useEffect(() => {
    setProduct(props.route.params.product)

  }, [])
  if(!product){
    return<ActivityIndicator color= {"#5D3EBD"}/>
  }
  return (
<View>
<ImageCarousel images= {product.images}/>
</View>  
)
}

export default index