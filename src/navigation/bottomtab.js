import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '@theme/layout';
import {screens} from '@theme/data';
import {colors} from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function Bottomtab() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.white,
            marginHorizontal: wp(5),
            height: hp(9),
            borderRadius: 50,
          },
        }}>
        {screens.map((i, index) => (
          <Tab.Screen
            key={index}
            name={i.name}
            component={i.component}
            options={{
              tabBarIcon: ({focused}) => (focused ? i.icon1 : i.icon2),
              tabBarLabel: ({focused}) => (
                <Text
                  numberOfLines={1}
                  style={{
                    color: focused ? colors.primary : colors.grey,
                    fontSize: hp(1.2),
                    marginBottom: hp(1.5),
                  }}>
                  {i.label}
                </Text>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
}
