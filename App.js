import React, { useMemo, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

export default function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const changeColor = () => {
    const randomInt = Math.floor(Math.random() * 16777215);
    const hexString = randomInt.toString(16).padStart(6, "0");
    setBgColor(`#${hexString}`);
  };

  const ColorBox = useMemo(() => {
    return (
      <Pressable
        onPress={() => {
          changeColor();
          console.log("Pressed!");
        }}
        style={{
          ...styles.pressable,
          backgroundColor: bgColor,
        }}
      >
        <Text style={styles.text}>Hello there; color: {bgColor}</Text>
      </Pressable>
    );
  }, [bgColor]);
  return <View style={styles.container}>{ColorBox}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none", // Disable text selection
    cursor: "pointer",
  },

  text: {
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 4,
  },
});
