import React from "react";
import { Text, View } from "react-native";

const DetailsScreen = ({ route }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>DetailsScreen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </View>
);

export default DetailsScreen;
