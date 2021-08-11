import React from "react";
import { Searchbar } from "react-native-paper";

interface Props {}

const PlantSearchBar = (props: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search a plant"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default PlantSearchBar;
