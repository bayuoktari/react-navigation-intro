import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fetchPost } from "../store/actions";
import Constants from "expo-constants";
import CardPost from "../components/cardPost";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserScreen from "../screens/User";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/DetailPost";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TodoScreen() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.listPost);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Post List</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <CardPost data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

function StackPost() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListPost" component={TodoScreen} />
      <Stack.Screen name="DetailPost" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackPost}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    flex: 1,
  },
  screenTitle: {
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 18,
  },
});
