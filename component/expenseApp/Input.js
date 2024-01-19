import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, textInputConfig }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 24,
    // paddingBottom: 0,
    // backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    // color: "white",
    // fontSize: 16,
    // textAlign: "center",
    // marginTop: 32,
  },
});
