import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import productsGetir from '../../../../assets/productsGetir';
import CartItem from '../../CartItem';

const { width, height } = Dimensions.get('window');

function CartScreen() {
  const totalPrice = productsGetir
    .slice(0, 4)
    .reduce((sum, item) => sum + item.fiyat, 0);

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <FlatList
        data={productsGetir.slice(0, 4)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem product={item} />}
        contentContainerStyle={{
          paddingBottom: height * 0.12,
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: height * 0.11,
          backgroundColor: '#F8F8F8',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '4%',
        }}
      >
        <TouchableOpacity
          style={{
            flex: 3,
            height: height * 0.06,
            backgroundColor: '#5D3EBD',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            Devam
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            height: height * 0.06,
            backgroundColor: 'white',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: '#5D3EBD',
              fontWeight: 'bold',
              fontSize: 15,
            }}
          >
            ₺ {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CartScreen;