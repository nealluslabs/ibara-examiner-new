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

function AddPatientReferral() {
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

  const [screenTime,setScreenTime] = useState('')
  const [history,setHistory] = useState()
  const [firstName,setFirstName] =useState()
  const [lastName,setLastName] =useState()
  const [icon,setIcon]=useState()
  const [age,setAge]=useState('')
  const [complaint,setComplaint] =useState()
  const [complaintId,setComplaintId] =useState()
 

  const { teachers } = useSelector((state) => state.jobs);

 const [teachersArr,setTeacherArr]=useState([...teachers.map((item)=>(item.firstName + " " + item.lastName))])

  const { user } = useSelector((state) => state.auth);
  const { complaints } = useSelector((state) => state.jobs);
  const [complaintArr, setComplaintArr] = useState(complaints?complaints:[]/*teachers*/);
  
  console.log("user details are:",user)


  const addObject ={
    firstName,
    lastName,
    history,
    screenTime,
    icon,
    age:Number(age) && Number(age),
    complaint,
    complaintId
  }

  const addThisTeacher = async(addObject,navigate) => {
    
    if(!firstName||!lastName||!history || !screenTime ||!icon||!complaint||!age ){
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
 


  return (
    <>
    <Container maxWidth="xl" >



    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6rem"}}>
       
      
       </div>



    <h1 style={{position:"relative",fontWeight:"bold",marginBottom:"40px",fontSize:"30px"}}>NEW PATIENT</h1>

    <Grid item xs={12} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              Enter Referral:
              </Typography>
              <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

     <Grid container spacing={2} style={{margin:"0 auto",backgroundColor:"#EFEFEF",width:"60%",padding:"1rem",borderRadius:"3rem"}}>



     <Grid container item xs={12} spacing={1}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"flex-end",marginRight:"2rem"}}variant="p" component="p">
             <div >
             FIRST NAME:
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" Add first name."
            variant="outlined"
            multiline
            maxRows={2}
            value= {firstName}
            onChange = {(e)=>{setFirstName(e.target.value)}}
            
            />
            
            
          </Grid>
        </Grid>


        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"flex-end",marginRight:"2rem"}}variant="p" component="p">
             <div >
             LAST NAME:
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" Add last name"
            variant="outlined"
            multiline
            maxRows={2}
            value= {lastName}
            onChange = {(e)=>{setLastName(e.target.value)}}
            
            />
            
            
          </Grid>
        </Grid>



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"flex-end",marginRight:"2rem"}}variant="p" component="p">
             <div >
             AGE:
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" Add age"
            variant="outlined"
            multiline
            maxRows={2}
            value= {age}
            onChange = {(e)=>{
              if(Number(e.target.value) ||e.target.value=== ''){
              setAge(e.target.value)}
              }
            }
            
            />
            
            
          </Grid>
        </Grid>



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"flex-end",marginRight:"2rem"}}variant="p" component="p">
             <div >
              ICON:
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
          <Select
         style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={icon}
          label="icon"
          onChange={(event) => {
            setIcon(event.target.value);
          }}
        >
       
            <MenuItem value={"Male"}>{"Male"}</MenuItem>
            <MenuItem value={"Female"}>{"Female"}</MenuItem>
            <MenuItem value={"Kid"}>{"Kid"}</MenuItem>
       
       
        </Select>
            
            
          </Grid>
        </Grid>



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"flex-end",marginRight:"2rem"}}variant="p" component="p">
             <div >
             COMPLAINT(S):
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
          <Select
         style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={complaint}
          label="complaint"
          onChange={(event) => {
            setComplaint(event.target.value.complaint);
            setComplaintId(event.target.value.uid);
          }}
        >
       {complaintArr.map((item)=>(

<MenuItem value={item}>{item.complaint}</MenuItem>

)
)}
       
        </Select>
          </Grid>
        </Grid>

       
     {/*
         <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             SCREEN TIME
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={6}>
            <TextField
            fullWidth
            placeholder=" add screen time"
            variant="outlined"
            multiline
            type="number"
            maxRows={2}
            value= {screenTime}
            onChange = {(e)=>{
              if(Number(e.target.value)|| e.target.value=== ''){
              setScreenTime(e.target.value)
              }
            }}
            
            />
            
            
          </Grid>
        </Grid>



       
      



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             HISTORY
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={6}>
            <TextField
            fullWidth
            placeholder=" Medical history"
            variant="outlined"
            multiline
            rows={8}
            value= {history}
            onChange = {(e)=>{setHistory(e.target.value)}}
            
            />
            
            
          </Grid>
        </Grid>
       */}

   
        
      





      
      </Grid>
      <br/><br/><br/><br/>
  <div style={{ display: 'flex',margin:"0 auto", justifyContent: 'space-between',width:"60%",gap:"1rem" }}>
 
  <Button  onClick={() => {navigate(-1) }} variant="contained" 
  style={{ backgroundColor: "#000000"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    Back
  </Button>
 
  <Button   variant="contained" onClick={() => {navigate('/dashboard/add-patient-referral') }}
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

export default AddPatientReferral;