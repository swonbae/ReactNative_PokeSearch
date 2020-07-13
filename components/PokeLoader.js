import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function PokeLoader() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});
