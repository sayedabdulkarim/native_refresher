import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../component/targetApp/PrimaryButton";
import { useState } from "react";
import Title from "../component/targetApp/Title";
import Colors from "../constants/colors";
import Card from "../component/targetApp/Card";

const StartGameScreen = ({ handlePickedNumber }) => {
  //state
  const [enteredNumber, setEnteredNumber] = useState("");

  //func
  const handleEnteredNumber = (enteredNumber) => {
    setEnteredNumber(enteredNumber);
  };

  const handleReset = () => {
    setEnteredNumber("");
  };

  const handleConfirm = () => {
    // console.log("clicked");
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      //show alert
      console.log(typeof choosenNumber);
      Alert.alert(
        "Invalid Number!",
        "Number has to be number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
    }
    handlePickedNumber(choosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={handleEnteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    fontSize: 32,
    height: 50,
    width: 50,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
