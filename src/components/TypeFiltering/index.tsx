import React, { useState } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window')

const TypeBox = ({ item, active, onPress }: { item: string, active: string, onPress: () => void }) => {
    const isActive = item === active;

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[
                {
                    flexDirection: 'row', 
                    alignItems: 'center',
                    paddingHorizontal: 14, 
                    marginRight: 12,
                    borderRadius: 6, 
                    height: height*0.045, 
                    borderWidth:2,
                    borderColor:"#F0Eff7"
                }, 
                isActive ?  { backgroundColor: '#5C3EBC' } : { backgroundColor: 'transparent' }
            ]}
        >
            <Text style={{ 
                fontSize: 13, 
                color: isActive ? '#FFFFFF' : '#7849F7', 
                fontWeight: '600' 
            }}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}

function Index() {
    const [categories, setCategories] = useState<string>("Birlikte İyi Gider")

    return (
        <View style={{ width: '100%', height: height * 0.065, backgroundColor: 'white'}}>
            <ScrollView 
                style={{ width: '100%', height: '100%' }} 
                contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 10 , flexDirection:'row', borderBottomColor:'lightgrey', borderBottomWidth:1}}
                showsHorizontalScrollIndicator={false} 
                bounces={true} 
                horizontal={true}
            >
                {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item, index) => (
                    <TypeBox 
                        key={index} 
                        item={item}  
                        active={categories}
                        onPress={() => setCategories(item)} 
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default Index