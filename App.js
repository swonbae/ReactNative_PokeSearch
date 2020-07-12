import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Landing from "./components/Landing";
import Search from "./components/Search";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("landing");

  const switchScreen = (screen) => {
    setCurrentScreen(screen);
  };
  const renderScreen = () => {
    switch (currentScreen) {
      case "search":
        return <Search />;
      case "landing":
      default:
        return <Landing switchScreen={() => switchScreen("search")} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
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
