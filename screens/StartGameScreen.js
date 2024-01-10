import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../component/targetApp/PrimaryButton";
import { useState } from "react";
import Title from "../component/targetApp/Title";
import Colors from "../constants/colors";
import Card from "../component/targetApp/Card";

const StartGameScreen = ({ handlePickedNumber }) => {
  //misc
  const { width, height } = useWindowDimensions();
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

  //responsive css
  const marginTopDistance = height < 380 ? 30 : 150;

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;

const { height: deviceHeight, width: deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight < 380 ? 30 : 150,
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
