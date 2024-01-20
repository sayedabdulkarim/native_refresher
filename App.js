import { StyleSheet, Text, View } from "react-native";
//Apps
// import ExpenseApp from "./screens/expenseTrackerApp";
// import TargetApp from "./component/targetApp";
// import MealApp from "./screens/mealsApp";
// import DrawerApp from "./screens/drawerApp";
import AuthApp from "./screens/authApp";

/**
 * for Meal App change bgColor to #24180f in app.json
 */

const App = () => {
  return (
    <View style={styles.rootScreen}>
      {/* <ExpenseApp /> */}
      {/* <TargetApp /> */}
      {/* <MealApp /> */}
      {/* <DrawerApp /> */}
      <AuthApp />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
