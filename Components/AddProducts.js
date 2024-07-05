import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";

const AddProducts = ({ submitHandler, handleDeleteAllProducts }) => {
  const [product, setProduct] = useState("");
  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    if (product.trim() !== "" && product.length > 0) {
      submitHandler(product);
      setProduct("");
    } else {
      Alert.alert("Oups !", "Veuillez entrer un produit valide", [ 
         { text: "Compris" }
        ])
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textTitle}>Ma liste</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        onChangeText={inputHandler}
        onSubmitEditing={handleClick}
        value={product}
      ></TextInput>
      {/* <Text> grfggr</Text> */}
      <View style={styles.test}>
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}>Ajouter mon produit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDeleteAllProducts}
        >
          <Text style={styles.buttonText}>Supprimer la liste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "lightgrey",
    borderWidth: 2,
    padding: 10,
    fontSize: 18,
    flexGrow: 1,
    width: "100%",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange",
    padding: 10,
  },
  button: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    fontSize: 15,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "orange",

    fontSize: 20,
  },
  test: {
    flexDirection: "row",
  },
});

export default AddProducts;
