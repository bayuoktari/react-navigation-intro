import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetail } from "../store/actions";
import Constants from "expo-constants";

export default function DetailPost(props) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailPost);

  useEffect(() => {
    dispatch(fetchDetail(props.route.params.id));
  });

  return (
    <View style={styles.container}>
      {!detail.title ? (
        <Text>Loading....</Text>
      ) : (
        <>
          <Text style={styles.titlePost}>{detail.title}</Text>
          <Text style={styles.bodyPost}>{detail.body}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  titlePost: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 10,
  },
  bodyPost: {
    textAlign: "justify",
    fontSize: 15,
  },
});
