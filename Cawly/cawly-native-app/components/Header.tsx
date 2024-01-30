import { View, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import App from "App";

interface HeaderProps {
  logo: React.ReactNode;
}

const getFonts = () =>
  Font.loadAsync({
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
  });

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return "miaw";
  } else {
    <App />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>{logo}</View>
      <View style={styles.rightSide}>
        <Text style={styles.title}>I believe in you !</Text>
        <Text style={styles.description}>You can do it. &#128170;</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    /* borderWidth: 2,
    borderColor: "black", */
  },
  logo: {
    shadowColor: "#004697",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
  },
  rightSide: {
    marginLeft: "auto",
  },
  title: {
    fontSize: 20,
    color: "#303030",
    fontFamily: "OpenSans_500Medium",
  },
  description: {
    fontSize: 15,
    textAlign: "right",
    fontFamily: "OpenSans_500Bold",
  },
});

export default Header;
