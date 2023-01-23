import { View, Text, TextInput, StyleSheet } from "react-native";
import { Spacing } from "../Styles/Spacing";
import { Colors } from "../Styles/Colors";
import { FontSizes } from "../Styles/FontSizes";
import { RootScreen } from "../Styles/RootScreen";

export const ProjectInput = ({ labelText, textInputConfig }) => {
  //TextInputConfig. Spreading and merging all textInputConfig into one object
  
  const inputStyle = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titles}>{labelText}</Text>
      <View>
        <TextInput style={inputStyle} {...textInputConfig} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    margin: Spacing.medium,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  input: {
    borderRadius: Spacing.medium,
    backgroundColor: Colors.orangeLighter,
    height: 40,
    marginHorizontal: Spacing.medium,
    marginVertical: Spacing.small,
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
  inputMultiline: {
    height: 100,
  },
});
