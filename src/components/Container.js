import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {colors} from '@theme/colors';
import {widthPercentageToDP as wp} from '@theme/layout';

export default function Container({children, bgColor, style}) {
  return (
    <SafeAreaView style={[style, styles.container, {backgroundColor: bgColor}]}>
      <StatusBar backgroundColor={colors.white} />
      <View style={{padding: wp(5)}}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
