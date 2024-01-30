import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextWithChords = (PropVerse) => {
  const DefaultVerse = {
    text: "el nombre de Jesucristo, nuestro amigo más leal.",
    chords: [
      { note: "C7", position: 0 },
      { note: "G", position: 17 },
      { note: "Em", position: 25 },
      { note: "D", position: 40 },
      { note: "G", position: 45 },
    ],
  };
  const [verse, setVerse] = React.useState(
    PropVerse.text ? PropVerse : DefaultVerse
  );

  //console.log(verse.chords);

  return (
    <View>
      {/* <View style={styles.container}> */}
      <Text style={styles.text}>
        {verse.text.split("").map((char, index) => {
          const chord = verse.chords.find((c) => c.position === index);

          return (
            <View key={index}>
              {chord && (
                <View style={styles.chordContainer}>
                  <Text style={styles.chord}>{chord.note}</Text>
                </View>
              )}
              <Text style={styles.char}>{char}</Text>
            </View>
          );
        })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 25,
  },
  chordContainer: {
    position: "absolute",
    top: -20, // Ajusta según sea necesario
    left: 0,
  },
  chord: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red", // Puedes ajustar el color según tus preferencias
  },
  char: {
    fontSize: 16,
  },
});

export default TextWithChords;
