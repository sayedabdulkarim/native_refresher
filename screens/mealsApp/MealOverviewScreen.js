import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealItem from "../../component/mealsApp/MealItem";

const MealOverviewScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((i) => {
    return i.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMeaItem = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability } =
      itemData?.item;
    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text
        onPress={() =>
          console.log({
            // MEALS,
            displayedMeals,
            categoryId,
          })
        }
      >
        Click
      </Text> */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeaItem}
      />
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
