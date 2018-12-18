import React, { Component } from "react";
import { Icon, Fab } from "native-base";

export default class AddPlaceFAB extends Component {
  addBox = () => {};

  render() {
    return (
      <Fab active={false} onPress={this.addBox} position="bottomRight">
        <Icon name="add" />
      </Fab>
    );
  }
}
