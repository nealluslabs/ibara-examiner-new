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

function AddTeacher() {
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

  const [screenTime,setScreenTime] = useState()
  const [history,setHistory] = useState()
  const [firstName,setFirstName] =useState()
  const [lastName,setLastName] =useState()
  const [icon,setIcon]=useState()
  const [complaint,setComplaint] =useState()

 

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
 


  return (
    <>
    <Container maxWidth="xl">



    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6rem"}}>
       
      
       </div>



    <h1 style={{position:"relative",fontWeight:"bold",marginBottom:"40px",fontSize:"30px"}}>NEW PATIENT</h1>

    <Grid item xs={12} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              ADD DETAILS BELOW
              </Typography>
              <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

     <Grid container spacing={2}>



     <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             FIRST NAME
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
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
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             LAST NAME
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
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
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             SCREEN TIME
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
            fullWidth
            placeholder=" add screen time"
            variant="outlined"
            multiline
            maxRows={2}
            value= {screenTime}
            onChange = {(e)=>{setScreenTime(e.target.value)}}
            
            />
            
            
          </Grid>
        </Grid>



       
       <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
              ICON
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
            fullWidth
            placeholder=" choose icon."
            variant="outlined"
            multiline
            maxRows={2}
            value= {icon}
            onChange = {(e)=>{setIcon(e.target.value)}}
            
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

          <Grid item xs={7}>
            <TextField
            fullWidth
            placeholder=" hospital history"
            variant="outlined"
            multiline
            rows={8}
            value= {history}
            onChange = {(e)=>{setHistory(e.target.value)}}
            
            />
            
            
          </Grid>
        </Grid>


   
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             COMPLAINT
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
            fullWidth
            placeholder=" add complaint"
            variant="outlined"
            multiline
            maxRows={2}
            value= {complaint}
            onChange = {(e)=>{setComplaint(e.target.value)}}
            
            />
          </Grid>
        </Grid>
      





      
      </Grid>
      <br/><br/><br/><br/>
  <div style={{ display: 'flex', justifyContent: 'center',gap:"1rem" }}>
 
  <Button  onClick={() => {navigate(-1) }} variant="contained" 
  style={{ backgroundColor: "#000000"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    CANCEL
  </Button>
 
  <Button  onClick={() => { addThisTeacher(addObject,navigate)}} variant="contained" 
  style={{ backgroundColor: "#000000"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
   {loading?"loading..." :"SUBMIT"}
  </Button>
</div>
</Container>
    </>
  );
}

export default AddTeacher;