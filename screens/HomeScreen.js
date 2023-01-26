import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import { RootScreen } from "../Styles/RootScreen";
import { TopBar } from "../components/TopBar";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../Styles/Colors";
import { ProjectOutput } from "../components/ProjectOutput";
import { useContext } from "react";
import { ProjectsContext } from "../Context_prj/ProjectsContext";

export const HomeScreen = () => {
  //Uses and importing Context for Projects

  const projectsCtx = useContext(ProjectsContext);

  return (
    <SafeAreaView>
      <LinearGradient colors={[Colors.orangeLight, "transparent"]}>
        <ImageBackground
          source={require("../assets/backgrounds/bgComputer.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.2 }}
          style={RootScreen.bgImage}
        >
          <View>
            <TopBar />
            <View>
              <ProjectOutput
                fallbackText={"You have no Projects yet!"}
                projects={projectsCtx.projects}
                prjSumBox={"▼ Projects ▼"}
              />
            </View>
            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
