import React from 'react'
import HeaderMain from "../../HeaderMain"
import { ScrollView } from 'react-native'
import CategoryItem from '../../CategoryItem'
import BannerCarousel from '../../BannerCarousel'
import MainCategories from '../../MainCategories'


function Index(){
  return (
   <ScrollView stickyHeaderIndices={[0]} style= {{backgroundColor: '#f5f5f5'}}>
     <HeaderMain />
   <BannerCarousel/>
   <MainCategories />
   </ScrollView>
   
   
  )
}

export default Index

