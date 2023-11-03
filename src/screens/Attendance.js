import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Container from '@components/Container';
import TopHeader from '@components/TopHeader';
import PickerBotton from '@components/PickerBotton';
import StudentCard from '@components/StudentCard';
import MarkHeader from '@components/MarkHeader';
import {students} from '@theme/data';
import {colors} from '@theme/colors';

export default function Attendance({navigation}) {
  const [attendance, setAttendance] = useState('');
  return (
    <Container bgColor={colors.white}>
      <TopHeader title={'Attendance'} onBack={() => navigation.pop()} />
      <PickerBotton title={'Daily Attendance'} label={'Arth Hours - Dhara'} />
      <MarkHeader total={students.length}/>
      <FlatList
        data={students}
        keyExtractor={i => i.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <StudentCard
            icon={item.icon}
            title={item.name}
            description={item.desc}
            onPressP={() => setAttendance('P')}
            onPressA={() => setAttendance('A')}
            onPressE={() => setAttendance('E')}
            onPressL={() => setAttendance('L')}
            attendance={attendance}
          />
        )}
      />
    </Container>
  );
}
