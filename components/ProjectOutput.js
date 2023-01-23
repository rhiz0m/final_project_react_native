import { View, Text, StyleSheet } from "react-native";
import { ProjectsList } from "../components/ProjectsList";
import { ProjectSummary } from "../components/ProjectSummary";
import { FontSizes } from "../Styles/FontSizes";
import { Spacing } from "../Styles/Spacing";
import { Colors } from "../Styles/Colors";

export const ProjectOutput = ({ projects, projectsInfoBox, fallbackText }) => {
  //-- Output the projects TOTAL, the DATEs and a PROJECTS-list.

  let message = (
    <View style={styles.container}>
      <Text style={styles.message}>{fallbackText}</Text>
    </View>
  );

  if (projects.length > 0) {
    message = <ProjectsList projects={projects} />;
  }

  return (
    <View>
      <ProjectSummary projects={projects} periodName={projectsInfoBox} />
      <View>{message}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.medium,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Colors.blueMediumAlhpa,
    borderColor: "black",
    borderWidth: "2",
  },
  message: {
    textAlign: "center",
    fontSize: FontSizes.large,
    padding: Spacing.small,
    color: "white",
  },
});
