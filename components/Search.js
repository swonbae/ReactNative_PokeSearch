import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Keyboard } from "react-native";
import { Header, Item, Icon, Input } from "native-base";
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
import axios from "axios";

export default function Search() {
  const [pokeSearch, setPokeSearch] = useState("");
  const [onCall, setOnCall] = useState(true);
  const [searchFailed, setSearchFailed] = useState(false);
  const [data, setData] = useState({});

  const searchPoke = () => {
    setOnCall(true);
    setSearchFailed(false);

    axios
      .get("http://pokeapi.co/api/v2/pokemon/" + pokeSearch.toLowerCase())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setOnCall(false);
      })
      .catch((err) => {
        console.log(err);
        setSearchFailed(true);
      });

    Keyboard.dismiss();
  };

  const renderBody = () => {
    if (searchFailed) {
      return <Text>Search Failed: Please enter a pokemon name or number</Text>;
    }
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
          {/* <Button>
            <Text>Search</Text>
          </Button> */}
          <Button
            title="Search"
            color="orange"
            style={styles.searchButton}
            onPress={searchPoke}
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
  searchButton: {
    // marginRight: 100,
  },
});
