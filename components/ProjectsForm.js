import { View, StyleSheet, Image, Alert, ImageBackground } from "react-native";
import { ProjectInput } from "./ProjectInput";
import { Spacing } from "../Styles/Spacing";
import { useState } from "react";
import { TitleBtn } from "../Styles/Btn/TitleBtn";
import { PrimaryBtn } from "../Styles/Btn/PrimaryBtn";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const ProjectForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  //Generic way of handling different inputs
  const [inputValues, SetInputValues] = useState({
    task: defaultValues ? defaultValues.task : "",
    description: defaultValues ? defaultValues.description : "",
    priority: defaultValues ? defaultValues.priority.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
  });

  const submitProjectHandler = () => {
    const projectData = {
      task: inputValues.task,
      description: inputValues.description,
      priority: inputValues.priority,
      date: new Date(inputValues.date),
      amount: 1,
    };

    //Textinput Validation

    const checkIfValidTask = projectData.task.trim().length > 0;
    const checkIfValidDescription = projectData.description.trim().length > 0;
    const checkIfValidDate = projectData.date.toString() !== "Invalid Date";
    const checkIfValidPrior = !isNaN(projectData.priority) && projectData.priority > 0 && projectData.priority < 6;

    if (
      !checkIfValidTask || !checkIfValidDescription || !checkIfValidPrior || !checkIfValidDate
    ) {
      //Show user invalid feedback
      Alert.alert("Invalid input, check your input values again!");
      return;
    }
    onSubmit(projectData);
  };

  //inputIdentifier = task, description, priority, date. Target and dynamicaly set property names.
  const InputChangedHandler = (inputIdentifier, enteredValue) => {
    SetInputValues((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: enteredValue };
    });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/backgrounds/bgMinimalism.jpeg")}
      resizeMode="cover"
      borderRadius={Spacing.large}
      borderWidth={2}
      borderColor={"white"}
    >
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
      <View style={styles.btnsContainer}>
        <ProjectInput
          labelText={"Priority"}
          textInputConfig={{
            placeholder: "Range: 1 to 5",
            placeholderTextColor: "black",
            value: inputValues.priority,
            onChangeText: InputChangedHandler.bind(this, "priority"),
          }}
        />
        <ProjectInput
          labelText={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "black",
            maxLength: 10,
            value: inputValues.date,
            onChangeText: InputChangedHandler.bind(this, "date"),
          }}
        />
      </View>
      <View style={{ ...styles.btnsContainer, marginLeft: Spacing.xsmall }}>
        <PrimaryBtn onPress={submitProjectHandler} title={submitButtonLabel} />
        <TitleBtn onPress={onCancel} title="Cancel" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderRadius: Spacing.large,
    backgroundColor: "rgba(255, 225, 204, 0.6)",
    marginHorizontal: Spacing.medium,
    paddingVertical: Spacing.medium,
  },
  btnsContainer: {
    marginVertical: Spacing.xsmall,
    marginHorizontal: Spacing.medium,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnRows: {
    minWidth: 200,
  },
});
