import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import SongArray from "../utils/SongArray";

export default function SongList() {
  return (
    <View>
      <FlatList
        data={SongArray}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(song) => String(song.number)}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
