import React from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@theme/layout';
import { colors } from '@theme/colors';

export default function AttendanceCard({label, icon, color, onClick}) {
  return (
    <Pressable
      onPress={onClick}
      style={[styles.container, {backgroundColor: color}]}>
      {icon}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(42),
    margin: wp(2),
    height: hp(20),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.black1,
    fontSize: hp(2),
    marginTop: hp(2),
    fontFamily: 'SourceSansPro-Semibold',
  },
});
