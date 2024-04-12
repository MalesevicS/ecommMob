import { StyleSheet } from 'react-native';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View, } from '@/src/components/Themed';
import products from '../../../assets/data/products'; 
import ProductListItem from "../../components/ProductListItem"



export default function TabOneScreen() {
  return (
   <View>
    <ProductListItem product={products[0]} />
    <ProductListItem product={products[2]} />
   </View>
  );
}
