import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Content, Header, Button, Item, Icon, Input, Fab } from "native-base";
import MapView from "react-native-maps";
import { ROUTES } from "res/constants";
import { Screen, UserProfileFAB, AddPlaceFAB } from "components";

export default class Map extends Component {
  goToList = () => this.props.navigation.navigate(ROUTES.LIST);

  render() {
    return (
      <Screen>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search for location" />
            <Button transparent primary onPress={this.goToList}>
              <Icon name="list" />
            </Button>
          </Item>
        </Header>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
          <AddPlaceFAB />
          <UserProfileFAB />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject
  }
});
