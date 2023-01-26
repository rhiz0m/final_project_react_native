import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

/* Screens */

import { HomeScreen } from "./screens/HomeScreen";
import { DueDate } from "./screens/DueDate";
import { ProjectForm } from "./components/ProjectsForm";
import { EditProjects } from "./screens/EditProjects";
import { Priority } from "./screens/Priority";

import { LogIn } from "./screens/authentication/Login";
import { SignUp } from "./screens/authentication/SignUp";

/* Components */

import { TopBar } from "./components/TopBar";
import { AddProject } from "./components/AddProject";
import { View } from "react-native";
import { SafeAreaView, Image } from "react-native-safe-area-context";
import { Projects } from "./screens/EditProjects";
import { Subtasks } from "./screens/DueDate";
import { Colors } from "./Styles/Colors";
import { HeaderBtn } from "./Styles/Btn/HeaderBtn";
import { RootScreen } from "./Styles/RootScreen";
import { ProjectsContext } from "./Context_prj/ProjectsContext";
import { ProjectsContextProvider } from "./Context_prj/ProjectsContext";

//Navigation: stack and bottom tabs
/*
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProjectsOverview = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Colors.orangeLighter },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: Colors.orangeLighter,
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveBackgroundColor: Colors.blueMediumAlhpa,
        tabBarInactiveBackgroundColor: "black",
        tabBarLabelStyle: { fontSize: 12 },
        headerRight: () => (
          <HeaderBtn
            title="+"
            style={RootScreen.wrapper}
            onPress={() => {
              navigation.navigate("Edit Projects");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home Screen",
          tabBarLabel: "Home Screen",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="earth" size={24} color={"white"} />
          ),
        }}
      />
      <Tab.Screen
        name="Due Date"
        component={DueDate}
        options={{
          title: "Due Date",
          tabBarLabel: "Due Date",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="project" size={24} color={"white"} />
          ),
        }}
      />
      <Tab.Screen
        name="Priority"
        component={Priority}
        options={{
          title: "Priority",
          tabBarLabel: "Priority",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="priority-high"
              size={24}
              color={"white"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ProjectsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.orangeLighter },
            }}
          >
            <Stack.Screen
              name="Project Overview"
              component={ProjectsOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Edit Projects"
              component={EditProjects}
              //options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProjectsContextProvider>
    </>
  );
}

*/
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
