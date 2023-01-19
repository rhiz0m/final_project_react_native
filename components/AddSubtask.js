import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Button,
  Text,
  TextInput,
} from "react-native";
import { Spacing } from "../Styles/Spacing";
import { RootScreen } from "../Styles/RootScreen";
import { Colors } from "../Styles/Colors";
import { FontSizes } from "../Styles/FontSizes";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";
import { PrimaryBtn } from "../Styles/Btn/PrimaryBtn";

export const AddSubTask = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const ProjectInput = (textInput) => {
    setEnteredText(textInput);
  };

  const addProject = () => {
    props.onAddProjects(enteredText);
    setEnteredText("");
  };

  const [selected, setSelected] = useState("");

  /* Selectlist/Multiselectlist data for issues and team members  */

 

  return (
    //<Modal visible={props.showModal} animationType="slide" transparent={true}>
      <View style={RootScreen.container}>
        <LinearGradient
          colors={[Colors.cyanDark, Colors.cyanLight]}
          style={{
            ...RootScreen.wrapper,
            borderColor: "black",
            borderWidth: 2,
          }}
        >
          <ImageBackground
            source={require("../assets/backgrounds/bgMinimalism.jpeg")}
            resizeMode="stretch"
            imageStyle={{ opacity: 0.2 }}
            style={RootScreen.wrapper}
          >
            <View style={RootScreen.wrapper}>
              <Text style={{ ...RootScreen.title, fontSize: FontSizes.medium }}>
                Project name
              </Text>
              <TextInput
                style={RootScreen.inputStyle}
                placeholder=""
                onChangeText={ProjectInput}
                value={enteredText}
              />
              <Text style={{ ...RootScreen.title, fontSize: FontSizes.medium }}>
                Project description
              </Text>
              <TextInput
                style={{ ...RootScreen.inputStyle, height: 60 }}
                multiline
                maxLength={280}
                placeholder=""
                onChangeText={""}
              />
              <Text
                style={{
                  ...RootScreen.title,
                  color: Colors.cyanDarker,
                  fontSize: FontSizes.medium,
                }}
              >
                Add Team
              </Text>
              <MultipleSelectList
                boxStyles={{
                  borderRadius: 0,
                  backgroundColor: Colors.cyanLight,
                  width: 220,
                }}
                dropdownStyles={{
                  maxHeight: 120,
                  backgroundColor: Colors.cyanLight,
                }}
                placeholder="Assign members"
                setSelected={(value) => setMultiSelected(value)}
                data={''}
                save="value"
              />
              <Text
                style={{
                  ...RootScreen.title,
                  color: Colors.cyanDarker,
                  fontSize: FontSizes.medium,
                }}
              >
                Category
              </Text>
              <SelectList
                boxStyles={{
                  borderRadius: 0,
                  backgroundColor: Colors.cyanLight,
                  width: 220,
                }}
                placeholder="Select task"
                setSelected={(value) => setSelected(value)}
                data={''}
                save="value"
                dropdownStyles={{
                  maxHeight: 120,
                  backgroundColor: Colors.cyanLight,
                }}
              />
              <View style={{ ...RootScreen.wrapper, margin: Spacing.medium }}>
                <PrimaryBtn title="Submit" onPress={addProject} />
                <Button title="Close"  />
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
   // </Modal>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    maxHeight: 100,
    width: "90%",
  },
});
