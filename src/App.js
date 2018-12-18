import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { ROUTES } from "res/constants";
import MapScreen from "./screens/map";
import ListScreen from "./screens/list";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));
const AppNavigator = createStackNavigator(
  {
    [ROUTES.HOME]: MapScreen,
    [ROUTES.LIST]: ListScreen
  },
  {
    initialRouteName: ROUTES.HOME,
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
