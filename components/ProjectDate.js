import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Colors } from "../Styles/Colors"
import { FontSizes } from "../Styles/FontSizes";
import { RootScreen } from "../Styles/RootScreen";

export const ProjectDate = () => {
    return (
      <View style={RootScreen.projectSumBox}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Due Dates:</Text>
          <View>
            <Text style={styles.Date}>20230125</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.orangeLighter,
    justifyContent: "center",
  },
  Date: {
    color: "white",
    fontSize: FontSizes.large,
  },
});