import React from 'react'
import { Product } from '../screens/models'
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'

type CartItemProps = {
  product: Product
}

const { width, height } = Dimensions.get('window')

function index({ product }: CartItemProps) {
  return (
    <View style= {{width:'100%',backgroundColor:'white'}}>
    <View
      style={{
        borderBottomWidth: 0.4,
        borderBottomColor:'lightgrey',
        marginHorizontal:0.4,
        height: height * 0.13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: width * 0.04,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Image
          style={{
            width: height * 0.11,
            height: height * 0.11,
          }}
          source={{ uri: product.image }}
        />

        <View
          style={{
            marginLeft: 8,
            flex: 1,
            marginRight: 10,
          }}
        >
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              fontWeight: '600',
              fontSize: 13,
              maxWidth: width * 0.42,
            }}
          >
            {product.name}
          </Text>

          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              marginTop: 3,
            }}
          >
            {product.miktar}
          </Text>

          <Text
            style={{
              color: '#5e3ebd',
              fontWeight: 'bold',
              marginTop: 8,
            }}
          >
            ₺ {product.fiyat}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: width * 0.21,
          height: height * 0.043,
          borderWidth: 0.5,
          borderColor: '#ddd',
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'white',

          shadowColor: '#808080',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 18 }}>-</Text>
        </TouchableOpacity>

        <View
          style={{
            width: 28,
            height: '100%',
            backgroundColor: '#5d3ebd',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            2
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#5d3ebd',
              fontWeight: 'bold',
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default index