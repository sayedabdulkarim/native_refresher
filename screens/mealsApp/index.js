import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./CategoriesScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
