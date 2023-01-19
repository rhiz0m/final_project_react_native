import { FlatList, StyleSheet } from "react-native";
import { ProjectItems } from "./ProjectItems";

//<Text style={styles.text}>{`Key: ${itemData.item.id}, Description: ${itemData.item.description}`}</Text>;

const renderProjectItems = (itemData) => {
  //Spreading all item properties into projectItems.
  //Check that ProjectItems props are the same as projectOutput object data for {..itemData.item} to work.
  return <ProjectItems {...itemData.item} />;
};
export const ProjectsList = ({ projectsList }) => {
  //Flatlist containing an array of Objects. It has data, renderItem and keyExtractor props.
  return (
    <FlatList
      data={projectsList}
      renderItem={renderProjectItems}
      keyExtractor={(item) => item.id}
      
    />
  );
};

const styles = StyleSheet.create({});
