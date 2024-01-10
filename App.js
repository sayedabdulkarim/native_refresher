import { StyleSheet, Text, View } from "react-native";
//Apps
// import TargetApp from "./component/targetApp";
import MealApp from "./screens/mealsApp";

const App = () => {
  return (
    <View style={styles.rootScreen}>
      {/* <TargetApp /> */}
      <MealApp />
      {/* <Text>Hello world</Text> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
