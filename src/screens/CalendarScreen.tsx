import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";
import { Agenda } from "react-native-calendars";
import { Avatar, Card, FAB, Paragraph } from "react-native-paper";
import { theme } from "../theme/theme";

interface Props {}

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const CalendarScreen = (props: Props) => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -5; i < 5; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 10);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity>
        <Card style={{ margin: 8 }}>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Paragraph>{item.name}</Paragraph>
              <Avatar.Image
                size={40}
                style={{ backgroundColor: "grey" }}
                source={{
                  uri:
                    "https://www.ecosia.org/images?q=plante#id=8DBE4130ACA3A224C46D8CE5811649A941BC7302",
                }}
              ></Avatar.Image>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <AppLayout>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2021-08-16"}
        renderItem={renderItem}
        minDate={"2021-08-10"}
        maxDate={"2021-12-30"}
        theme={{
          agendaDayTextColor: theme.colors.primary900,
          agendaDayNumColor: theme.colors.primary900,
          agendaTodayColor: theme.colors.secondary900,
        }}
      />
    </AppLayout>
  );
};

export default CalendarScreen;
