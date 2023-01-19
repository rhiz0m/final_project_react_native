import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { RootScreen } from "../Styles/RootScreen";
import { TopBar } from "../components/TopBar";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../Styles/Colors";
import { ProjectOutput } from "../components/ProjectOutput";

export const HomeScreen = () => {

  return (
    <SafeAreaView>
      <LinearGradient colors={[Colors.orangeLight, "transparent"]}>
        <ImageBackground
          source={require("../assets/backgrounds/bgDune.jpeg")}
          resizeMode="cover"
          imageStyle={{ opacity: 0.2 }}
          style={RootScreen.bgImage}
        >
          <View>
            <TopBar />
            <View>
              <ProjectOutput projectsInfoBox={"▼ Projects ▼"} />
            </View>
            <StatusBar style="auto" />
          </View>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});