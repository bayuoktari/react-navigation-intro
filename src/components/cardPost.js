import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardPost({ data }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("DetailPost", { id: data.id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.postTitle}>{data.title}</Text>
      <Text style={styles.postBody}>{data.body}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#777777",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  postTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  postBody: {
    fontSize: 10,
    color: "#5b5656",
  },
});
