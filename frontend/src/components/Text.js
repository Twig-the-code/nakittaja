import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  darkTheme: {
    color: theme.colors.textSecondary,
  },
  lightTheme: {
    color: theme.colors.textPrimary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
});

const Text = ({ theme, fontSize, ...props }) => {
  const textStyles = [
    styles.text,
    theme === "dark" && styles.darkTheme,
    theme === "light" && styles.lightTheme,
    fontSize === "subheading" && styles.fontSizeSubheading,
  ];

  return <NativeText style={textStyles} {...props} />;
};

export default Text;
