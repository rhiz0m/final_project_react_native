import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

const switchAuthModeHandler = () => {
  if (isLogin) {
    navigation.replace("LogIn");
  } else {
    navigation.replace("SignUp");
  }
};
