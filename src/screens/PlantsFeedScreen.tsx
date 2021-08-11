import React, { Component } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";
import PlantCard from "../components/PlantCard";
import { usePlants } from "../hooks/usePlants";
import Spinner from "react-native-loading-spinner-overlay";
import { Searchbar, Title } from "react-native-paper";
import PlantSearchBar from "../components/PlantSearchBar";

const PlantsFeedScreen = () => {
  const { isLoading, isError, data } = usePlants();

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
      <PlantSearchBar></PlantSearchBar>
      <SafeAreaView>
        {data.results.map((plant) => {
          return <PlantCard plant={plant}></PlantCard>;
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
