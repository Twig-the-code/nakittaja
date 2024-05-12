import { View, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgSecondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

const NakkiItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text theme="dark">{item.task}</Text>
      <Text>{item.status}</Text>
    </View>
  );
};

export default NakkiItem;
