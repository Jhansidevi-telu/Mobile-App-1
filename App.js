import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs/Tabs";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />

      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
