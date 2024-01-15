import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../../component/mealsApp/MealDetails";
import Subtitle from "../../component/mealsApp/mealDetailComponent/Subtitle";
import List from "../../component/mealsApp/mealDetailComponent/List";
import { useContext, useEffect, useLayoutEffect } from "react";
import IconButton from "../../component/mealsApp/IconButton";
import { FavoritesContext } from "../../store/context/favoritesContext";

const MealDetailsScreeen = ({ route, navigation }) => {
  //misc
  const { ids, addFavorites, removeFavorites } = useContext(FavoritesContext);
  const { mealId } = route.params;
  const mealIsFavorite = ids.includes(mealId);
  const selectedMeal = MEALS.find((i) => i.id === mealId);
  //func
  const handleFavoriteHandler = (id) => {
    mealIsFavorite ? removeFavorites(id) : addFavorites(id);
    // console.log({ ids, addFavorites, removeFavorites, MEALS }, "Hello");
  };
  //async
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            // icon={"star"}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"white"}
            onPress={() => handleFavoriteHandler(mealId)}
          />
        );
      },
    });
  }, [navigation, handleFavoriteHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal?.duration}
          affordability={selectedMeal?.affordability}
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listWrapper}>
        <View style={styles.listContainer}>
          {/*  */}
          <Subtitle>Ingredients</Subtitle>
          <List items={selectedMeal?.ingredients} />
          {/*  */}
          <Subtitle>Steps</Subtitle>
          <List items={selectedMeal?.steps} />
          {/*  */}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreeen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText: {
    color: "#fff",
  },
  subtitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6,
  },
  listWrapper: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
