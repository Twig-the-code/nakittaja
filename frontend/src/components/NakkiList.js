import { View, FlatList, StyleSheet } from "react-native";

const nakit = [
  {
    id: "kukkuu",
    name: "Kukkuu",
  },
];

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const NakkiList = () => {
  return (
    <FlatList
      data={nakit}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NakkiList;
