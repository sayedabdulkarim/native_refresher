import {
  Button,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({
  goalInputhandler,
  enteredGoalText,
  addGoalhandler,
  visible,
  handleCloseModal,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal !"
        onChangeText={goalInputhandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add goal" onPress={addGoalhandler} />
        <Button title="Close Modal" onPress={handleCloseModal} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    padding: 5,
    width: "60%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
