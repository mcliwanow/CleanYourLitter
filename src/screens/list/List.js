import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Content,
  Header,
  Left,
  Text,
  Body,
  Title,
  Button,
  Icon,
  Right,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import Screen from "components/Screen";
import { actions } from "../shared";

class List extends Component {
  componentDidMount() {
    this.props.fetchLitterBoxes();
  }

  goBack = () => this.props.navigation.goBack();

  goToBox = item => this.goBack();

  keyExtractor = item => item.id;

  renderBox = ({ item }) => {
    return (
      <ListItem>
        <Left>
          <Text>{item.name}</Text>
        </Left>
        <Right>
          <Button transparent onPress={() => this.goToBox(item)}>
            <Icon name="map" />
          </Button>
        </Right>
      </ListItem>
    );
  };

  renderEmptyView() {
    return <Text>Nice empty view</Text>;
  }

  render() {
    return (
      <Screen>
        <Header>
          <Left>
            <Button transparent onPress={this.goBack}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Future List View</Title>
          </Body>
        </Header>
        <Content>
          {this.props.litterBoxes.length > 0 ? (
            <FlatList
              data={this.props.litterBoxes}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderBox}
            />
          ) : (
            this.renderEmptyView()
          )}
        </Content>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

List.propTypes = {
  fetchLitterBoxes: PropTypes.func,
  litterBoxes: PropTypes.array
};

const mapStateToProps = state => ({
  litterBoxes: state.shared.litterBoxes
});

const mapDispatchToProps = {
  fetchLitterBoxes: actions.fetchLitterBoxes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
