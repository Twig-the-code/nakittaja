import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";

import NakkiList from "../components/NakkiList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 10,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <NakkiList />
    </View>
  );
};

export default Main;
