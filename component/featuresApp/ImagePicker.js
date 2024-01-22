import { Alert, Button, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

const ImagePicker = () => {
  //misc
  //for ios camera permission
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  //func

  const verifyPermission = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission;

      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Insufficient Permission.");
      return false;
    }
    return true;
  };

  const handleImage = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log({ image });
  };

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={() => handleImage()} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
