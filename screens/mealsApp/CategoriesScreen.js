import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../../component/mealsApp/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handlePress}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
