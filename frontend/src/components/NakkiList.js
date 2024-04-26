import { FlatList, StyleSheet } from "react-native";

import ItemSeparator from "./ItemSeparator";
import NakkiItem from "./NakkiItem";

const nakit = [
  {
    id: "kukku",
    task: "Kukku",
    status: 1,
  },
  {
    id: "luuruu",
    task: "Luuruu",
    status: 0,
  },
];

const NakkiList = () => {
  return (
    <FlatList
      data={nakit}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={NakkiItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NakkiList;
