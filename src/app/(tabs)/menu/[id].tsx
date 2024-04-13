import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products'
import { Image } from 'react-native'
import { defaultShoeImage } from '@components/ProductListItem'

const sizes = [ 42, 44, 46, 48]

const ProductDetailsScreen = () => {

  const { id } = useLocalSearchParams()
  const product = products.find ((p) => p.id.toString() === id)

  if (!product) {
    return <Text>Product not available</Text>
  }

  return (
    <View style={styles.container}>  
      <Stack.Screen options={{title: product?.name}} />
      <Image style={styles.image} source={{uri: product.image || defaultShoeImage}} />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <View style={styles.size}>
          <Text style={styles.sizeText}  key={size}>{size}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex:1,
    padding:10
  },
  image: {
    width:`100%`,
    aspectRatio:1,
    resizeMode:"contain"
  },
  price : {
    fontSize:20,
    fontWeight:"bold"
  },
  size: {
    backgroundColor:"gainsboro",
    width:50,
    borderRadius:25,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  sizes : {
    marginVertical:5,
    flexDirection:"row",
    justifyContent: "space-around"
  },
  sizeText : {
    fontWeight:"600",
    fontSize:20
  }
})