import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSizes } from "../Styles/FontSizes";
import { Spacing } from "../Styles/Spacing";
import { DateFormatted } from "../utils/DateFormatted";
import { useNavigation } from "@react-navigation/native";
import { IconEditBtn } from "../Styles/Btn/IconBtn";
import { Colors } from "../Styles/Colors";

export const ProjectItems = ({
  id,
  task,
  description,
  priority,
  date,
  amount,
}) => {
  //Object Destructuring in parameter

  const navigation = useNavigation();

  const projectPressHandler = () => {
    navigation.navigate("Edit Projects", { projectId: id });
  };

  return (
    <Pressable style={styles.listOutputContainer} onPress={projectPressHandler}>
      <View>
        <Text style={styles.title}>{`◄♦ ${task} ♦►`}</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.subTitle}>► Description:</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.subTitle}>► priority:</Text>
          <Text style={styles.text}>{priority}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.subTitle}>► Date:</Text>
          <Text style={styles.text}>{DateFormatted(date)}</Text>
        </View>
      </View>
    </Pressable>
  );
};
// <IconEditBtn />
const styles = StyleSheet.create({
  listOutputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: Spacing.small,
    margin: Spacing.medium,
    borderWidth: 3,
    borderRadius: Spacing.medium,
    elevation: 4,
    shadowColor: "#554135",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 3,
    shadowRadius: 5,
  },
  title: {
    backgroundColor: "black",
    marginTop: -Spacing.medium,
    marginBottom: Spacing.xsmall,
    color: Colors.blueLightAlpha,
    padding: Spacing.small,
    fontSize: FontSizes.medium,
    maxWidth: 240,
    fontWeight: "bold",
    textAlign: "center",
  },
  textWrapper: {
    marginTop: 8,
    flexDirection: "row",
    maxWidth: 260,
  },
  subTitle: {
    fontWeight: "bold",
    marginRight: Spacing.small,
    marginVertical: Spacing.xsmall,
    width: 100,
  },
  text: {
    textAlign: "left",
    fontStyle: "italic",
  },
  btn: {
    marginTop: -Spacing.large,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: Colors.blueDarker,
    padding: Spacing.small,
    width: 50,
  },
});

/*
  <View>
    <Text>{amount}</Text>
  </View>;
  */
