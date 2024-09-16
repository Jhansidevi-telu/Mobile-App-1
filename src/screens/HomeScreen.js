import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryHeaders}>Bestsellers</Text>
        <View style={styles.categoryRow}>
          <View style={styles.categoryBox}>
            <View style={styles.imageGrid}>
              <View style={styles.categoryRow}>
                <Image
                  source={require("../assets/1.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/2.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.categoryRow, { marginTop: 5 }]}>
                <Image
                  source={require("../assets/3.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/4.jpg")}
                  style={styles.image}
                />
              </View>
            </View>
            <Text style={styles.categoryName}>Fresh Vegetables</Text>
          </View>
          <View style={styles.categoryBox}>
            <View style={styles.imageGrid}>
              <View style={styles.categoryRow}>
                <Image
                  source={require("../assets/1.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/2.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.categoryRow, { marginTop: 5 }]}>
                <Image
                  source={require("../assets/3.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/4.jpg")}
                  style={styles.image}
                />
              </View>
            </View>
            <Text style={styles.categoryName}>Fresh Fruits</Text>
          </View>
          <View style={styles.categoryBox}>
            <View style={styles.imageGrid}>
              <View style={styles.categoryRow}>
                <Image
                  source={require("../assets/1.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/2.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.categoryRow, { marginTop: 5 }]}>
                <Image
                  source={require("../assets/3.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/4.jpg")}
                  style={styles.image}
                />
              </View>
            </View>
            <Text style={styles.categoryName}>Milk</Text>
          </View>
        </View>
        <View style={styles.categoryRow}>
          <View style={styles.categoryBox}>
            <View style={styles.imageGrid}>
              <View style={styles.categoryRow}>
                <Image
                  source={require("../assets/1.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/2.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.categoryRow, { marginTop: 5 }]}>
                <Image
                  source={require("../assets/3.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/4.jpg")}
                  style={styles.image}
                />
              </View>
            </View>
            <Text style={styles.categoryName}>Curd & Yogurt</Text>
          </View>
          <View style={styles.categoryBox}>
            <View style={styles.imageGrid}>
              <View style={styles.categoryRow}>
                <Image
                  source={require("../assets/1.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/2.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.categoryRow, { marginTop: 5 }]}>
                <Image
                  source={require("../assets/3.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/4.jpg")}
                  style={styles.image}
                />
              </View>
            </View>
            <Text style={styles.categoryName}>Chips & Crisps</Text>
          </View>
          <View style={styles.categoryBox}>
            <View style={styles.imageGrid}>
              <View style={styles.categoryRow}>
                <Image
                  source={require("../assets/1.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/2.jpg")}
                  style={styles.image}
                />
              </View>
              <View style={[styles.categoryRow, { marginTop: 5 }]}>
                <Image
                  source={require("../assets/3.jpg")}
                  style={styles.image}
                />
                <Image
                  source={require("../assets/4.jpg")}
                  style={styles.image}
                />
              </View>
            </View>
            <Text style={styles.categoryName}>Soft Drinks</Text>
          </View>
        </View>
      </View>
      <View style={styles.categoryContainer}>
      <Text style={styles.categoryHeaders}>Grocery</Text>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: { paddingHorizontal: 12},
  categoryHeaders: {
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryBox: {
    backgroundColor: COLORS.lightgray,
    height: 130,
    width: 115,
    marginVertical: 5,
    borderRadius: 5,
  },
  imageGrid: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  image: {
    height: 45,
    width: 50,
    borderRadius: 10,
  },
  categoryName: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
});
