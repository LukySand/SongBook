import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextWithOverlay = () => {
  const originalText = "primera estrofa";
  const targetChar = "f";
  const overlayChar = "G";

  const position = originalText.indexOf(targetChar);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {originalText.split("").map((char, index) => (
          <View key={index}>
            {index === position ? (
              <View style={styles.overlayContainer}>
                <Text style={styles.overlayChar}>{overlayChar}</Text>
              </View>
            ) : null}
            <Text style={styles.char}>{char}</Text>
          </View>
        ))}
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
  },
  overlayContainer: {
    position: "absolute",
    top: -20, // Ajusta según sea necesario
    left: -3,
  },
  overlayChar: {
    fontSize: 20,
    fontWeight: "bold", // Puedes ajustar esto según tus preferencias
  },
  char: {
    fontSize: 15,
  },
});

export default TextWithOverlay;

/*

    //que se recorran todas los acordes ya que cuando no haya mas acordes paramos

let index = 0;
foreach(object chord in chords)

    //




for(index = 0; index < phrase.length; index++)
{
    let note = 0;
    if (chords[total].position === index)
    {
        break;
    }
}
*/
