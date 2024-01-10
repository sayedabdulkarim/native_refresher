import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
//comp
// import GoalApp from "./component/goalApp";
import StartGameScreen from "../../screens/targetAppScreens/StartGameScreen";
import { useState } from "react";
import GameScreen from "../../screens/targetAppScreens/GameScreen";
import GameOverScreen from "../../screens/targetAppScreens/GameOverScreen";

const App = () => {
  //state
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);
  //
  const [fontsLoaded] = useFonts({
    // "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //func
  const handlePickedNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const handleGameOver = () => {
    setGameIsOver(false);
  };

  const handleStartNewGame = () => {
    setUserNumber(null);
    setGuessRound(0);
  };

  let screen = <StartGameScreen handlePickedNumber={handlePickedNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} handleGameOver={handleGameOver} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        onStartNewGame={handleStartNewGame}
        roundsNumber={guessRound}
        userNumber={userNumber}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        {/* <GoalApp /> */}
        <ImageBackground
          source={require("../../assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
          {/* <StartGameScreen /> */}
        </ImageBackground>
      </LinearGradient>
    </>
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
