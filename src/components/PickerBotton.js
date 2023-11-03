import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Popover from 'react-native-popover-view';
import moment from 'moment';
import Down from '@assets/images/downarrow.svg';
import Downw from '@assets/images/downwhite.svg';
import Next from '@assets/images/next.svg';
import Previous from '@assets/images/previous.svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '@theme/layout';
import {colors} from '@theme/colors';

export default function PickerBotton({title, label}) {
  const [selected, setSelected] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [isVisible, setVisible] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text style={styles.desc}>{label}</Text>
          <TouchableOpacity>
            <Down />
          </TouchableOpacity>
        </View>

        <View style={styles.pickContainer}>
          <TouchableOpacity>
            <Previous />
          </TouchableOpacity>
          <Popover
            isVisible={isVisible}
            popoverStyle={{width: wp(85), marginTop: hp(1)}}
            arrowSize={{width: 0, height: 0}}
            from={
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.dateBtn}>
                <Text style={styles.dateText}>
                  {moment(selected).format('ddd, MMM DD')}
                </Text>
              </TouchableOpacity>
            }>
            <View
              style={{
                backgroundColor: colors.primary,
                paddingVertical: hp(2),
                paddingHorizontal: wp(4),
              }}>
              <Text
                style={{
                  color: colors.white,
                  marginBottom: hp(3),
                  fontSize: hp(1.5),
                }}>
                SELECT DATE
              </Text>
              <Text style={{color: colors.white, fontSize: hp(2.5)}}>
                {moment(selected).format('ddd, MMM DD')}
              </Text>
            </View>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              markedDates={{
                [selected]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: colors.primary,
                },
              }}
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setVisible(false)}>
                <Text style={styles.btnTxt}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setVisible(false)}>
                <Text style={styles.btnTxt}>OK</Text>
              </TouchableOpacity>
            </View>
          </Popover>

          <TouchableOpacity>
            <Next />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Downw />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingVertical: hp(2),
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  title: {
    color: colors.white,
  },
  desc: {
    color: colors.black,
    fontFamily: 'SourceSansPro-Semibold',
    fontSize: hp(2.2),
  },
  pickContainer: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
    borderRadius: 8,
    width: wp(35),
    height: hp(4),
    paddingHorizontal: wp(3),
  },
  dateBtn: {
    borderLeftWidth: 1,
    borderLeftColor: colors.white,
    borderRightWidth: 1,
    borderRightColor: colors.white,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    paddingHorizontal: wp(2),
    fontSize: hp(1.5),
    color: colors.white,
  },
  btn: {
    paddingHorizontal: wp(5),
  },
  btnTxt: {
    color: colors.primary,
  },
  btnContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingVertical: hp(2),
  },
});
