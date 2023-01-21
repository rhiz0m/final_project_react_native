import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RootScreen } from "../Styles/RootScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../Styles/Colors";
import { Spacing } from "../Styles/Spacing";
import { TitleBtn } from "../Styles/Btn/TitleBtn";
import { useLayoutEffect } from "react";
import { SecondaryBtn } from "../Styles/Btn/SecondaryBtn";
import { useContext } from "react";
import { ProjectsContext } from "../Context_prj/ProjectsContext";
import { DateFormatted } from "../utils/DateFormatted";

/* Modal add project */

export const EditProjects = ({ route, navigation }) => {
  //Route prop is used to extract the id.

  const projectsCtx = useContext(ProjectsContext);

  //Checks if params is an undefined, if it undefined we add an Id.
  const editedProjectId = route.params?.projectId;

  //Converting to a boolean. True if editing , false otherwise.
  const isEditing = !!editedProjectId;

  //Ternary expression to set the title dynamicly.
  //To avoid flickering, wrap setOptions in useEffect or useLayouEffect.

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Update Project" : "Add Projects",
    });
  }, [navigation, isEditing]);

  const DeleteProjectHandler = () => {
    //Passing the Id to be deleted
    projectsCtx.deleteProject(editedProjectId);
    navigation.goBack();
  };
  const CancelProjectHandler = () => {
    navigation.goBack();
  };
  const ConfirmProjectHandler = () => {
    if (isEditing) {
      projectsCtx.updateProject(editedProjectId, {
        task: "testing UPDATE Project",
        description: "testing with Dummy data",
        priority: "high",
        date: new Date("2022-05-20"),
        amount: 1,
      });
    } else {
      projectsCtx.addProject({
        task: "testing ADD Project",
        description: "testing with Dummy data",
        priority: "high",
        date: new Date("2022-05-20"),
        amount: 1,
      });
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <LinearGradient colors={[Colors.orangeLight, "transparent"]}>
        <ImageBackground
          source={require("../assets/backgrounds/bgSpacewoman6.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.5 }}
          style={RootScreen.bgImage}
        >
          <View>
            <TitleBtn onPress={CancelProjectHandler} title="Cancel" />
            <SecondaryBtn
              onPress={ConfirmProjectHandler}
              title={isEditing ? "Update Project" : "Add Project"}
            ></SecondaryBtn>
            <TitleBtn onPress={DeleteProjectHandler} title="Delete" />
          </View>
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
