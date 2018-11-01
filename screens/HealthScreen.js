import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";

class HealthScreen extends React.Component {
  static navigationOptions = {
    title: "Health"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate("Profile", { name: "Jane" })}
      />
    );
  }
}

export default createStackNavigator({
  Health: {
    screen: HealthScreen
  }
});
