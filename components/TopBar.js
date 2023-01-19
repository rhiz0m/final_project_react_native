
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
        style={{ ...RootScreen.bgImage, height: 85 }}
      >
        <View style={styles.menuLinks}>
          <View style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => {}}
            >
              <Image
                style={styles.iconImage}
                source={require("../assets/icons/orbital.png")}
              />
            </TouchableOpacity>
          </View>
          <PrimaryBtn style={styles.menuLinks} title="Log out" size={125} />
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
  menuLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Spacing.medium,
    marginVertical: Spacing.medium,
    alignItems: "center"
  },
  iconImage: {
    width: 40,
    height: 40,
    
  },
  imageContainer: {
    padding: Spacing.xsmall,
    backgroundColor: "white",
    borderRadius: Spacing.small
  }
});