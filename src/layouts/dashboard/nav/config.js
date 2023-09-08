import SvgColor from '../../../components/svg-color';
import {AiOutlineHome} from 'react-icons/ai'
 import {AiOutlineWifi} from 'react-icons/ai'
 import {AiOutlineBulb} from 'react-icons/ai'
 import {CgToolbox} from 'react-icons/cg'
 import {FiSettings} from 'react-icons/fi' 
 import {AiOutlineInbox} from 'react-icons/ai'
 import {IoIosPerson} from 'react-icons/io'
 import {FaChalkboardTeacher} from 'react-icons/fa'

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/home',
    //icon:<AiOutlineHome/>
    // icon: icon('ic_analytics'),
  },
  {
    title: `Candidates`,
    path: '/dashboard/student-list',
   // icon:<IoIosPerson/>,
    // icon: icon('ic_analytics'),
  },
  {
    title: `Patients`,
    path: '/dashboard/teacher-list',
   // icon:<FaChalkboardTeacher/>,
    // icon: icon('ic_analytics'),
  },
  {
    title: 'Complaints',
    path: '/dashboard/complaint-list',
   // icon:<AiOutlineInbox/>
    
},
  {
    title: 'Treatments',
    path: '/dashboard/courses',
   // icon:<AiOutlineBulb/>,
    
   /* children: [
      {
        title: 'videos',
        type: 'item',
         icon: 'Savings',
        path: '/dashboard/video',
      },
      {
        title: 'docs',
        type: 'item',
         icon: 'LockIcon',
         path: '/dashboard/docs',
      },
    ],*/
  },
  {/*
    title: `bids`,
    path: '/dashboard/chat',
    icon: icon('ic_msg'),
    iconLabel: 'msg',
    icon:<CgToolbox/>
*/},
  {/*
    title: 'settings',
     path: '#',
   iconLabel: 'settings',
   icon:<FiSettings/>
*/},
];

export default navConfig;
