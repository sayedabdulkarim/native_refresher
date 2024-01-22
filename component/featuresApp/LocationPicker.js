import { Alert, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import OutlineButton from "./OutlineButton";
import { Colors } from "../../constants/featureAppColors";

const LocationPicker = () => {
  //misc
  //for ios/ android location permission
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  //func
  const verifyPermission = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission;

      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Insufficient Permission.");
      return false;
    }
    return true;
  };
  const handleGetLocation = async () => {
    const hasPermission = await verifyPermission();
    console.log({ hasPermission });
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    console.log({ location });
  };
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
