import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSizes } from "../../Styles/FontSizes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ProjectInput } from "../../components/ProjectInput";
import { TitleBtn } from "../../Styles/Btn/TitleBtn";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

import { RootScreen } from "../../Styles/RootScreen";
import { PrimaryBtn } from "../../Styles/Btn/PrimaryBtn";
import { Colors } from "../../Styles/Colors";
import { Spacing } from "../../Styles/Spacing";

export const LogIn = () => {
  return (
    <SafeAreaView style={RootScreen.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/office.jpg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.9 }}
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
              labelText={"Password"}
              textInputConfig={{ ...styles.inputWrapper, color: "black" }}
            />
            <View
              style={{ ...styles.btnsContainer, marginLeft: Spacing.xsmall }}
            >
              <PrimaryBtn onPress={""} title={"Login"} />
            </View>
            <TouchableOpacity style={styles.subBox}>
              <Text
                style={{
                  ...styles.title,
                  fontSize: FontSizes.medium,
                  letterSpacing: Spacing.small,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{`♦CapyPlanner♦`} </Text>
          </View>
          <View>
            <Text style={{ ...styles.text, marginTop: Spacing.small }}>
              Created by: Andreas Antonsson. STI, 2023
            </Text>
          </View>
          <View>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/reactNative.png")}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../../assets/pictures/Capy_.png")}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logInBox: {
    marginTop: 220,
    marginBottom: Spacing.medium,
    paddingTop: Spacing.medium,
    borderWidth: 1,
    borderColor: Colors.pinkOrangeGray,
    borderRadius: Spacing.medium,
    backgroundColor: "rgba(255, 225, 204, 0.3)",
  },
  inputWrapper: {
    marginTop: Spacing.medium,
    width: 280,
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
    marginTop: 30,
    marginRight: 320,
    width: 50,
    height: 50,
  },
  titleBox: {
    marginBottom: Spacing.small,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    marginTop: -Spacing.small,
    justifyContent: "center",
    width: 350,
    height: 200,
  },
});
