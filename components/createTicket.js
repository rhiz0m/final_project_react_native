import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { RootScreen } from "../Styles/rootScreen";

export const CreateTickets = () => {
  return (
    <View style={RootScreen.container}>
      <Text>This is the Tickets component</Text>
      <Text>Title</Text>
      <TextInput
        style={RootScreen.inputStyle}
        placeholder="Ticket description"
        onChangeText={""}
      />
      <Text>Assign</Text>
      <Text>Picker</Text>
      <Text>Time estimate</Text>
      <Text>Type</Text>
      <TextInput
        style={RootScreen.inputStyle}
        placeholder="Time estimate"
        onChangeText={""}
      />
      <Text>Picker</Text>
      <Text>Priority</Text>
      <Text>Picker</Text>
      <Text>Status</Text>
      <Text>Picker</Text>
      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
