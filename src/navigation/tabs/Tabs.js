import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; 
import HomeScreen from "../../screens/HomeScreen";
import CustomTabs from "../../components/CustomTabs";
import Header from "../../components/Header";
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <CustomTabs {...props} />} 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Categories") {
              iconName = focused ? "bell" : "bell-outline";
            } else if (route.name === "My Orders") {
              iconName = focused ? "gift-open" : "gift-open-outline";
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
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Categories"
          component={HomeScreen}
          options={{
            tabBarLabel: "Categories",
            tabBarBadge: 3,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="My Orders"
          component={HomeScreen}
          options={{
            tabBarLabel: "My Orders",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default Tabs;
