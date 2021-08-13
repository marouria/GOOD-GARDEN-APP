import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppLayout from "../components/AppLayout";
import { Agenda } from "react-native-calendars";
import { Avatar, Card, Paragraph } from "react-native-paper";
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
      for (let i = -15; i < 85; i++) {
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
    }, 1000);
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
              <Avatar.Image size={40} source=""></Avatar.Image>
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
        selected={"2017-05-16"}
        renderItem={renderItem}
      />
    </AppLayout>
  );
};

export default CalendarScreen;
