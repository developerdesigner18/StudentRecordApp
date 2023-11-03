import React from 'react';
import {FlatList} from 'react-native';
import Container from '@components/Container';
import AttendanceCard from '@components/AttendanceCard';
import User from '@assets/images/user.svg';
import UserCard from '@components/UserCard';
import {cards} from '@theme/data';

export default function Home({navigation}) {
  return (
    <Container bgColor="#FFFFFF">
      <UserCard
        icon={<User />}
        title={'Ratul Sarkar'}
        description={'Arth Hours - Dhara'}
      />
      <FlatList
        data={cards}
        keyExtractor={i => i.id}
        numColumns={2}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item, index}) => (
          <AttendanceCard
            label={item.label}
            icon={item.icon}
            color={item.color}
            onClick={() => index == 1 && navigation.navigate('attendance')}
          />
        )}
      />
    </Container>
  );
}
