import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ iconname, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      styles={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={iconname} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
