import { StyleSheet, View } from "react-native";

import TargetApp from "./component/targetApp";
const App = () => {
  return (
    <View style={styles.rootScreen}>
      <TargetApp />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
