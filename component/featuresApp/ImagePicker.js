import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/featureAppColors";
import OutlineButton from "./OutlineButton";

const ImagePicker = () => {
  //misc
  //for ios camera permission
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  //state
  const [pickedImage, setPickedImage] = useState("");

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

    setPickedImage(image);
    console.log({ image }, " called");
  };

  let imagePreview = <Text>No Image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = (
      <Image
        style={styles.image}
        source={{
          uri: pickedImage.assets[0].uri,
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton onPress={handleImage} icon={"camera"}>
        Take Image{" "}
      </OutlineButton>
      {/* <Button title="Take Image" onPress={() => handleImage()} /> */}
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
