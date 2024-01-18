import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//component
import ManageExpense from "./ManageExpense";
import RecentExpenses from "./RecentExpenses";
import AllExpenses from "./AllExpenses";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../../component/expenseApp/IconButton";
//
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"add"}
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("MangeExpense")}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style={"auto"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: "white ",
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MangeExpense"
            component={ManageExpense}
            options={{
              title: "Manage Expense",
              presentation: "modal",
              headerTintColor: "white",
            }}
          />
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
