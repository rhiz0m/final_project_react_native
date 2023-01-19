import { View } from "react-native";
import { ProjectsList } from "../components/ProjectsList";
import { ProjectSummary } from "../components/ProjectSummary";

const DummyProjects = [
  {
    id: "a1",
    task: "Learn React Native",
    description: "Context, Api, Async, other, other, other...",
    priority: "High",
    date: new Date("2023-02-05"),
    amount: 1,
  },
  {
    id: "b2",
    task: "Learn Guitar",
    description: "FingerStyle, Blues, Classic",
    priority: "Medium",
    date: new Date("2023-03-09"),
    amount: 1,
  },
  {
    id: "c3",
    task: "3D Modelling with Blender",
    description: "3D Texturing, Remesh, Rigging",
    priority: "Medium",
    date: new Date("2023-05-22"),
    amount: 1,
  },
  {
    id: "d4",
    task: "PR Deadlift",
    description: "Practice technique, train hard",
    priority: "high",
    date: new Date("2023-08-17"),
    amount: 1,
  },
  {
    id: "c5",
    task: "3D Modelling with Blender",
    description: "3D Texturing, Remesh, Rigging",
    priority: "Medium",
    date: new Date("2023-05-22"),
    amount: 1,
  },
  {
    id: "d6",
    task: "PR Deadlift",
    description: "Practice technique, train hard",
    priority: "high",
    date: new Date("2023-08-17"),
    amount: 1,
  },
];

export const ProjectOutput = ({ projectsList, projectsInfoBox }) => {
  //-- Output the projects TOTAL, the DATEs and a PROJECTS-list.
  //--
  return (
    <View>
      <ProjectSummary
        projectsList={DummyProjects}
        periodName={projectsInfoBox}
      />
      <ProjectsList projectsList={DummyProjects} />
    </View>
  );
};
