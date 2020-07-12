import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "native-base";

const backGroundImg = require("../assets/images/landing.jpg");

export default function Landing(props) {
  return (
    <ImageBackground source={backGroundImg} style={styles.background}>
      <View style={styles.welcomeView}>
        <Text style={styles.title}>Welcome to PokeSearch</Text>
        <Button block={true} style={styles.button} onPress={props.switchScreen}>
          <Text style={styles.buttonText}>Start Searching</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  welcomeView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: "blue",
    alignItems: "center",
  },
  button: {
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
});
