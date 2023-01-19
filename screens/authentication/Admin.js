import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { RootScreen } from "../../Styles/rootScreen";

export const Admin = () => {
  return (
    <View style={RootScreen.container}>
      <Text>This is the Admin component</Text>
      <StatusBar style="auto" />
    </View>
  );
};
