import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
} from "react-native";
import { ListItem, List } from "native-base";

export default function SearchBody(props) {
  const pokemon = props.data;

  if (!pokemon) {
    return <View />;
  }

  return (
    // <ScrollView style={styles.container}>
    //   <Text style={styles.header}>
    //     #{pokemon.id} - {pokemon.name.toUpperCase()}
    //   </Text>
    //   <View style={styles.view}>
    //     <Image
    //       source={{ uri: pokemon.sprites.front_default }}
    //       style={styles.image}
    //     />
    //   </View>
    //   <View style={styles.info}>
    //     <ListItem itemDivider>
    //       <Text style={styles.infoText}>Size</Text>
    //     </ListItem>
    //     <ListItem>
    //       <Text>Weight - {pokemon.weight}kg</Text>
    //     </ListItem>
    //     <ListItem>
    //       <Text>Height - {pokemon.height / 10}m</Text>
    //     </ListItem>
    //     <ListItem itemDivider>
    //       <Text style={styles.infoText}>Abilities</Text>
    //     </ListItem>
    //     <List
    //       dataArray={pokemon.abilities}
    //       renderRow={(item) => (
    //         <ListItem>
    //           <Text>{item.ability.name}</Text>
    //         </ListItem>
    //       )}
    //     ></List>
    //   </View>
    // </ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>
        #{pokemon.id} - {pokemon.name.toUpperCase()}
      </Text>
      <View style={styles.view}>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <FlatList
          ListHeaderComponent={
            <>
              <ListItem itemDivider>
                <Text style={styles.infoText}>Size</Text>
              </ListItem>
              <ListItem>
                <Text>Weight - {pokemon.weight}kg</Text>
              </ListItem>
              <ListItem>
                <Text>Height - {pokemon.height / 10}m</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text style={styles.infoText}>Abilities</Text>
              </ListItem>
            </>
          }
          data={pokemon.abilities}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => (
            <ListItem>
              <Text>{item.ability.name}</Text>
            </ListItem>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8,
  },
  infoText: {
    fontWeight: "bold",
  },
});
