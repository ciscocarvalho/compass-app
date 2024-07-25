import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Compass from "../tabs/Compass";
import Conection from "../tabs/Conection";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1f2124",
          borderColor: "#1f2124",
        },
        tabBarActiveTintColor: "cyan",
      }}
    >
      <Tab.Screen
        name="Compass"
        component={Compass}
        options={{
          tabBarIcon: ({ size }) => (
            <Feather name="battery" color={"purple"} size={size} />
          ),
          tabBarLabel: "Compass",
        }}
      />
      <Tab.Screen
        name="Conection"
        component={Conection}
        style={styles.container}
        options={{
          tabBarIcon: ({ size }) => (
            <Feather name="wifi" color={"purple"} size={size} />
          ),
          tabBarLabel: "Connection",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
  },
});
