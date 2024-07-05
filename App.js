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

  const submitHandler = (toto) => {
    const idString = Date.now().toString();
    setMyProducts([{ key: idString, name: toto }, ...myProducts]);
    // setProduct("");
  };

  const handleDelete = () => {
    setMyProducts([]);
  };

  //   const renderItem = ({item}) => (
  //     <View style={styles.item} >
  //        <Text style={styles.element}> {item.name} </Text>
  // </View>
  //   )

  return (
    <View style={styles.container}>
      <AddProducts submitHandler={submitHandler} handleDelete={handleDelete}/>
      <FlatList
        data={myProducts}
        renderItem={({ item }) => <Products toto={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
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
