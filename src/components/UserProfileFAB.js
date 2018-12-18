import React, { Component } from "react";
import { Icon, Fab } from "native-base";

export default class UserProfileFAB extends Component {
  goToUserProfile = () => {};

  render() {
    return (
      <Fab active={false} onPress={this.goToUserProfile} position="bottomLeft">
        <Icon type="MaterialCommunityIcons" name="account" />
      </Fab>
    );
  }
}
