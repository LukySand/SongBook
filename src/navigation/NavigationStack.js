import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screen imports
import HomeScreen from "../screens/HomeScreen";
import TextWithChords from "../screens/ChordScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TextWithChords} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//no pude hacer andar esto.
