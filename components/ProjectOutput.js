import { View } from "react-native";
import { ProjectsList } from "../components/ProjectsList";
import { ProjectSummary } from "../components/ProjectSummary";
import { ProjectsContextProvider } from "../Context_prj/ProjectsContext";


export const ProjectOutput = ({ projects, projectsInfoBox }) => {
  //-- Output the projects TOTAL, the DATEs and a PROJECTS-list.
  return (
    <View>
      <ProjectSummary
        projects={projects}
        periodName={projectsInfoBox}
      />
      <ProjectsList projects={projects} />
    </View>
  );
};
