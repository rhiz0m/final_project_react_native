import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Modal,
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
import { RoundedBtn } from "../Styles/Btn/HeaderBtn";

export const AddProject = (props) => {
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

  const issueData = [
    { key: "1", value: "Fix Bugs" },
    { key: "2", value: "Build Feature" },
    { key: "3", value: "Other" },
  ];

  const [multiSelected, setMultiSelected] = useState([]);

  const teamMembers = [
    { key: 4, value: "Patrick" },
    { key: 5, value: "Michael" },
    { key: 6, value: "Linda" },
    { key: 7, value: "Karro" },
    { key: 8, value: "Hampus" },
  ];

  return (
    <Modal visible={props.showModal} animationType="slide" transparent={true}>
      <View style={{ ...RootScreen.container, marginBottom: 90 }}>
        <LinearGradient
          colors={[Colors.orangeLight, "black"]}
          style={{
            ...RootScreen.wrapper,
            borderColor: "black",
            borderWidth: 4,
          }}
        >
          <ImageBackground
            source={require("../assets/backgrounds/bgMinimalism.jpeg")}
            resizeMode="stretch"
            imageStyle={{ opacity: 0.3 }}
            style={RootScreen.wrapper}
          >
            <View style={RootScreen.wrapper}>
              <Text style={styles.titles}>Project name</Text>
              <TextInput
                style={{
                  ...RootScreen.inputStyle,
                  marginBottom: Spacing.xsmall,
                }}
                placeholder=""
                onChangeText={ProjectInput}
                value={enteredText}
                editable
              />
              <Text style={styles.titles}>Project description</Text>
              <TextInput
                style={{
                  ...RootScreen.inputStyle,
                  marginBottom: Spacing.xsmall,
                  height: 60,
                }}
                multiline
                maxLength={280}
                placeholder=""
                onChangeText={""}
              />
              <Text style={styles.titles}>Add Team</Text>
              <MultipleSelectList
                boxStyles={{
                  borderRadius: 0,
                  backgroundColor: Colors.cyanLight,
                  marginTop: Spacing.small,
                  width: 220,
                }}
                dropdownStyles={{
                  maxHeight: 120,
                  backgroundColor: Colors.cyanLight,
                }}
                placeholder="Assign members"
                setSelected={(value) => setMultiSelected(value)}
                data={teamMembers}
                save="value"
              />
              <Text style={styles.titles}>Category</Text>
              <SelectList
                boxStyles={{
                  borderRadius: 0,
                  backgroundColor: Colors.cyanLight,
                  marginTop: Spacing.small,
                  width: 220,
                }}
                placeholder="Select task"
                setSelected={(value) => setSelected(value)}
                data={issueData}
                save="value"
                dropdownStyles={{
                  maxHeight: 120,
                  backgroundColor: Colors.cyanLight,
                }}
              />
              <View style={[RootScreen.wrapper, styles.btnContainer]}>
                <PrimaryBtn title="Submit" onPress={addProject} />
                <RoundedBtn title="X" onPress={props.onClose} />
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    maxHeight: 100,
    width: "90%",
  },
  btnContainer: {
    margin: Spacing.medium,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  titles: {
    alignItems: "center",
    justifyContent: "center",
    margin: Spacing.small,
    fontSize: FontSizes.medium,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.orangeLighter,
  },
});
