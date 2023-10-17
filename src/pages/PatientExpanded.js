import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addTeacher} from 'src/redux/actions/group.action';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import users from 'src/_mock/user';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { LocalActivityOutlined } from '@mui/icons-material';

function AddTeacher() {
  const navigate = useNavigate();
  const location = useLocation()
 // console.log("location is",location.state.levelName,location.state.uid)

  
  const dispatch = useDispatch();

  

  const [loading,setLoading] = useState(false)

  const [level,setLevel] = useState('')
  const [body,setBody] = useState('')
  const [imageUrl,setImageUrl] =useState('')

  const [screenTime,setScreenTime] = useState()
  const [history,setHistory] = useState()
  const [firstName,setFirstName] =useState()
  const [lastName,setLastName] =useState()
  const [icon,setIcon]=useState()
  const [complaint,setComplaint] =useState()

  const { teachers } = useSelector((state) => state.jobs);

 const [teachersArr,setTeacherArr]=useState([...teachers.map((item)=>(item.firstName + " " + item.lastName))])

  const { user } = useSelector((state) => state.auth);

  console.log("user details are:",user)


  const addObject ={
    firstName,
    lastName,
    history,
    screenTime,
    icon,
    complaint
  }

  const addThisTeacher = async(addObject,navigate) => {
    
    if(!firstName||!lastName||!history || !screenTime ||!icon||!complaint ){
      notifyErrorFxn("Please make sure to fill in all fields.")
    }
    else{
    
    setLoading(true)
    dispatch(addTeacher(addObject,navigate))
   
    // console.log("identity is",identity)
    // console.log("update this subject is updating.........")
    setTimeout(()=>{setLoading(false)},1800)
    }
  }
 


  const {allQuizzesOneStudent} = useSelector((state) => state.jobs);
  const [patient,setPatient]=useState(allQuizzesOneStudent.filter((item)=>(item.patientId === location.state.patientId))[0])
  console.log("WHAT PATIENT TEST DO I GET",patient)

  console.log("LOOK HERE --->",location)

  return (
    <>
    <Container maxWidth="xl">



    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6rem"}}>
       
      
       </div>



    <h1 style={{position:"relative",fontWeight:"bold",marginBottom:"40px",fontSize:"25px"}}> { location.state && location.state.candidateName }</h1>

    <Grid item xs={12} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
               Patient - {patient && patient.firstName + " " + patient.lastName}
              </Typography>
             {/* <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>*/}
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

     <Grid container spacing={2} style={{margin:"0 auto",backgroundColor:"#081B85",width:"70%",padding:"1rem",paddingBottom:"2.5rem",borderRadius:"3rem"}}>


       


         <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             SCREEN TIME
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
             style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" "
            variant="outlined"
            multiline
            disabled
            maxRows={2}
            value= {patient && patient.screenTime}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            },
          }}
            
            
            />
            
            
          </Grid>
        </Grid>



       
      



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             BLOOD INVESTIGATION 
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
             style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" "
            variant="outlined"
            multiline
            disabled
            maxRows={8}
            value= {patient && patient.chosenBloodInvestigationTests && patient.chosenBloodInvestigationTests.toString() }
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            },
          }}
            
            
            />
            
            
          </Grid>
        </Grid>


   
       {/* <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             RADIOLOGY CHOSEN
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
             style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" "
            variant="outlined"
            multiline
            disabled
            maxRows={2}
            value= {patient && patient.chosenRadiology }
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            },
          }}
            
            
            />
            
            
          </Grid>
        </Grid>*/}


        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             RADIOLOGY 
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
             style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" "
            variant="outlined"
            multiline
            disabled
            maxRows={2}
            value= {patient && patient.chosenRadiologyTests && patient.chosenRadiologyTests.toString()}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            },
          }}
            
            
            />
            
            
          </Grid>
        </Grid>



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             CHOSEN REFERRAL
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
             style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" "
            variant="outlined"
            multiline
            disabled
            
            maxRows={2}
            value= {patient && patient.chosenReferrals && patient.chosenReferrals.toString()}
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            },
          }}
            
            />
            
            
          </Grid>
        </Grid>


        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             PRESCRIPTION
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
             style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" "
            variant="outlined"
            multiline
            disabled
            rows={6}
            value= {patient && patient.prescriptionResponseArray && patient.prescriptionResponseArray.toString() }
          
            sx={{
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
            },
          }}
            
            />
            
            
          </Grid>
        </Grid>


        
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             VEFIRICATION:
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
           <p style={{fontSize:"25px"}}>Succesfully Treated</p>
            
            
          </Grid>
        </Grid>





      
      </Grid>
      <br/><br/><br/><br/>
  <div style={{ display: 'flex', justifyContent: 'center',gap:"1rem" }}>
 
  <Button  onClick={() => {navigate(-1) }} variant="contained" 
  style={{ backgroundImage:"linear-gradient(rgba(8, 27, 133, 1), rgba(8, 27, 133, 0.9))"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    BACK
  </Button>
 
 {/* <Button  onClick={() => { addThisTeacher(addObject,navigate)}} variant="contained" 
  style={{ backgroundColor: "#000000", paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
   {loading?"loading..." :"SUBMIT"}
  </Button>*/ }
</div>
</Container>
    </>
  );
}

export default AddTeacher;