import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '@theme/layout';
import P from '@assets/images/p.svg';
import A from '@assets/images/a.svg';
import E from '@assets/images/e.svg';
import L from '@assets/images/l.svg';
import PFill from '@assets/images/pfill.svg';
import AFill from '@assets/images/afill.svg';
import EFill from '@assets/images/efill.svg';
import LFill from '@assets/images/lfill.svg';
import Pencil from '@assets/images/pencil.svg';
import Doc from '@assets/images/doc.svg';
import ImageButton from '@components/ImageButton';
import {colors} from '@theme/colors';

export default function StudentCard({
  icon,
  title,
  description,
  onPressP,
  onPressA,
  onPressE,
  onPressL,
  onPressDoc,
  onEdit,
  attendance,
}) {
  return (
    <View style={styles.container}>
      {icon}
      <View style={{marginLeft: wp(3)}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      {attendance ? (
        <View style={[styles.sideContainer, {width: wp(30)}]}>
          <ImageButton icon={<P />} onPress={onPressP} />
          <ImageButton icon={<Pencil />} onPress={onEdit} />
          <ImageButton icon={<Doc total={120} />} onPress={onPressDoc} />
        </View>
      ) : (
        <View style={styles.sideContainer}>
          <ImageButton icon={<P />} onPress={onPressP} />
          <ImageButton icon={<A />} onPress={onPressA} />
          <ImageButton icon={<E />} onPress={onPressE} />
          <ImageButton icon={<L />} onPress={onPressL} />
          <ImageButton icon={<Doc total={120} />} onPress={onPressDoc} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  titleText: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: hp(2),
    color: colors.black2,
  },
  desc: {
    color: colors.black3,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: hp(1.5),
  },
  sideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 0,
    position: 'absolute',
    width: wp(50),
  },
});
