import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { PrimaryBtn } from "../../Styles/Btn/PrimaryBtn";
import { RootScreen } from "../../Styles/RootScreen";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Spacing } from "../../Styles/Spacing";
import { FontSizes } from "../../Styles/FontSizes";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../Styles/Colors"; 
import { ProjectInput } from "../../components/ProjectInput";

export const SignUp = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/backgrounds/bgSignUp.jpeg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.8 }}
        style={[RootScreen.bgImage, styles.container]}
      >
        <LinearGradient
          colors={[Colors.orangelightAlpha, "transparent"]}
          style={[RootScreen.bgImage, RootScreen.container]}
        >
          <View style={[RootScreen.wrapper, styles.logInBox]}>
            <ProjectInput
              labelText={"Email"}
              textInputConfig={styles.inputWrapper}
            />
            <ProjectInput
              labelText={"Confirm Email"}
              textInputConfig={{ ...styles.inputWrapper, color: "black" }}
            />
            <ProjectInput
              labelText={"Email"}
              textInputConfig={styles.inputWrapper}
            />
            <ProjectInput
              labelText={"Confirm Password"}
              textInputConfig={{ ...styles.inputWrapper, color: "black" }}
            />
            <View
              style={{ ...styles.btnsContainer, marginLeft: Spacing.xsmall }}
            >
              <PrimaryBtn onPress={""} title={"Sign Up"} />
            </View>
            <TouchableOpacity style={styles.subBox}>
              <Text
                style={{
                  ...styles.title,
                  fontSize: FontSizes.medium,
                  letterSpacing: Spacing.small,
                }}
              >
                Back to Login
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logInBox: {
 
    marginBottom: Spacing.medium,
    paddingTop: Spacing.medium,
    borderWidth: 1,
    borderColor: Colors.pinkOrangeGray,
    borderRadius: Spacing.medium,
    backgroundColor: "rgba(255, 225, 204, 0.3)",
  },
  inputWrapper: {
    marginTop: Spacing.medium,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  subBox: {
    marginTop: Spacing.medium,
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.blackAlpha,
    borderRadius: Spacing.medium,
    alignItems: "center",
  },
  title: {
    fontSize: FontSizes.large,
    textAlign: "center",
    color: Colors.orangeLighter,
    letterSpacing: Spacing.medium,
    marginLeft: Spacing.small,
  },
  iconImage: {
    backgroundColor: Colors.orangeLighter,
    borderRadius: Spacing.large,
    width: 40,
    height: 40,
  },
  titleBox: {
    marginBottom: Spacing.small,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
