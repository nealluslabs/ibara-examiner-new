import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@mui/icons-material/Lock';
import { Divider, Chip, Grid, Paper, Typography, Box, Avatar, Button, ButtonBase, Stack, 
  ToggleButton, ToggleButtonGroup, Hidden  } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import {fetchSubjectChapters, updateVideoAndUserWatchlists,fetchSubjectInfo} from 'src/redux/actions/group.action'

import { useNavigate } from 'react-router-dom';

import { setRequestedSection,savePresentOpenChapter } from 'src/redux/reducers/group.slice';



import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import ChapterCard from   'src/components/chapters/chapter-card';
import { populate } from 'react-redux-firebase';
import QuizCard from '../chapters/quiz-card';


const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#f2ecfe',
    border:'1px solid lightgrey',
    borderRadius:'5pxyyy',
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  text: {
    width: '80%',
    color: 'grey',
  },
  buttonSpacer: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    gap:'20px'
  },
  button: {
    width: '20%',
    marginLeft: 'auto',
  },
}));

const SubSectionCard = ({data,index,user}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allSectionVideos,requestedSection } = useSelector((state) => state.group);
    const { categoryChapters,presentOpenChapter} = useSelector((state) => state.group);
   // const { user} = useSelector((state) => state.auth);


  const dummyData = [
    {uid: 1, title: "General (16 mins)", desc: "Lorem ipsum dolor sit amet consectetur tesdsjk. Eget cursus..."},
    {uid: 2, title: "Public (11 mins)", desc: "Tetsla ipsum dolor sit amet consectetur tesdsjk. Eget cursus..."},
    {uid: 3, title: "Future (39 mins)", desc: "Lorem ipsum dolor sit amet consectetur tesdsjk. Eget cursus..."},
];

  
  const [loading,setLoading] =useState(false)
  const [wait,setWait] =useState(false)
  const [dropDown, setDropDown] = useState(false);
  const [categoryData,setCategoryData] = useState(categoryChapters?categoryChapters:dummyData) 

  //console.log("THE VIDEO ID IS",dummyData[0].uid)
  console.log(" SUBJECT CARD  CHECK !!!!- - -",data)
  

  useEffect(()=>{ 
    //this code is responsible for the right section appearing in the dropdown
    if(presentOpenChapter !== data.uid){setTimeout(()=>{setDropDown(false)},300)}
   
       setTimeout(()=>{setCategoryData(categoryChapters)},600)

    },[categoryChapters,presentOpenChapter])


    const fetchChaptersAndDropDown  = (id)=> {
      console.log("ID BEING PASSED IN IS",id)
 if(!dropDown){
      setLoading(true)
      dispatch(fetchSubjectChapters(id))
      dispatch(savePresentOpenChapter(id))
      console.log("I WANNA SEE treatment TESTS ", categoryData)
     setTimeout(()=>{setLoading(false);setDropDown(true)},600)
     }
     else{
       setDropDown(false)
     }


    }

    const populateEditSubject = (identity)=>{

      setWait(true)
      dispatch(fetchSubjectInfo(identity))

     setTimeout(()=> {navigate('/dashboard/edit-subject',{state:{uid:identity}})}, 1500)
    }



  return (
    <>
    <div className={classes.row}>
      <div className={classes.text}>
        <div style={{ color: 'black' }}>
          <b style={{color:"black"}}>{ `${index + 1}.) `/*data.id*/} {data && data.title} </b>
        </div>{' '}
        <span style={{ marginLeft: '20px' ,color:"black"}}>{data && data.body}</span>
      </div>

      <div className={classes.buttonSpacer}>
      <Button variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor: 'black', }}
              onClick={() => {
               
              /*  setLoading(true) 
                dispatch(setRequestedSection(data.title))
               dispatch(fetchVideoSubsection(data.title))
                const makeRequest = async()=>{
                  console.log("i have set the requested section as",data.title)
                  dispatch(setRequestedSection(data.title))
                  dispatch(fetchVideoSubsection(data.title))}
                makeRequest().then(()=>(setTimeout(()=>{navigate('/dashboard/view-incubator', { state: { title:data.title } })},1300)))*/
                fetchChaptersAndDropDown(data.uid)
              }}>
                {loading?"Loading...":"View"}
            </Button>


            <Button variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor:'black' }}
              onClick={() => {
             
              populateEditSubject(data.uid)
              }}>
                {wait?"Please Wait...":"Edit"}
            </Button>
       </div>
           
    </div>


     {/*=================THE DROPDOWN ICON =============================*/}
          
     <SlideDown style={{width:"100%"}}>
     {dropDown &&
    <Grid item xs container direction="column" spacing={6} style={{marginLeft:"0px",marginTop:"0px",backgroundColor:"#F8FFEECC",display:"flex",flexDirection:"column",alignItems:"center" }}>
         <br/><br/>
        {categoryData && categoryData.length?
       
        categoryData.map(((dt,i) => {
         return (

         
             <ChapterCard data={dt} index={i} user={user.uid}/>
         )
        })):
           
          <center>
           <br/> <br/>
           No Test(s) available for this category.
           </center>
         
           }
           
      
       </Grid>
         }
       </SlideDown>
     
     {/*=================THE DROPDOWN ICON END=============================*/}

     </>
  );
};

export default SubSectionCard;
