import { StyleSheet, Text, View } from "react-native";
import OutlineButton from "./OutlineButton";
import { Colors } from "../../constants/featureAppColors";

const LocationPicker = () => {
  //func
  const handleGetLocation = () => {};
  const handlePickMap = () => {};
  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlineButton icon={"location"} onPress={handleGetLocation}>
          Locate User
        </OutlineButton>
        <OutlineButton icon={"map"} onPress={handlePickMap}>
          Pick On Map
        </OutlineButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
