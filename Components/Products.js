import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Products = ({ toto, handleDeleteOneArticle, idString }) => {
  const handlePress = () => {
    handleDeleteOneArticle(idString); // Appel de la fonction pour supprimer l'article
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.item}>
        <View style={styles.element}>
          <Text style={styles.text}> {toto} </Text>
          <Ionicons name="trash-sharp" size={24} color="white" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
  },
  element: {
    backgroundColor: "orange",
    padding: 20,
    marginTop: 5,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Products;
