import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { AuthenticatedStack } from "./screens/authentication/AuthenticatedStack";
import { LogIn } from "./screens/authentication/Login";
import { SignUp } from "./screens/authentication/SignUp";

const Stack = createNativeStackNavigator();

const AuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const AuthenticatedScreen = () => {
  return <AuthenticatedStack />;
};

const Navigation = () => {
  return (
  <NavigationContainer>
    <LogIn />
  </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar />
      <Navigation />
    </>
  );
}

/*
 //Parts of Project app
export default function App() {
  const projectParts = 0;

  switch (projectParts) {
    case 0:
      return LogIn();
    case 1:
      return SignUp();
    case 2:
      return HomeScreen();
    case 3:
      return Projects();
    case 4:
      return DueDate();
    case 5:
      return ProjectForm();
    case 6:
      return AddSubTask();
    case 7:
      return EditSubTasks();
    default:
      return App();
  }
}
*/
