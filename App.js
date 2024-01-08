import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//comp
// import GoalApp from "./component/goalApp";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

const App = () => {
  //state
  const [userNumber, setUserNumber] = useState(null);

  //func
  const handlePickedNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen handlePickedNumber={handlePickedNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      {/* <GoalApp /> */}
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        {/* <StartGameScreen /> */}
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "#ddb52f",
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
