import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       myGroups: [], 
       patientProcessSteps:{},
       allGroups: [], 
       allCategories:[],
       allSectionVideos:[],
       categoryVideos:[],
       categoryChapters:[],
       chapterSessions:[],
       chapterQuizzes:[],
       presentOpenMenu:null,
       presentOpenChapter:null,
       presentOpenSession:null,
       requestedSection:null,
       allTreatmentCategories:[],
       subjectInfo:{},
       chapterInfo:{},
       teacherInfo:{},
       complaintInfo:{},
       lessonInfo:{},
       quizInfo:{},
       publicGroups: [], 
       privateGroups: [],
       groupMembers: [], 
       employeer: {}, 
       message: '',
      isLoading: false,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    saveMyGroup: (state, action) => {
        state.myGroups = action.payload;
    },
    saveAllGroup: (state, action) => {
        state.allGroups = action.payload;
    },
    savePatientProcessSteps: (state, action) => {
      state.patientProcessSteps = action.payload;
  },
    saveAllTreatmentCategories: (state, action) => {
      state.allTreatmentCategories = action.payload;
  },
    setRequestedSection: (state, action) => {
      state.requestedSection = action.payload;
   },
    saveSectionVideos: (state, action) => {
      state.allSectionVideos = action.payload;
  },

saveCategoryVideos: (state, action) => {
  state.categoryVideos = action.payload;
},
saveCategoryChapters: (state, action) => {
  state.categoryChapters = action.payload;
},
saveChapterSessions: (state, action) => {
  state.chapterSessions = action.payload;
},
saveChapterQuizzes: (state, action) => {
  state.chapterQuizzes = action.payload;
},
savePresentOpenMenu: (state, action) => {
  state.presentOpenMenu = action.payload;
},
savePresentOpenChapter: (state, action) => {
  state.presentOpenChapter = action.payload;
},
savePresentOpenSessions: (state, action) => {
  state.presentOpenSession = action.payload;
},
  saveCategories: (state, action) => {
    state.allCategories = action.payload;
},

saveSubjectInfo: (state, action) => {
  state.subjectInfo = action.payload;
},
saveTeacherInfo: (state, action) => {
  state.teacherInfo = action.payload;
},
saveComplaintInfo: (state, action) => {
  state.complaintInfo = action.payload;
},
saveChapterInfo: (state, action) => {
  state.chapterInfo = action.payload;
},
saveQuizInfo: (state, action) => {
  state.quizInfo = action.payload;
},
saveLessonInfo: (state, action) => {
  state.lessonInfo = action.payload;
},
    savePublicGroup: (state, action) => {
        state.publicGroups = action.payload;
    },
    savePrivateGroup: (state, action) => {
        state.privateGroups = action.payload;
    },
    saveGroupMembers: (state, action) => {
      state.groupMembers = action.payload;
  },
    saveEmployeer: (state, action) => {
      state.employeer = action.payload;
  },
    isItLoading: (state, action) => {
      state.isLoading = action.payload;
  },
    clearGroup: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = groupSlice;

export const {
 saveMyGroup,
 saveAllGroup,
 savePatientProcessSteps,
 saveAllTreatmentCategories,
 saveSectionVideos,
 saveCategoryVideos,
 saveCategoryChapters,
 savePresentOpenMenu,
 savePresentOpenChapter,
 savePresentOpenSessions,
 saveChapterSessions,
 saveChapterQuizzes,
 saveQuizInfo,
 savePublicGroup,
 saveCategories,
 saveSubjectInfo,
 saveChapterInfo,
 saveTeacherInfo,
 saveComplaintInfo,
 saveLessonInfo,
 savePrivateGroup,
 saveGroupMembers,
 saveEmployeer,
 setRequestedSection,
 isItLoading,
 clearGroup
} = actions;

export default reducer;


