import { Button, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

const ImagePicker = () => {
  //func
  const handleImage = async () => {
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