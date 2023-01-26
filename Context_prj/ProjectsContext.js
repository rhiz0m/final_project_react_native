import { createContext, useReducer } from "react";

const DummyProjects = [
  {
    id: "a1",
    task: "Learn React Native",
    description: "Context, Api, Async, other, other, other...",
    priority: "3",
    date: new Date("2023-02-05"),
    amount: 1,
  },
  {
    id: "c3",
    task: "3D Modelling with Blender",
    description: "3D Texturing, Remesh, Rigging",
    priority: "4",
    date: new Date("1980-05-22"),
    amount: 1,
  },
];

export const ProjectsContext = createContext({
  //Creating an initial value for Context.
  //Projects array with functions to update the array.

  projects: [],
  addProject: ({ task, description, priority, date, amount }) => {},
  deleteProject: (id) => {},
  updateProject: (id, { task, description, priority, date, amount }) => {},
});
//Creating a random id
const ProjectsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.prjData, id: id }, ...state];
    case "UPDATE":
      const updateProjectIndex = state.findIndex(
        (projects) => projects.id === action.prjData.id
      );
      const updatableProjects = state[updateProjectIndex];
      const updatedItem = { ...updatableProjects, ...action.prjData.data };
      const updatedProjects = [...state];
      updatedProjects[updateProjectIndex] = updatedItem;
      return updatedProjects;
    case "DELETE":
      return state.filter((projects) => projects.id !== action.prjData);

    default:
      return state;
    //default: Return the existing state without changes
  }
};

export const ProjectsContextProvider = ({ children }) => {
  //State managment logic.UseReducer connects to function projectsReduser.
  //Dispatch : a new action to ProjectsReducer which can then manipulate the state.

  const [projectState, dispatch] = useReducer(ProjectsReducer, DummyProjects);

  const addProject = (projectData) => {
    //Checks for actions in projectsReducer.
    dispatch({ type: "ADD", prjData: projectData });
  };

  const deleteProject = (id) => {
    dispatch({ type: "DELETE", prjData: id });
  };

  const updateProject = (id, projectData) => {
    dispatch({ type: "UPDATE", prjData: { id: id, data: projectData } });
  };

  const value = {
    projects: projectState,
    addProject: addProject,
    deleteProject: deleteProject,
    updateProject: updateProject,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};
