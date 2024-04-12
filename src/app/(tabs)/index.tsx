import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View, } from '@/src/components/Themed';
import { Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '../../../assets/data/products'; 

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
        <View>
          <Image style={styles?.image} source={{uri: products[0].image}} />
          <Text style={styles.title}>{products[0].name}</Text>
          <Text style={styles.price}>${products[0].price}</Text>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    padding:10,
    borderRadius:15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    fontSize: 12,
    color: Colors.light.tint,
  },
  image : {
    width: `100%`,
    aspectRatio:1
  }
});
