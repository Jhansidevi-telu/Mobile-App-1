import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Make sure this is correct
import HomeScreen from "../../screens/HomeScreen";
import CustomTabs from "../../components/CustomTabs";
import Header from "../../components/Header";
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName="Feed"
        tabBar={(props) => <CustomTabs {...props} />} // Custom Tab Bar
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Feed") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Notifications") {
              iconName = focused ? "bell" : "bell-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "account" : "account-outline";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={HomeScreen}
          options={{
            tabBarLabel: "Updates",
            tabBarBadge: 3,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default Tabs;
