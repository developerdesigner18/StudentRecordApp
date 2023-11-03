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
  const [allAttendance, setAllAttendance] = useState(false);
  const [editId, setEditId] = useState('');
  const [updatedStudents, setUpdatedStudents] = useState(students);

  const updateAttendance = (studentId, newAttendance) => {
    const updatedList = updatedStudents.map(student => {
      if (student.id === studentId) {
        return {...student, attendance: newAttendance};
      }
      return student;
    });

    setUpdatedStudents(updatedList);
  };

  return (
    <Container bgColor={colors.white}>
      <TopHeader title={'Attendance'} onBack={() => navigation.pop()} />
      <PickerBotton
        title={'Daily Attendance'}
        label={'Arth Hours - Dhara'}
        onAttendancePress={() => setAllAttendance(true)}
      />
      <MarkHeader total={students.length} />
      <FlatList
        data={updatedStudents}
        keyExtractor={i => i.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <StudentCard
            icon={item.icon}
            title={item.name}
            description={item.desc}
            aicon={item.attendance}
            attendance={allAttendance}
            studentId={item.id == editId}
            onEdit={() => setEditId(item.id)}
            onPressP={() => updateAttendance(item.id, 'P')}
            onPressA={() => updateAttendance(item.id, 'A')}
            onPressE={() => updateAttendance(item.id, 'E')}
            onPressL={() => updateAttendance(item.id, 'L')}
          />
        )}
      />
    </Container>
  );
}
