import { View, Text } from "react-native";

import AppStyles from "./AppStyles";

const NakkiItem = ({ item }) => {
  return (
    <View style={AppStyles.nakkiItem}>
      <Text style={AppStyles.nakkiItemText}>{item.task}</Text>
      <Text>{item.status}</Text>
    </View>
  );
};

export default NakkiItem;
