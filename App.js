import { StyleSheet, Text, View } from "react-native";
//Apps
// import TargetApp from "./component/targetApp";
// import MealApp from "./screens/mealsApp";
import DrawerApp from "./screens/drawerApp";

/**
 * for Meal App change bgColor to #24180f in app.json
 */

const App = () => {
  return (
    <View style={styles.rootScreen}>
      {/* <TargetApp /> */}
      {/* <MealApp /> */}
      <DrawerApp />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
