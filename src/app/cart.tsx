import { View, Text, StatusBar, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { useCart } from '@providers/CartProvider' 

const cart = () => {
  
  const {items} = useCart()

  return (
    <View>
      <Text>Cart items length: {items.length}</Text>

      <StatusBar />
    </View>
  )
}

export default cart

const styles = StyleSheet.create({
    
})

