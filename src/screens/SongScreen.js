import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

import TextWithChords from "./ChordScreen";
import SongArray from "../utils/SongArray";

const DefaultSong = {
  title: "Mi Titulo",
  lyrics: [
    {
      type: "standard",
      paragraph: [
        { text: "primera estrofa", chords: [{ note: "C", position: 0 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Em", position: 6 }] },
      ],
    },
    {
      type: "choir",
      paragraph: [
        { text: "coro letra", chords: [{ note: "C#5", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "D#7#9", position: 6 }] },
      ],
    },
    {
      type: "standard",
      paragraph: [
        { text: "segunda estrofa", chords: [{ note: "D", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Gm7", position: 6 }] },
      ],
    },
    {
      type: "standard",
      paragraph: [
        { text: "tercera estrofa", chords: [{ note: "Dmaj7", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Am/F", position: 9 }] },
      ],
    },
    {
      type: "standard",
      paragraph: [
        { text: "tercera estrofa", chords: [{ note: "Dmaj7", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Am/F", position: 9 }] },
      ],
    },
    {
      type: "standard",
      paragraph: [
        { text: "cuarta estrofa", chords: [{ note: "Dmaj7", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Am/F", position: 9 }] },
      ],
    },
    {
      type: "choir",
      paragraph: [
        { text: "coro letra", chords: [{ note: "C#5", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "D#7#9", position: 6 }] },
      ],
    },
    {
      type: "standard",
      paragraph: [
        { text: "quinta estrofa", chords: [{ note: "Dmaj7", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Am/F", position: 9 }] },
      ],
    },
    {
      type: "standard",
      paragraph: [
        { text: "sexta estrofa", chords: [{ note: "Dmaj7", position: 6 }] },
        { text: "adsfasdfasdf", chords: [{ note: "Am/F", position: 9 }] },
      ],
    },
  ],
};

const { width: screenWidth } = Dimensions.get("window");

const CancionScreen = ({ route }) => {
  const songId = route.params ? route.params.songId : undefined; //for some reason God knows why this prop "route" can ONLY be called route, if i change it to propId it breaks
  const [song, setSong] = React.useState(
    Number.isInteger(songId) ? SongArray[songId] : DefaultSong //hre im comparing if the number basically exist else its going to go with the defaultSong
  );

  return (
    <View style={styles.container}>
      <ReactNativeZoomableView
        maxZoom={10}
        minZoom={1}
        initialZoom={1}
        contentHeight={1100} //ToDo hay que hacer una ecuacion para que funcione esto con los diferentes tipos de letras
        //tambien hay que hacer que cuando se entre al corito se vea el titulo.
      >
        {/* <ScrollView> */}
        <View>
          <Text style={styles.titulo}>{song?.title}</Text>
        </View>
        {song.lyrics.map((estrofa, i) =>
          // coro
          estrofa.type == "choir" ? (
            <View key={"estrofa_" + i} style={styles.choir}>
              {estrofa?.paragraph.map((parrafo, k) => (
                <Text key={i + "_" + k} style={{ alignContent: "center" }}>
                  <TextWithChords {...parrafo} />
                </Text> //aca estoy diciendo que quiero que le muestre
              ))}
            </View>
          ) : (
            //aca hay una else por si no es un coro.

            // estrofas
            <View key={"estrofa_" + i} style={styles.estrofa}>
              {estrofa?.paragraph.map((parrafo, k) => (
                <Text key={i + "_" + k}>
                  <TextWithChords {...parrafo} />
                </Text>
              ))}
            </View>
          )
        )}
        {/* </ScrollView> */}
      </ReactNativeZoomableView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    paddingTop: 10,
    textAlign: "center",
    width: screenWidth, //this is here because if the width is the same as the screen, the zoom component doesn`t crop out the text when its moved
  },
  choir: {
    marginBottom: 20,
    backgroundColor: "#c3c3c3",
    alignItems: "center",
  },
  estrofa: {
    marginBottom: 20,
    alignItems: "center",
  },
});

export default CancionScreen;
