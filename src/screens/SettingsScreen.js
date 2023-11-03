import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from '@components/Container';
import {colors} from '@theme/colors';

export default function SettingsScreen() {
  return (
    <Container bgColor={colors.white}>
      <Text>Settings</Text>
    </Container>
  );
}

const styles = StyleSheet.create({});
