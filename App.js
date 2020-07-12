import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import Landing from "./components/Landing";

export default function App() {
  return (
    <View style={styles.container}>
      <Landing />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
