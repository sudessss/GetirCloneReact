import { Image, Text, View } from 'react-native'
import React from 'react'
import Styles from "./styles"
import Entypo from '@expo/vector-icons/Entypo';

function Index(){
  return (
    <View style={Styles.headerMain}>
      <View style={Styles.headerOne}>
        <Image style={Styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/> 
        <View style={Styles.headerOneView}>
          <Text style={{fontWeight: '600', fontSize: 16}}>Ev </Text>
          <Text numberOfLines={1} style={{fontWeight: '500', fontSize: 12, color: '#6E7480', marginLeft: 6, marginRight: 1, flex: 1}}>
            Dr.Fazıl Küçük Cd. Yamanevler..
          </Text>
            
          <Entypo name="chevron-right" size={24} color="#5D3EBD"/>
        </View>
      </View>
        
      <View style={Styles.headerTwo}>
        <Text style={{fontWeight: 'bold', fontSize: 10, color: '#5D3EBD'}}>TVS</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{fontWeight: 'bold', fontSize: 12, color: '#5D3EBD'}}>16</Text>
          <Text style={{fontWeight: 'bold', fontSize: 12, color: '#5D3EBD'}}>dk</Text>
        </View>
      </View>
    </View>
  )
}

export default Index