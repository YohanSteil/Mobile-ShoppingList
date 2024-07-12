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
    alignItems: "center",
  },
  element: {
    backgroundColor: "orange",
    padding: 20,
    marginTop: 5,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flexGrow: 1,
  },
});

export default Products;
