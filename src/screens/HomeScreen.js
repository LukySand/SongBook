import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;

  //console.log(props);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.h1}>Welcome!</Text>
      <Text style={styles.h2}>to the HomeScreen :)</Text>
      <Text
        style={styles.pressText}
        onPress={() => {
          navigation.navigate("Lyric");
        }}
      >
        SongScreen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    //fontWeight: 300,
  },
  h2: {
    fontSize: 20,
    //fontWeight: 100,
  },
  pressText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 25,
  },
});
