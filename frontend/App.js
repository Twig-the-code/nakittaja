import { View, StyleSheet } from "react-native";

import Main from "./src/screens/Main";
import theme from "./src/theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bgPrimary,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export default App;
