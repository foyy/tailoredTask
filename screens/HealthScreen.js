import React from "react";
import { ScrollView, StyleSheet, Button, View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

class HealthScreen extends React.Component {
  static navigationOptions = {
    title: "Health"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.basicText}>Hey man!</Text>
        </View>

        {/* Go Home Button */}
        <Button
          title="Go Back Home"
          onPress={() =>
            navigate("Main", {
              name: "Home"
            })
          }
        />
      </ScrollView>
    );
  }
}

export default createStackNavigator({
  Health: {
    screen: HealthScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  basicText: {
    fontFamily: "Courier",
    textAlign: "center"
  }
});
