import { View, StyleSheet, Text } from "react-native";
import { RootScreen } from "../Styles/RootScreen";
import { ProjectInput } from "./ProjectInput";
import { Spacing } from "../Styles/Spacing";
import { Colors } from "../Styles/Colors";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { TitleBtn } from "../Styles/Btn/TitleBtn";
import { SecondaryBtn } from "../Styles/Btn/SecondaryBtn";

export const ProjectForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
  //Generic way of handling different inputs
  const [inputValues, SetInputValues] = useState({
    task: "",
    description: "",
    priority: "",
    date: "",
    issueData: ""
  });

  const submitProjectHandler = () => {
    const projectData = {
      task: inputValues.task,
      description: inputValues.description,
      priority: inputValues.priority,
      date: new Date(inputValues.date),
      amount: 1
    }
    onSubmit(projectData);
  };

  const [selected, setSelected] = useState("");
  const issueData = [
    { key: "1", value: "Fix Bugs" },
    { key: "2", value: "Build Feature" },
    { key: "3", value: "Other" },
  ];

  //inputIdentifier = task, description, priority, date. Target and dynamicaly set property names.
  const InputChangedHandler = (inputIdentifier, enteredValue) => {
    SetInputValues((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: enteredValue };
    });
  };

  return (
    <View style={styles.container}>
      <ProjectInput
        labelText={"Task"}
        textInputConfig={{
          value: inputValues.task,
          onChangeText: InputChangedHandler.bind(this, "task"),
        }}
      />

      <ProjectInput
        labelText={"Description"}
        textInputConfig={{
          multiline: true,
          value: inputValues.description,
          onChangeText: InputChangedHandler.bind(this, "description"),
        }}
      />

      <ProjectInput
        labelText={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          value: inputValues.date,
          onChangeText: InputChangedHandler.bind(this, "date"),
        }}
      />
      <ProjectInput
        labelText={"Priority"}
        textInputConfig={{
          value: inputValues.priority,
          onChangeText: InputChangedHandler.bind(this, "priority"),
        }}
      />

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
      <View style={styles.btnsContainer}>
        <TitleBtn onPress={onCancel} title="Cancel" />
        <SecondaryBtn
          onPress={submitProjectHandler}
          title={submitButtonLabel}
        ></SecondaryBtn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.pinkOrangeGray,
    borderRadius: Spacing.medium,
    backgroundColor: "rgba(255, 225, 204, 0.3)",
    marginHorizontal: Spacing.medium,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
