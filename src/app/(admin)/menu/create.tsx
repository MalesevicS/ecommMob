import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Button from '@components/Button';
import { defaultShoeImage } from '@components/ProductListItem';
import Colors from '@constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';

const CreateProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');
  const [image, setImage] = useState<string | null>(null);
  

  const validateInput = () => {
    setErrors(``)
    if (!name) {
        setErrors("Name is requierd");
        return false;
    }
    if (!price) {
        setErrors("Price is requierd");
        return false;
    }
    if (isNaN(parseFloat(price))) {
        setErrors("Price is not a number");
        return false;
    }

    return true;
  }

  const onCreate = () => {
    if (!validateInput()) {
        return;
    }

    console.log("Creating Product", name, price); 

    resetFields();
  }

  const resetFields = () => {
    setName(``);
    setPrice(``);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:"Create Product"}} />
        <Image style={styles.image} source={{uri:image || defaultShoeImage}} />
        <Text onPress={pickImage} style={styles.textBtn}>Select Image</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput value={name} onChangeText={setName} placeholder='Name' style={styles.input} />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput value={price} onChangeText={setPrice} placeholder='124.99' style={styles.input} keyboardType="numeric" />

      <Text style={styles.errors}>{errors}</Text>

      <Button onPress={onCreate} text='Create Product' />
    </View>
  );
}

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 20,
    color:"grey"
  },
  label: {
    color: "grey",
    paddingLeft: 7,
    fontSize: 18
  },
  errors : {
    color:"red"
  },
  image: {
    width:`50%`,
    aspectRatio:1,
    resizeMode:"contain",
    alignSelf:"center"
  },
  textBtn: {
    alignSelf:"center",
    fontWeight:"bold",
    color:Colors.light.tint
  }
});
