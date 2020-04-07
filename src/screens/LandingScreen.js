import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LandingScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Halaman Post");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.landingTitle}>Wellcome to My App</Text>
      <TouchableOpacity style={styles.btnSee} onPress={handlePress}>
        <Text style={{ color: "#fff" }}>GET INSIDE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a4c5c6",
    justifyContent: "center",
    alignItems: "center",
  },
  landingTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    paddingBottom: 16,
  },
  btnSee: {
    backgroundColor: "#005082",
    padding: 16,
    borderRadius: 20,
    elevation: 10,
  },
});
