import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={centerEverything.styles}>
        Trying to do my best to make some huge and beneficial changes to the
        world and also determined.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27282e",
    alignItems: "center",
    justifyContent: "center",
  },
});

const centerEverything = StyleSheet.create({
  styles: {
    color: "white",
    textAlign: "center",
    width: "70%",
    lineHeight: 50,
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});
