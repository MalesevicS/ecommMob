import { View, Text, StyleSheet, Image,  Pressable } from "react-native";
import React from "react";
import Colors from "@constants/Colors";
import { CartItem } from "@Types";
import { Link } from "expo-router";
import { defaultShoeImage } from "./ProductListItem";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "@providers/CartProvider";
import cart from "@app/cart";


type CartListItem = {
    cartItem: CartItem
}


const CartListItem = ({cartItem}: CartListItem) => {
    const {updateQuantity} = useCart();

    return(
        <View style={styles.container}>
            <Image 
            source={{uri: cartItem.product.image || defaultShoeImage}}
            resizeMode="contain"
            style={styles.image}
            />
            <View style={{flex:1}}>
                <Text style={styles.title}>{cartItem.product.name}</Text>
                    <View>
                        <Text>${cartItem.product.price.toFixed(2)}</Text>
                        <Text>Size: {cartItem.size}</Text>
                    </View>
            </View>
            <View style={styles.quantitySelector}>
                <FontAwesome
                onPress={() => updateQuantity(cartItem.id, -1)}
                name="minus"
                color="gray"
                style={{padding:5}}
                />

                <Text style={styles.quantity}>{cartItem.quantity}</Text>
                <FontAwesome
                 onPress={() => updateQuantity(cartItem.id, 1)}
                name="plus"
                color="gray"
                style={{padding:5}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        borderRadius:10,
        padding:5,
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    image: {
        width:75,
        aspectRatio:1,
        alignSelf:"center",
        marginRight:10
    },
    title: {
        fontWeight:"500",
        fontSize:16
    },
    price: {
        color:Colors.light.tint,
        fontWeight:"bold"
    },
    subtitleContainer: {
       flexDirection:"row",
       gap:5
    },
    quantity: {
        fontWeight:"500",
        fontSize:18
    },
    quantitySelector: {
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        marginVertical:10

    }
})

export default CartListItem;