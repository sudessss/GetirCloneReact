import React from 'react'
import HeaderMain from "../../HeaderMain"
import { ScrollView } from 'react-native'

import BannerCarousel from '../../BannerCarousel'


function Index(){
  return (
   <ScrollView stickyHeaderIndices={[0]} style= {{backgroundColor: '#f5f5f5'}}>
     <HeaderMain />
   <BannerCarousel/>
   </ScrollView>
   
   
  )
}

export default Index

