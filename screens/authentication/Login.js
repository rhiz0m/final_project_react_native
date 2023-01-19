import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSizes } from "../../Styles/FontSizes";
import { SignUp } from "./SignUp";

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
import { PrimaryBtn } from "../../Styles/Btn/PrimaryBtn"
import { Colors } from "../../Styles/Colors";
import { Spacing } from "../../Styles/Spacing";

export const LogIn = () => {
 
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/backgrounds/bgSpacewomanSm.jpeg")}
        resizeMode="cover"
        imageStyle={{ opacity: 0.9 }}
        style={[RootScreen.bgImage, styles.container]}
      >
        <LinearGradient
          colors={[Colors.orangelightAlpha, "transparent"]}
          style={[RootScreen.bgImage, RootScreen.container]}
        >
          <View style={styles.titleBox}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/orbital.png")}
            />
            <Text style={styles.titleText}>RBITAL-Prj</Text>
          </View>
          <View style={[RootScreen.wrapper, styles.logInBox]}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={RootScreen.inputStyle}
                placeholder="Email"
                placeholderTextColor={Colors.cyanDarker}
                onChangeText={""}
              />
              <TextInput
                style={RootScreen.inputStyle}
                placeholder="Password"
                placeholderTextColor={Colors.cyanDarker}
                onChangeText={""}
              />
            </View>
            <View style={RootScreen.wrapper}>
              <PrimaryBtn title="LogIn" onPress={""} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View style={styles.subBox}>
                <TouchableOpacity>
                  <Text style={RootScreen.paragraph}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ ...styles.text, marginTop: 30 }}>
              Created by: Andreas Antonsson. STI, 2023.
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  logInBox: {
    borderWidth: 1,
    borderColor: Colors.pinkOrangeGray,
    borderRadius: Spacing.medium,
    backgroundColor: "rgba(255, 225, 204, 0.3)",
  },
  inputWrapper: {
    marginTop: Spacing.medium,
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  subBox: {
    marginTop: Spacing.medium,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.blackAlpha,
    borderRadius: Spacing.medium,
  },
  iconImage: {
    backgroundColor: Colors.orangeLighter,
    borderRadius: Spacing.large,
    width: 40,
    height: 40,
  },
  titleBox: {
    marginTop: 450,
    marginRight: 150,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: FontSizes.large,
    textAlign: "center",
    color: Colors.orangeLighter,
    letterSpacing: Spacing.small,
    marginLeft: Spacing.small,
  },
  text: {
    color: "white",
    marginVertical: Spacing.medium,
  },
});
