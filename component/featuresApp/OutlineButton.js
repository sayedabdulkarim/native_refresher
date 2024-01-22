import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/featureAppColors";

const OutlineButton = ({ onPress, icon, children }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Ionicons
        name={icon}
        size={18}
        color={Colors.primary500}
        style={({ pressed }) => [styles.icon, pressed && styles.pressed]}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
    marginLeft: 5,
  },
});
