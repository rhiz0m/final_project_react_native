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
import { useEffect } from "react";
import { Button } from "react-native-paper";

/* Modal add project */

export const EditProjects = ({ route, navigation }) => {
  //Route prop is used to extract the id.

  //Checks if params is an undefined, if it undefined we add an Id.
  const editedProjectId = route.params?.projectId;

  //Converting to a boolean. True if editing , false otherwise.
  const isEditing = !!editedProjectId;

  //Ternary expression to set the title dynamicly.
  //To avoid flickering, wrap setOptions in useEffect or useLayouEffect.

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Projects" : "Add Project",
    });
  }, [navigation, isEditing]);

  const CloseHandler = () => {
    navigation.goBack();
  };
  const ConfirmHandler = () => {
    navigation.goBack();
  };
  const UpdateHandler = () => {
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
            <SecondaryBtn
              onPress={ConfirmHandler}
              title={isEditing ? "Update" : "Add"}
            ></SecondaryBtn>
            <TitleBtn onPress={CloseHandler} title="Close" />
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
