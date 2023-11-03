// SVGs
import Planing from '@assets/images/planning.svg';
import PlaningFill from '@assets/images/planningfill.svg';
import Edit from '@assets/images/edit.svg';
import EditFill from '@assets/images/editfill.svg';
import Note from '@assets/images/note.svg';
import NoteFill from '@assets/images/notefill.svg';
import Gear from '@assets/images/settings.svg';
import GearFill from '@assets/images/settingsfill.svg';
import More from '@assets/images/more.svg';
import MoreFill from '@assets/images/morefill.svg';
import Calender from '@assets/images/calender.svg';
import Attendance from '@assets/images/attendance.svg';
import General from '@assets/images/general.svg';
import Mike from '@assets/images/annoucements.svg';
import Messages from '@assets/images/messages.svg';
import List from '@assets/images/entry.svg';
import User from '@assets/images/user.svg';

//Screens
import Home from '@screens/Home';
import Documentaion from '@screens/Documentaion';
import HouseKeeping from '@screens/HouseKeeping';
import SettingsScreen from '@screens/SettingsScreen';
import MoreScreen from '@screens/MoreScreen';

export const screens = [
  {
    name: 'home',
    component: Home,
    icon1: <PlaningFill />,
    icon2: <Planing />,
    label: 'Planiing',
  },
  {
    name: 'documentation',
    component: Documentaion,
    icon1: <EditFill />,
    icon2: <Edit />,
    label: 'Documentation',
  },
  {
    name: 'housekeeping',
    component: HouseKeeping,
    icon1: <NoteFill />,
    icon2: <Note />,
    label: 'Housekeeping',
  },
  {
    name: 'settings',
    component: SettingsScreen,
    icon1: <GearFill />,
    icon2: <Gear />,
    label: 'Settings',
  },
  {
    name: 'more',
    component: MoreScreen,
    icon1: <MoreFill />,
    icon2: <More />,
    label: 'More',
  },
];

export const cards = [
  {id: 1, label: 'Calendar', icon: <Calender />, color: '#FBEBEE'},
  {id: 2, label: 'Attendance', icon: <Attendance />, color: '#EAEBFD'},
  {id: 3, label: 'General Insights', icon: <General />, color: '#E7F3C3'},
  {id: 4, label: 'Announcements', icon: <Mike />, color: '#FEE1D1'},
  {id: 5, label: 'Messages', icon: <Messages />, color: '#F1E2F7'},
  {id: 6, label: 'Entry/Dispersal', icon: <List />, color: '#FFEBB9'},
];

export const students = [
  {id: 1, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 2, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 3, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 4, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 5, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 6, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 7, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 8, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 9, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 10, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 11, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
  {id: 12, name: 'Aabhyuday', desc: 'Jhunjhunwala', icon: <User />},
];
