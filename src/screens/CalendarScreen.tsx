import React, { useState } from "react";
import { View, Text } from "react-native";
import AppLayout from "../components/AppLayout";
import { Agenda } from "react-native-calendars";

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
  return (
    <AppLayout>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2017-05-16"}
      />
    </AppLayout>
  );
};

export default CalendarScreen;
