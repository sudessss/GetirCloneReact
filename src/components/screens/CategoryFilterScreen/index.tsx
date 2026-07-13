import React, {useState}from 'react'
import {ScrollView, Text} from 'react-native'
import CategoryFiltering from "../../../../src/components/CategoryFiltering"
import TypeFiltering from "../../../components/TypeFiltering"
import  ProductItem from '../../ProductItem'
import ProductsContainer from "../../ProductsContainer"

function index(props) {

    const [category, setCategory] = useState<Category>(props.route.params.category)
  return (
    <ScrollView>
       
       <CategoryFiltering  category={category}/>
       <TypeFiltering/>
       <ProductsContainer/>
    </ScrollView>
  )
}

export default index