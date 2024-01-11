import { StyleSheet, Text, View } from "react-native";

const MealDetailsScreeen = ({ route, navigation }) => {
  const { mealId } = route.params;
  return (
    <View>
      <Text>MealDetailsScreeen {mealId}</Text>
      <Text>MealDetailsScreeen</Text>
      <Text>MealDetailsScreeen</Text>
    </View>
  );
};

export default MealDetailsScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
