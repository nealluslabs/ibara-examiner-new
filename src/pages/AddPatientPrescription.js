import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState} from 'react';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addTeacher, fetchPatientProcessSteps} from 'src/redux/actions/group.action';
import {CardMedia,CssBaseline,FormControlLabel, Checkbox, makeStyles, Chip} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import users from 'src/_mock/user';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IMG1 from 'src/assets/images/blood-investigation.png'
import IMG2 from 'src/assets/images/radiology.png'
import IMG3 from 'src/assets/images/intervention.png'
import IMG4 from '../assets/images/prescription.png';
import IMG5 from '../assets/images/referrals.png';

import DEFAULTIMG from 'src/assets/images/cooler-img.png'


function AddPatientPrescription() {
  const navigate = useNavigate();
  const location = useLocation()
 // console.log("location is",location.state.levelName,location.state.uid)

  
  const dispatch = useDispatch();


  const { patientProcessSteps } = useSelector((state) => state.group);
  console.log("patient process steps so far--->:",patientProcessSteps)

  const  [prescription,setPrescription] = useState(patientProcessSteps && patientProcessSteps.prescription?patientProcessSteps.prescription:[])







const prescriptionHandler = (prescriptionString)=>{
  
  const returnArray =  prescriptionString.split(',')
 
  const finalReturnArray = returnArray.map((item)=>(item.trim()))
  //setPrescriptionArray(finalReturnArray)

  setPrescription([...finalReturnArray])
   
  console.log("our trimmed return array", finalReturnArray)
 
   }





   const addObject ={
    ...patientProcessSteps,
   prescription
  

  }

  const [loading,setLoading] = useState(false)

  const [level,setLevel] = useState('')
  const [body,setBody] = useState('')
  const [imageUrl,setImageUrl] =useState('')

  const [screenTime,setScreenTime] = useState('')
  const [history,setHistory] = useState()
  const [firstName,setFirstName] =useState()
  const [lastName,setLastName] =useState()
  const [icon,setIcon]=useState()
  const [age,setAge]=useState('')
  const [complaint,setComplaint] =useState()
  const [complaintId,setComplaintId] =useState()
 

 





 
  




 
  const addToPatientProcess = async(addObject,navigate,navigateUrl)=> {
    
    if(!prescription ){
      
      
      notifyErrorFxn("Please make sure to fill in all fields.")
    }
    else{

    setLoading(true)
    if(window.confirm("are you sure this prescription is correct ?")){
    dispatch(fetchPatientProcessSteps(addObject,navigate,navigateUrl))
    }
    
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
              Enter Prescription:
              </Typography>
              <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

        <Grid container spacing={2} style={{margin:"0 auto",width:"60%",padding:"1rem",borderRadius:"3rem"}}>



<Grid container item xs={12} spacing={1} style={{marginTop:"1rem"}}>
   <Grid container item xs={3.4} style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}> 
   
             
             <div style={{backgroundColor: "#A160E4",padding:"0.1rem",border:'4.5px solid #4C4E37', borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}}>
             <Link to={'/dashboard/add-patient-prescription'}> 
               <img src={IMG4} style={{marginBottom:"5px",marginLeft:"5px"}} alt="prescription icon"  />
               </Link>
            </div>

         

          
             
           <div style={{backgroundColor: '#E5EEF9', padding:"0.1rem",borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}}>
             {/*<Link to={'/dashboard/add-patient-referral'}> */} 
               <img src={IMG5} style={{marginBottom:"5px"}} alt="referral icon"  />
               {/*</Link> */}
          </div> 

           
   </Grid>
  
           <Grid item xs={7}>
       <TextField
       style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
       fullWidth
       placeholder=" Add prescription"
       variant="outlined"
       multiline
       //maxRows={2}
       rows={9}
       value= {prescription.toString()}
       onChange = {(e)=>{prescriptionHandler(e.target.value)}}
       
       />
       
       
     </Grid>
   </Grid>



</Grid>
      <br/><br/><br/><br/>
  <div style={{ display: 'flex',margin:"0 auto", justifyContent: 'space-between',width:"60%",gap:"1rem" }}>
 
  <Button  onClick={() => {navigate(-1) }} variant="contained" 
  style={{ backgroundColor: "#000000"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    Back
  </Button>
 
  <Button   variant="contained" onClick={() => {addToPatientProcess(addObject,navigate,'/dashboard/add-patient-referral') }}
  style={{ backgroundColor: "#000000"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
   {loading?"loading..." :"Next"}
  </Button>
</div>
</Container>
    </>
  );
}

export default AddPatientPrescription;