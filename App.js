import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Reports from "./Pages/Reports";
import PostData from "./Pages/PostData";
import Incomes from "./Pages/Incomes";
import Expenses from "./Pages/expenses";
import { createDrawerNavigator } from "@react-navigation/drawer";
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator defaultScreenOptions="Reports">
        <Drawer.Screen name="Reports" component={Reports} />
        <Drawer.Screen name="Add Data" component={PostData} />
        <Drawer.Screen name="Imcomes" component={Incomes} />
        <Drawer.Screen name="Expenses" component={Expenses} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="home">
    //     <Stack.Screen name="home" component={styleComponent}></Stack.Screen>
    //     <Stack.Screen name="batat" component={batata}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
