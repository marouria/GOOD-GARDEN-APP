import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";
import PlantCard from "../components/PlantCard";
import { usePlants } from "../hooks/usePlants";
import Spinner from "react-native-loading-spinner-overlay";
import { Searchbar, Title } from "react-native-paper";

const PlantsFeedScreen = () => {
  const { isLoading, isError, data } = usePlants();

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  if (isLoading) {
    return (
      <Spinner
        visible={true}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
    );
  }

  if (isError) {
    return <Text>Error...</Text>;
  }

  return (
    <AppLayout>
      <Searchbar
        placeholder="Search a plant"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <SafeAreaView>
        {data.results
          .filter((plant) => plant.name.includes(searchQuery))
          .map((filteredPlant) => {
            return <PlantCard plant={filteredPlant}></PlantCard>;
          })}
      </SafeAreaView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export default PlantsFeedScreen;
function setFilteredDataSource(filteredData: any) {
  throw new Error("Function not implemented.");
}
