import { StyleSheet, Text, View } from "react-native";

const List = ({ items }) => {
  return (
    <>
      {items?.map((item) => (
        <View style={styles.listItem} key={item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6,
  },
});
