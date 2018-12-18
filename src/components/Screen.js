import React from "react";
import PropTypes from "prop-types";
import { Container } from "native-base";
import { Platform, StyleSheet, Text, View } from "react-native";

export default function Screen({ children }) {
  return <Container>{children}</Container>;
}

Screen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};
