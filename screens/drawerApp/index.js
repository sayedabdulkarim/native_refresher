import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import UserScreen from "./UserScreen";

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    //botomNvaigation

    // sideDrawer
    <NavigationContainer>
      {/* <Drawer.Navigator */}
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3c0a6b",
          },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a6b",
          //   drawerActiveBackgroundColor: "#f0e1ff",
        }}
      >
        {/* <Drawer.Screen */}
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={
            {
              //sideDrawer
              // drawerLabel: "Welcome Screen",
              // drawerIcon: ({ color, size }) => (
              //   <Ionicons name="home" color={color} size={size} />
              // ),
              //bottomTabs
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }
            //bootom
          }
        />
        {/* <Drawer.Screen */}
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            //side
            // drawerIcon: ({ color, size }) => (
            //   <Ionicons name="person" color={color} size={size} />
            // ),
            //bottom
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        {/* </Drawer.Navigator> */}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
