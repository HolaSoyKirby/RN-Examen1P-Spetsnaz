import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";

export default function Form({ serie }) {
  return (
    <View style={styles.viewForm}>
        <TextInput
        editable = {false}
        value = {serie}
            multiline={true}
          style={styles.input}
        ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: -40,
    width: "100%",
    backgroundColor: "#FE05BA",
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  viewInput: {
    flexDirection: "row",
    
  },
  input: {
    fontSize: 24,
    width: "95%",
    height: 90,
    backgroundColor: "#ffffff",
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    color: "#000",
    paddingHorizontal: 20,

  }
});