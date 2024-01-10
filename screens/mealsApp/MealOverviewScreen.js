import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";

const MealOverviewScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  return (
    <View style={styles.container}>
      <Text>MEAL OVERVIEW SCREENnn {categoryId}</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
      <Text>MEAL OVERVIEW SCREEN</Text>
    </View>
  );
};

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
