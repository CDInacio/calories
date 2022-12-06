import React from "react";
import { Modal } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import { FOODS } from "../../utils/dataset";

const ModalUi = ({ onPress, isVisible: { isOpen }, foodId }) => {
  const selectedFood = FOODS.find((food) => food.id === foodId);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   onPress;
        // }}
      >
        <View style={styles.indicator} />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedFood?.name}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onPress()}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalUi;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  indicator: {
    position: "absolute",
    zIndex: 9999,
    top: 5,
    width: 80,
    height: 5,
    backgroundColor: "#cccc",
    borderRadius: 50,
    alignSelf: "center",
  },
  modalView: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
