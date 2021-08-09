import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import AppLayout from "../components/AppLayout";
import { Avatar, DataTable } from "react-native-paper";

interface Props {
  route: any;
}

const PlantDetailsScreen = (props: Props) => {
  const {
    name,
    description,
    sunshine_rate,
    watering,
    img_url,
    season,
    user_level,
    price_cents,
    currency_iso,
  } = props.route.params.plantId;

  return (
    <AppLayout>
      <View>
        <Text style={{ fontSize: 32, padding: 10 }}>{name}</Text>
        <Image
          source={{ uri: img_url }}
          style={{ width: "100%", height: 300 }}
        />
        <DataTable>
          <DataTable.Row style={styles.rowContainer}>
            <DataTable.Cell style={styles.cellContainer}>
              <Avatar.Icon
                icon="white-balance-sunny"
                color="orange"
                style={{ backgroundColor: "none" }}
              />
            </DataTable.Cell>
            <DataTable.Cell style={styles.cellContainer}>
              <Avatar.Icon
                icon="water"
                color="blue"
                style={{ backgroundColor: "none" }}
              />
            </DataTable.Cell>
            <DataTable.Cell style={styles.cellContainer}>
              <Avatar.Icon
                icon="seed-outline"
                color="green"
                style={{ backgroundColor: "none" }}
              />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.rowContainer}>
            <DataTable.Cell style={styles.cellContainer}>
              {sunshine_rate}
            </DataTable.Cell>
            <DataTable.Cell style={styles.cellContainer}>
              {watering}
            </DataTable.Cell>
            <DataTable.Cell style={styles.cellContainer}>
              {season}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <Text>{description}</Text>
      </View>
    </AppLayout>
  );
};
const styles = StyleSheet.create({
  cellContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rowContainer: {
    height: 50,
  },
});
export default PlantDetailsScreen;
