import React from "react";
import { Text, View, Button } from "react-native";

const ProfileScreen= ({ navigation }) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>ProfileScreen</Text>
    <Button title="Details" onPress={() => navigation.push('Details', {name: "React Native Profile Details Screen"})}/>
  </View>
);

export default ProfileScreen;
