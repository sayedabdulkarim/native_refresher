import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../component/targetApp/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../component/targetApp/NumberContainer";
import PrimaryButton from "../component/targetApp/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else return rndNum;
};

const GameScreen = ({ userNumber, handleGameOver }) => {
  //misc
  let minBoundary = 1;
  let maxBoundary = 100;
  //state
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  //func
  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", " You know that is wrong.", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  //async
  useEffect(() => {
    if (currentGuess === userNumber) {
      handleGameOver();
    }
  }, [currentGuess, userNumber, handleGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={() => handleNextGuess("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => handleNextGuess("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>

      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
