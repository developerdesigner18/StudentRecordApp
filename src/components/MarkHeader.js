import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Check from '@assets/images/check.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '@theme/layout';
import {colors} from '@theme/colors';

export default function MarkHeader({total, onMark}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(3),
      }}>
      <Text style={styles.titleText}>All Students({total})</Text>
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={onMark}>
        <Text style={styles.label}>Mark all present</Text>
        <Check />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: hp(2.5),
    color: colors.black,
  },
  label: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: hp(2),
    color: colors.primary,
  },
});
