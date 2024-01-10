import { StyleSheet, Text, View } from "react-native";
//Apps
// import TargetApp from "./component/targetApp";

const App = () => {
  return (
    <View style={styles.rootScreen}>
      {/* <TargetApp /> */}
      <Text>Hello world</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
