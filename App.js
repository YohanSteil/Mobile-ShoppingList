import { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Text,
  RefreshControl,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import Products from "./Components/Products";
import AddProducts from "./Components/AddProducts";

export default function App() {
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const submitHandler = (toto, setShowModal) => {
    const idString = Date.now().toString();
    setMyProducts([{ key: idString, name: toto }, ...myProducts]);
  };

  const handleDeleteOneArticle = (key) => {
    setMyProducts(myProducts.filter((item) => item.key != key));
  };

  const handleDeleteAllProducts = () => {
    setMyProducts([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRefresh(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      Alert.alert(
        "Info",
        "Liste rafraîchie !",
        [
          {
            text: "OK",
            // onPress: () => console.warn("Liste rafraîchie !"),
            style: "cancel",
          }
        ]
      );
      setRefresh(false);
    }, 500);
  };

  return (
    <ScrollView 
      refreshControl={
      <RefreshControl
      refreshing={refresh}
      onRefresh={onRefresh}
      colors={["orange"]}
      />
      }>
    <View style={styles.container}>
        <>
          <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            animationType="fade"
            hardwareAccelerated={true}
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>OUPS !</Text>
                </View>
                <View style={styles.modalCross}>
                  <Image source={require("./assets/cross.png")} />
                </View>
                <View style={styles.modalBody}>
                  <Text style={styles.modalBodyText}>
                    Merci d'indiquer un produit !{" "}
                  </Text>
                </View>
                <View style={styles.modalFooter}>
                  <Pressable
                    style={styles.modalFooterPressable}
                    onPressIn={() => setShowModal(false)}
                  >
                    <Text style={styles.modalFooterText}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <AddProducts
            submitHandler={submitHandler}
            handleDeleteAllProducts={handleDeleteAllProducts}
            setShowModal={setShowModal}
          />
           {myProducts.map((item) => (
            <Products
              key={item.key}
              toto={item.name}
              idString={item.key}
              handleDeleteOneArticle={handleDeleteOneArticle}
            />
          ))}
        </>
      
    </View>
    </ScrollView>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    borderColor: "orange",
    borderWidth: 2,
    width: "80%",
    height: "45%",
    alignItems: "center",
  },
  modalHeader: {
    // backgroundColor: "orange",
    padding: 20,
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  modalHeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalBody: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // backgroundColor: "red"
  },
  modalBodyText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
    width: "100%",
    textAlign: "center",
  },
  modalFooter: {
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },
  modalFooterPressable: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalFooterText: {
    color: "orange",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalCross: {
    paddingTop: 30,
  },
  spinner: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "orange",
  },

});
