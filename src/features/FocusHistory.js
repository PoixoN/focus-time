import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) 
    return <Text style={styles.item}>You haven't focused on anything yet!</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTo: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
