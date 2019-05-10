import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import randomColor from "randomcolor";
import Touchable from "react-native-platform-touchable";
import Ripple from "react-native-material-ripple";

export default class Button extends React.Component {
  render() {
    const {
      name = "",
      color = randomColor({ luminosity: "dark" }),
      onPress = () => {}
    } = this.props;
    return (
      <Ripple
        rippleColor={"white"}
        onPress={onPress}
        style={[styles.container, { backgroundColor: color }]}
      >
        <Text style={styles.paragraph}>{name}</Text>
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: 100,
    height: 100,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 8,
    flexShrink: 1
  },
  paragraph: {
    color: "white",
    textAlign: "center"
  }
});
