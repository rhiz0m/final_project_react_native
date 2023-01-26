import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
import { RootScreen } from "../Styles/RootScreen";
import { TopBar } from "../components/TopBar";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../Styles/Colors";
import { Spacing } from "../Styles/Spacing";
import { ProjectOutput } from "../components/ProjectOutput";
import { useContext } from "react";
import { ProjectsContext } from "../Context_prj/ProjectsContext";
import { TwoWeeksAgo } from "../utils/DateFormatted";

/* Modal add project */

export const DueDate = () => {
  const projectsCtx = useContext(ProjectsContext);

  const projectsDate = projectsCtx.projects.filter((project) => {
    const today = new Date();
    const twoWeeksAgo = TwoWeeksAgo(today, 14);
    return project.date > twoWeeksAgo;
  });

  return (
    <SafeAreaView>
      <LinearGradient colors={[Colors.orangeLight, "transparent"]}>
        <ImageBackground
          source={require("../assets/backgrounds/bgPlanning.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.2 }}
          style={RootScreen.bgImage}
        >
          <View style={RootScreen.listOutputContainer}>
            <TopBar />
            <ProjectOutput projects={projectsDate} prjSumBox={"▼ Date ▼"} />
          </View>
          <StatusBar style="auto" />
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
  projectBox: {
    marginVertical: Spacing.large,
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.xxl,
    borderWidth: 2,
    borderColor: Colors.orangeLighter,
    color: "white",
    backgroundColor: "rgba(255, 225, 204, 0.3)",
  },
});
