import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import Products from "./Components/Products";
import AddProducts from "./Components/AddProducts";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (toto, setProduct) => {
    const idString = Date.now().toString();
    setMyProducts([{ key: idString, name: toto }, ...myProducts]);
  };

  const handleDeleteOneArticle = (key) => {
    setMyProducts(myProducts.filter((item) => item.key != key));
  };

  const handleDeleteAllProducts = () => {
    setMyProducts([]);
  }


  return (
    <View style={styles.container}>
      <AddProducts submitHandler={submitHandler} handleDeleteAllProducts={handleDeleteAllProducts}/>
      <FlatList
        data={myProducts}
        renderItem={({ item }) => <Products toto={item.name} idString={item.key} handleDeleteOneArticle={handleDeleteOneArticle} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  item: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 5,
    fontSize: 20,
  },
});
