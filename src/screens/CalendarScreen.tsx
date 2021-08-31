import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Agenda, AgendaItemsMap } from 'react-native-calendars';
import { Avatar, Card, Colors, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FabButton from '../components/FabButton';
import { theme } from '../theme/theme';

const CalendarScreen = () => {
  const [items, setItems] = useState({
    '2021-08-18': [{ name: 'item 1 - any js object' }],
    '2021-08-23': [{ name: 'item 2 - any js object', height: 80 }],
    '2021-08-24': [],
    '2021-08-25': [
      { name: 'item 3 - any js object' },
      { name: 'any js object' },
    ],
  });

  const renderItem = (item) => {
    return (
      <TouchableOpacity>
        <Card style={{ margin: 8 }}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Paragraph>{item.name}</Paragraph>
              <Avatar.Image
                size={36}
                style={{ backgroundColor: Colors.grey300 }}
                source={{
                  uri:
                    'https://www.ecosia.org/images?q=plante#id=8DBE4130ACA3A224C46D8CE5811649A941BC7302',
                }}
              />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Agenda
        renderEmptyDate={() => {
          return <View />;
        }}
        renderItem={renderItem}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        //  markingType,
        //  markedDates
        // Agenda theme
        items={items}
        theme={{
          agendaDayTextColor: theme.colors.primary900,
          agendaDayNumColor: theme.colors.primary900,
          agendaTodayColor: theme.colors.secondary900,
        }}
      /> */}
      <FabButton />
    </SafeAreaView>
  );
};

export default CalendarScreen;
