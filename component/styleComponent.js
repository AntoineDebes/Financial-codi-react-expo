import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
function styleComponent({ navigation }) {
  return (
    <View>
      <Text>hello from home page </Text>
      <Button title="Click me" onPress={() => navigation.navigate("batat")} />
    </View>
  );
}

export default styleComponent;
