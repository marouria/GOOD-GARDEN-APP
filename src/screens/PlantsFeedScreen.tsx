import React, { Component, useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import AppLayout from '../components/AppLayout';
import PlantCard from '../components/PlantCard';
import { usePlants } from '../hooks/usePlants';
import Spinner from 'react-native-loading-spinner-overlay';
import { Searchbar, Title } from 'react-native-paper';

const PlantsFeedScreen = (props) => {
  const { isLoading, isError, data } = usePlants();

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  if (isLoading) {
    return (
      <Spinner
        visible={true}
        textContent={'Loading...'}
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
        style={{ marginBottom: 20 }}
      />
      <SafeAreaView>
        <Title>Mes plantes</Title>
        {data.results
          .filter((plant) => plant.name.includes(searchQuery))
          .map((filteredPlant, index) => {
            return <PlantCard key={index} plant={filteredPlant}></PlantCard>;
          })}
      </SafeAreaView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default PlantsFeedScreen;
