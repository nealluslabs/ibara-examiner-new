import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addTeacher, fetchPatientProcessSteps} from 'src/redux/actions/group.action';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import users from 'src/_mock/user';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function AddPatientHistory() {
  const navigate = useNavigate();
  const location = useLocation()
 // console.log("location is",location.state.levelName,location.state.uid)

  const [file, setFile] = useState();
  const [file2, setFile2] = useState();
  const [fileSize, setFileSize] = useState();
  const [fileSize2, setFileSize2] = useState();
  const [selectedFile, setSelectedFile] = useState({selectedFile: [], selectedFileName: []});
  const [selectedFile2, setSelectedFile2] = useState({selectedFile2: [], selectedFileName2: []});
  const dispatch = useDispatch();

  const [newPassword,setNewPassword] =useState('')
  const [confirmPassword,setConfirmPassword] =useState('')
  const [companySize,setCompanySize] =useState('')


  const [loading,setLoading] = useState(false)

  const [level,setLevel] = useState('')
  const [body,setBody] = useState('')
  const [imageUrl,setImageUrl] =useState('')

 
 


  const { teachers } = useSelector((state) => state.jobs);

 const [teachersArr,setTeacherArr]=useState([...teachers.map((item)=>(item.firstName + " " + item.lastName))])

  const { user } = useSelector((state) => state.auth);
  const { complaints } = useSelector((state) => state.jobs);
  const [complaintArr, setComplaintArr] = useState(complaints?complaints:[]/*teachers*/);

  const { patientProcessSteps } = useSelector((state) => state.group);
  const [history,setHistory] = useState(patientProcessSteps && patientProcessSteps.history?patientProcessSteps.history:"")
  
  console.log("patint Process steps-->:",patientProcessSteps)


  const addObject ={
    ...patientProcessSteps,
      history,
    }

  const addToPatientProcess = async(addObject,navigate,navigateUrl)=> {
    
    if(!history ){
      notifyErrorFxn("Please make sure to fill in all fields.")
    }
    else{

    setLoading(true)
    dispatch(fetchPatientProcessSteps(addObject,navigate,navigateUrl))
   
    
    setTimeout(()=>{setLoading(false)},1800)
    
  } 
  }


  return (
    <>
    <Container maxWidth="xl" >



    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6rem"}}>
       
      
       </div>



    <h1 style={{position:"relative",fontWeight:"bold",marginBottom:"40px",fontSize:"30px"}}>NEW PATIENT</h1>

    <Grid item xs={12} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              Enter Patient History:
              </Typography>
             {/* <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>*/}
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

        <Grid container spacing={2} style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",height:"450px",margin:"0 auto",width:"60%",padding:"1rem",borderRadius:"3rem"}}>

<Grid container item xs={12} spacing={1}  style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
    {/*  <Grid item xs={3}>
      <Typography  style={{display:"flex",alignItems:"center",justifyContent:"flex-end",marginRight:"2rem"}}variant="p" component="p">
       <div style={{color:"black"}}>
        FIRST NAME:
        </div>
 
       </Typography>
     
  </Grid>*/}

     <Grid item xs={7} >
       <TextField
       fullWidth
       
       placeholder=" Add patient history."
       variant="outlined"
       multiline
       rows={14}
       /*maxRows={2}*/
       value= {history}
       onChange = {(e)=>{setHistory(e.target.value)}}
       style={{position:"relative",left:"-10%",backgroundColor:"#FFFFFF",borderRadius:"3rem",height:"100%",width:"120%"}}
      // InputProps={style={borderRadius:"3rem"}}
      InputProps={{
        borderRadius:"3rem"
    }}
       />
       
       
     </Grid>
   </Grid>


 
 </Grid>
      <br/><br/><br/><br/>
  <div style={{ display: 'flex',margin:"0 auto", justifyContent: 'space-between',width:"60%",gap:"1rem" }}>
 
  <Button  onClick={() => {navigate(-1) }} variant="contained" 
  style={{ backgroundColor: "#081B85"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    Back
  </Button>
 
  <Button   variant="contained" onClick={() => {addToPatientProcess(addObject,navigate,'/dashboard/add-patient-bloodInv') }}
  style={{ backgroundColor: "#081B85"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
   {loading?"loading..." :"Next"}
  </Button>
</div>
</Container>
    </>
  );
}

export default AddPatientHistory;