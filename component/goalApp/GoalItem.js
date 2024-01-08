import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GoalItem = ({ id, text, handleGoalDelete }) => {
  return (
    <Pressable
      onPress={() => handleGoalDelete(id)}
      android_ripple={{ color: "grey" }}
    >
      <View>
        <Text style={styles.goalItem} key={id}>
          {text}
        </Text>

        {/* list items with scroll view  */}
        {/* <View style={styles.goalsContainer}>
          <ScrollView alwaysBounceVertical={false}>
            {courseGoals?.map((goal) => {
              const { text, id } = goal;
              return (
                <Text style={styles.goalItem} key={id}>
                  {text}
                </Text>
              );
            })}
            <Text>{JSON.stringify(courseGoals, null, 4)}</Text>
          </ScrollView>
        </View> */}
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5808cc",
    color: "#fff",
  },
});
