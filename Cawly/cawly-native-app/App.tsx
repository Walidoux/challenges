import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Logo from "@assets/Logo";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <View>
      <Header logo={<Logo />} />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
