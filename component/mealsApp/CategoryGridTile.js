import { Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    // width: 500,
    backgroundColor: "red",
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
