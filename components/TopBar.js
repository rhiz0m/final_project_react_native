
import { Image, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { RootScreen } from "../Styles/RootScreen";
import { Colors } from "../Styles/Colors";
import { PrimaryBtn } from "../Styles/Btn/PrimaryBtn";
import { Spacing } from "../Styles/Spacing";
import { useNavigation } from "@react-navigation/native"; 

export const TopBar = () => {

  return (
    <View style={styles.menuWrapper}>
      <ImageBackground
        source={require("../assets/backgrounds/bgMinimalism.jpeg")}
        style={{ ...RootScreen.bgImage, height: 80 }}
      >
        <View style={styles.logoutBtn}>
          <PrimaryBtn style={styles.menuLinks} title="Log out" size={128} />
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              source={require("../assets/pictures/CapyFace.png")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  menuWrapper: {
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 6,
    backgroundColor: Colors.cyanDark,
  },
  logoutBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Spacing.medium,
    marginVertical: Spacing.medium,
  },
  img: {
    marginTop: 0,
    width: 120,
    height: 80,
    
  },
  imageContainer: {
    paddingHorizontal: Spacing.small,
    paddingVertical: Spacing.xsmall,
    backgroundColor: "white",
    borderRadius: Spacing.small,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 4,
  }
});