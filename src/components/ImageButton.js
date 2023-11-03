import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function ImageButton({icon, onPress}) {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
}

const styles = StyleSheet.create({});
