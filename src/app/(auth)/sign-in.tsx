import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Button from '@components/Button'
import Colors from '@constants/Colors'
import { Link, Stack } from 'expo-router'

const SignInScreen = () => {
    
    const [email,setEmail] = useState(``);
    const [password,setPassword] = useState(``);
    console.log(email,password)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email...'
        style={styles.input}
      />

        <Text style={styles.label}>Password</Text>
        <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password...'
        style={styles.input}
        secureTextEntry
        />

        <Button style={styles.btn} text='Sign in' />
        <Link href="/sign-in">
        Create an Account
        </Link>

    </View>

  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:10
    },
    input:{
        padding:10,
        backgroundColor:"grey",
        marginTop:5,
        marginBottom:5,
        borderRadius:5
    },
    label: {
        color:"grey"
    },
    btn: {
        alignSelf:"center",
        fontWeight:"bold",
        color:Colors.light.tint,
        marginVertical:10
    }
})