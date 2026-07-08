import { StyleSheet, Text, View } from 'react-native'
import React,{useState}  from 'react'
import CategoryiesGetir from '../../../assets/categoriesGetir'
import CategoryItem from '../CategoryItem'
import { Category } from '../screens/models'

function index(){
    const [categories, setCategories] = useState<Category[]>(CategoryiesGetir)
  return (
    <View>
        <View style={styles.listContainer}>{
        categories.map((item) => (
            <CategoryItem key={item.id} item={item} />
        ))}</View>
    </View>
  );
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        alignItems: "flex-start",
        marginTop: 15,
    },
    }
);
export default index;