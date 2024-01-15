import { useContext } from "react";
import MealsList from "../../component/mealsApp/mealList/MealsList";
import { FavoritesContext } from "../../store/context/favoritesContext";
import { MEALS } from "../../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

const FavoriteScreen = () => {
  const { ids } = useContext(FavoritesContext);
  const itemsArr = MEALS.filter((i) => ids.includes(i.id));
  return !itemsArr?.length ? (
    <View style={styles.noData}>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
      <Text>No Favorites Added</Text>
    </View>
  ) : (
    <MealsList items={itemsArr} />
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  noData: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 16,
  },
});
