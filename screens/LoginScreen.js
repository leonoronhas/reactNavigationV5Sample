import React from "react";
import { Text, View, Button } from "react-native";
import {AuthContext} from '../context';

const LoginScreen = ({ navigation }) => {

const {signIn} = React.useContext(AuthContext);

return (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>LoginScreen</Text>
    <Button title="Login" onPress={() => signIn()}/>
    <Button title="Sign Up" onPress={() => navigation.push('SignUp')}/>
  </View>);
};

export default LoginScreen;
