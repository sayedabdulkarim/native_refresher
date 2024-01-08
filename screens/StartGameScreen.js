import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../component/targetApp/PrimaryButton";
import { useState } from "react";

const StartGameScreen = () => {
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
  };

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    //android only for boxShadow ( elevation )
    elevation: 8,
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
