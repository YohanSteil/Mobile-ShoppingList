import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddProducts = ({submitHandler, handleDelete}) => {
  const [product, setProduct] = useState("");
  const inputHandler = (val) => {
    setProduct(val);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        onChangeText={inputHandler}
        value={product}
      ></TextInput>
      {/* <Text> grfggr</Text> */}
      <Button title="Valider" onPress={() => submitHandler(product)} />
      <Button title="Supprimer la liste" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    gap: 5,
  },
  textInput: {
    borderColor: "lightgrey",
    borderWidth: 2,
    padding: 10,
    fontSize: 18,
    flexGrow: 1,
  },
});

export default AddProducts;
