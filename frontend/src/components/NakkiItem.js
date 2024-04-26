import { View, Text } from "react-native";

const NakkiItem = ({ item }) => {
  return (
    <View>
      <Text>Nakki: {item.task}</Text>
      <Text>Tila: {item.status}</Text>
    </View>
  );
};

export default NakkiItem;
