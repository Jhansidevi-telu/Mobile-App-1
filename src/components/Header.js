import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import COLORS from "../constants/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>10 Minutes</Text>
        
        <View style={styles.addressContainer}>
          <Text style={styles.homeText}>Home</Text>
          <Icon name="chevron-down" size={16} color={COLORS.white} style={styles.chevronIcon} />
        </View>
        
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon
            name="cart-outline"
            size={24}
            color={COLORS.white}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="person-outline"
            size={24}
            color={COLORS.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 20,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerSubText: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: "400",
    flexWrap: "nowrap",
    overflow: "hidden",
  },
  homeText: {
    fontWeight: "600",
    fontSize: 14,
    color: COLORS.white,
  },
  chevronIcon: {
    marginLeft: 5,
    marginTop: 3,  
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    marginLeft: 20,
  },
});

export default Header;
