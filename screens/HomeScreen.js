import React from "react";
import { Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>HomeScreen</Text>
    <Button title="Details" onPress={() => navigation.push('Details', {name: "React Native Details Screen"})}/>
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()}/>
  </View>
);

export default HomeScreen;
