import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Back from '@assets/images/back.svg';
import Search from '@assets/images/search.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@theme/layout';
import ImageButton from '@components/ImageButton';
import {colors} from '@theme/colors';

export default function TopHeader({title, onBack, onSearch}) {
  return (
    <View style={styles.container}>
      <ImageButton icon={<Back />} onPress={onBack} />
      <Text style={styles.title}>{title}</Text>
      <ImageButton icon={<Search />} onPress={onSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(2),
  },
  title: {
    fontFamily: 'SourceSansPro-Semibold',
    color: colors.black1,
    fontSize: hp(2.5),
  },
});
