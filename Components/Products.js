import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Products = ({ toto }) => {
  return (
    <View>
      <Text style={styles.element}>{toto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Products;
