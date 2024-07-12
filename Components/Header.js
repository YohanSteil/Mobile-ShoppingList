import { View, Text, StyleSheet} from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>MA LISTE</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
    headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    padding: 10,
},
});

export default Header;