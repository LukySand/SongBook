import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //ver documentacion en andrioid a la hora de implementar
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigationStack from "./src/navigation/NavigationStack";

//screen imports
import HomeScreen from "./src/screens/HomeScreen";
import ChordScreen from "./src/screens/ChordScreen";
import CancionScreen from "./src/screens/SongScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Lyric"
          component={CancionScreen}
          // initialParams={{ songId: 0 }}
        />
        {/* <Stack.Screen name="" component={}/> */}
      </Stack.Navigator>
    </NavigationContainer>
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
