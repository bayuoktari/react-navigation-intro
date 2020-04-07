import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { store } from "./src/store/reducer";
import LandingScreen from "./src/screens/LandingScreen";
import PostScreen from "./src/screens/Posts";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Halaman Post"
            component={PostScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
