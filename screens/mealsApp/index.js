import { Button, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./CategoriesScreen";
import MealOverviewScreen from "./MealOverviewScreen";
import MealDetailsScreeen from "./MealDetailsScreeen";
import FavoriteScreen from "../drawerApp/FavoriteScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  //misc
  const Drawer = createDrawerNavigator();
  //func
  const DrwaerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "#fff",
          sceneContainerStyle: {
            backgroundColor: "#3f2f25",
          },
          drawerContentStyle: {
            backgroundColor: "#351401",
          },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            // component={CategoriesScreen}
            component={DrwaerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreeen} />
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
