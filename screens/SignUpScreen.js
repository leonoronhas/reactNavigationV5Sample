import React from "react";
import { Text, View, Button } from "react-native";
import { AuthContext } from "../context";

const SignUpScreen = ({ navigation }) => {

    const { signUp} = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SignUpScreen</Text>
      <Button title="Sign Up" onPress={() => signUp()}/>
    </View>
  );
};

export default SignUpScreen;
