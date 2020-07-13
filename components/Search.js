import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Item, Icon, Input } from "native-base";
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
import axios from "axios";

export default function Search() {
  const [pokeSearch, setPokeSearch] = useState("");
  const [onCall, setOnCall] = useState(true);
  const [data, setData] = useState({});

  const searchPoke = () => {
    setOnCall(true);
    axios
      .get("http://pokeapi.co/api/v2/pokemon/" + pokeSearch.toLowerCase())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setOnCall(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderBody = () => {
    if (onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={data} />;
    }
  };

  return (
    <View style={styles.container}>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" onPress={searchPoke} />
          <Input
            value={pokeSearch}
            placeholder="Search Pokemon"
            onChangeText={(pokeSearch) => setPokeSearch(pokeSearch)}
          />
        </Item>
      </Header>
      {renderBody()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
