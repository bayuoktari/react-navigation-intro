import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { fetchUser } from "../store/actions";

export default function UserScreen() {
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.listUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>User List</Text>
      <FlatList
        data={listUser}
        renderItem={({ item }) => (
          <View style={styles.nameWrapper}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
  },
  screenTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
    paddingBottom: 18,
  },
  nameText: {
    fontSize: 20,
  },
  nameWrapper: {
    padding: 4,
    borderWidth: 1,
    borderColor: "#00f",
    marginVertical: 5,
  },
});
