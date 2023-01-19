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
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../Styles/Colors"; 

export const SignUp = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/backgrounds/bgMinimalism.jpeg")}
        resizeMode="cover"
        style={RootScreen.bgImage}
      >
        <View style={RootScreen.container}>
          <LinearGradient
            colors={[Colors.orangelightAlpha, "transparent"]}
            style={[RootScreen.wrapper, styles.logInBox]}
          >
            <View>
              <Text style={RootScreen.title}>Sign Up</Text>
              <View style={RootScreen.wrapper}>
                <TextInput
                  style={RootScreen.inputStyle}
                  placeholder="First name"
                  placeholderTextColor={Colors.cyanDarker}
                  onChangeText={""}
                />
                <TextInput
                  style={RootScreen.inputStyle}
                  placeholder="Last name"
                  placeholderTextColor={Colors.cyanDarker}
                  onChangeText={""}
                />

                <TextInput
                  style={RootScreen.inputStyle}
                  placeholder="Email"
                  placeholderTextColor={Colors.cyanDarker}
                  onChangeText={""}
                />
                <TextInput
                  style={RootScreen.inputStyle}
                  placeholder="Confirm Email"
                  placeholderTextColor={Colors.cyanDarker}
                  onChangeText={""}
                />
                <TextInput
                  style={RootScreen.inputStyle}
                  placeholder="Password"
                  placeholderTextColor={Colors.cyanDarker}
                  onChangeText={""}
                />
                <TextInput
                  style={RootScreen.inputStyle}
                  placeholder="Confirm password"
                  placeholderTextColor={Colors.cyanDarker}
                  onChangeText={""}
                />
                <View style={RootScreen.wrapper}>
                  <PrimaryBtn
                    title="Submit"
                    style={{ marginBottom: Spacing.xxl }}
                  />
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={RootScreen.paragraph}>Back to LogIn</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logInBox: {
    borderWidth: 1,
    borderColor: Colors.pinkOrangeGray,
    borderRadius: 10,
  },
  text: {
    color: "white",
    marginVertical: Spacing.medium,
  },
});
