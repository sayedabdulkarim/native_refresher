import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function App() {
  //state
  const [isModal, setIsModal] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoal] = useState([]);
  //func
  const goalInputhandler = (enteredText) => {
    // console.log(e, " ddddddd");
    setEnteredGoalText(enteredText);
  };

  const addGoalhandler = () => {
    console.log({ enteredGoalText }, "clicked submitted");

    const payload = { text: enteredGoalText, id: Math.random().toString() };

    setCourseGoal((prevGoals) => [...prevGoals, payload]);
    setEnteredGoalText("");
  };

  const handleGoalDelete = (id) => {
    const filteredItems = courseGoals.filter((i) => i.id !== id);
    setCourseGoal(filteredItems);
  };

  const handleShowModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        color="#5a0ecc"
        onPress={() => handleShowModal()}
      />
      {isModal && (
        <View style={styles.inputContainer}>
          <GoalInput
            visible={isModal}
            goalInputhandler={goalInputhandler}
            enteredGoalText={enteredGoalText}
            addGoalhandler={addGoalhandler}
            handleCloseModal={handleCloseModal}
          />
        </View>
      )}

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { text, id } = item; // Destructuring the item
            return (
              <GoalItem
                id={id}
                text={text}
                handleGoalDelete={handleGoalDelete}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // input conainer
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    // borderWidth: 2,
    // borderColor: "red",
  },
  textInput: {
    borderWidth: 2,
    padding: 5,
    width: "60%",
  },
  // list container
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5808cc",
    color: "#fff",
  },
});
