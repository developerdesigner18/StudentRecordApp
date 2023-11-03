import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '@theme/layout';
import Down from '@assets/images/downarrow.svg';
import Notification from '@assets/images/notification.svg';
import { colors } from '@theme/colors';

export default function UserCard({icon, title, description}) {
  return (
    <View style={styles.container}>
      {icon}
      <View style={{marginLeft: wp(3)}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.desc}>
          {description}
          <TouchableOpacity>
            <Down />
          </TouchableOpacity>
        </Text>
      </View>
      <TouchableOpacity style={{right: 0, position: 'absolute'}}>
        <Notification />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
    marginHorizontal: wp(2),
  },
  titleText: {
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: hp(2.5),
    color: colors.black1,
  },
  desc: {
    color: colors.primary,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: hp(2),
  },
});
