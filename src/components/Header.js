import React from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors"; // Import COLORS

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Fixed Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: COLORS.primary, // Use primary color from COLORS
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey, // Use grey color from COLORS
  },
  headerText: {
    color: COLORS.white, // Use white color from COLORS
    fontSize: 18,
  },
});

export default Header;
