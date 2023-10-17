import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

//import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
//import HomePage from './pages/HomePage';
import HomePage1 from './pages/HomePage1';
//import HomePage2 from './pages/HomePage2';
import FeedPage from './pages/FeedPage';
import VideoPage from './pages/VideoPage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import DocsPage from './pages/DocsPage';
//import MembersPage from './pages/MembersPage';
//import MyCoolersPage from './pages/MyCoolersPage';
//import CoolersPage from './pages/CoolersPage';
//import JoinCoolerPage from './pages/JoinCoolerPage';
import InboxPage from './pages/InboxPage';
import SettingsPage from './pages/AddCourse';
import UserListPage from './pages/UserListPage';
import IncubatorVideoPage from './pages/IncubatorVideosPage';
import OperationsVideoPage from './pages/OperationsVideosPage';
import ViewIncubatorPage from './pages/ViewIncubatorPage';

//import PublicCoolerPage from './pages/PublicCoolerPage';
//import PrivateCoolerPage from './pages/PrivateCoolerPage';
//import PublicCoolerJoin from './pages/PublicCoolerJoin';
//import PrivateCoolerJoin from './pages/PrivateCoolerJoin';
//import CreateCoolerPage from './pages/CreateCoolerPage';
import Login from './pages/Login';
import LoginUpdatedPage from './pages/LoginUpdatedPage/LoginUpdatedPage'
import RegisterUpdatedPage from './pages/RegisterUpdatedPage/RegisterUpdatedPage'
import CategoriesVideoPage from './pages/CategoriesVideosPage';
import CoursesStatsPage from './pages/CoursesStatsPage'
import ContractorListPage from './pages/ContractorListPage'
import ContractorStatsPage from './pages/ContractorStatsPage'
import AddCourse from './pages/AddCourse';
import EditCourse from './pages/EditCourse';
import AddSubject from './pages/AddSubject';
import AddTeacher from './pages/AddTeacher';
import PatientExpanded from './pages/PatientExpanded';
import EditTeacher from './pages/EditTeacher';

import AddSession from './pages/AddSession';
//import AddLesson from './pages/AddLesson';
import AddLesson from './pages/AddLessonAlso';
//import AddChapter from './pages/AddChapter';
import AddChapter from './pages/AddChapterAlso';
import EditChapter from './pages/EditChapter';
import AddComplaint from './pages/AddComplaint';
import AddQuiz from './pages/AddQuiz';
import StudentListPage from './pages/StudentListPage';
import TeacherListPage from './pages/TeacherListPage';
import ComplaintsListPage from './pages/ComplaintsListPage';

import EditComplaint from './pages/EditComplaint';
import EditQuiz from './pages/EditQuiz';
import AddPatientBioData from './pages/AddPatientBioData';
import AddPatientArrival from './pages/AddPatientArrival';
import AddPatientScreenTime from './pages/AddPatientScreenTime';
import AddPatientBloodInv from './pages/AddPatientBloodInv';
import AddPatientRadiology from './pages/AddPatientRadiology';
import AddPatientHistory from './pages/AddPatientHistory';
import AddPatientReferral from './pages/AddPatientReferral';
import AddPatientPrescription from './pages/AddPatientPrescription';
import AddPatientECG from './pages/AddPatientECG';
import AddConditionsRadiology from './pages/AddCondiitonsRadiology';
import AddConditionsReferral from './pages/AddCondiitonsReferral';
import AddConditionsBloodInv from './pages/AddConditionsBloodInv';

import AddCandidate from './pages/AddCandidate';

export default function Router() {
  const routes = useRoutes([
   
     
   
   
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: 'home', element:<UserListPage/>/*<HomePage1 />*/ },
        { path: 'feed', element: <FeedPage /> },
        { path: 'courses-stats', element: <CoursesStatsPage /> },
        { path: 'candidate-list', element: <StudentListPage /> },
        { path: 'candidate-stats', element: <ContractorStatsPage /> },
        { path: 'incubator-videos', element: <IncubatorVideoPage /> },
        { path: 'incu-videos-tech', element: <OperationsVideoPage /> },
        { path: 'incu-videos-ops', element: <OperationsVideoPage /> },
        { path: 'incu-videos-safety', element: <OperationsVideoPage /> },
        { path: 'view-incubator', element: <ViewIncubatorPage /> },
        { path: 'video', element: <VideoPage /> },
        { path: 'video-details', element: <VideoDetailsPage /> },
        { path: 'docs', element: <DocsPage /> },
        { path: 'treatments', element: <CategoriesVideoPage /> },
        { path: 'patient-list', element: <TeacherListPage /> },
        { path: 'complaint-list', element: <ComplaintsListPage /> },

        { path: 'chat', element: <InboxPage /> },
        { path: 'add-treatment', element: <AddCourse /> },
        { path: 'add-subject', element: <AddSubject /> },
        { path: 'edit-subject', element: <EditCourse /> },
        { path: 'add-lesson', element: <AddLesson /> },
        { path: 'add-complaint', element: <AddComplaint /> },
        { path: 'edit-complaint', element: <EditComplaint /> },
        { path: 'add-chapter', element: <AddChapter /> },
        { path: 'add-quiz', element: <AddQuiz /> },
        { path: 'edit-quiz', element: <EditQuiz /> },
        { path: 'edit-chapter', element: <EditChapter /> },
        { path: 'add-patient-bio', element: <AddPatientBioData/> },
        { path: 'add-patient-history', element: <AddPatientHistory/> },
        { path: 'add-patient-arrival', element: <AddPatientArrival/> },
        { path: 'add-patient-screen', element: <AddPatientScreenTime/> },
        { path: 'add-patient-bloodinv', element: <AddPatientBloodInv/> },
        { path: 'add-patient-radiology', element: <AddPatientRadiology/> },
        { path: 'add-patient-ecg', element: <AddPatientECG/> },
        { path: 'add-patient-prescription', element: <AddPatientPrescription/> },
        { path: 'add-patient-referral', element: <AddPatientReferral/> },

        { path: 'add-conditions-bloodinv', element: <AddConditionsBloodInv/> },
        { path: 'add-conditions-radiology', element: <AddConditionsRadiology/> },
        { path: 'add-conditions-referral', element: <AddConditionsReferral/> },

        { path: 'add-candidate', element: <AddCandidate/> },

     


        { path: 'edit-patient', element: <EditTeacher /> },
        { path: 'patient-expanded', element: <PatientExpanded/> },
        // { path: 'my-cooler', element: <MyCoolersPage /> },
       
       
      ],
    },
    {
      path: 'loginTest',
      element:/* <Login />*/<LoginUpdatedPage/>,
    },

    {
      path: 'regTest',
      element:/* <Login />*/<RegisterUpdatedPage/>,
    },

   
    
   
    {
      element: <SimpleLayout />,
      children: [
        // { element: <Navigate to="/login" />, index: true },
        { element: <Navigate to="loginTest" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
