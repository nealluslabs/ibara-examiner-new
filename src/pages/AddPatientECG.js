import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState} from 'react';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addTeacher,fetchPatientProcessSteps} from 'src/redux/actions/group.action';
import {CardMedia,CssBaseline,FormControlLabel, Checkbox, makeStyles, Chip} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import users from 'src/_mock/user';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IMG1 from 'src/assets/images/blood-investigation.png'
import IMG2 from 'src/assets/images/radiology.png'
import IMG3 from 'src/assets/images/intervention.png'
import DEFAULTIMG from 'src/assets/images/cooler-img.png'

function AddPatientECG() {
  const navigate = useNavigate();
  const location = useLocation()
 // console.log("location is",location.state.levelName,location.state.uid)

 
  const dispatch = useDispatch();


  const [ecgResponseTime,setEcgResponseTime]= useState('')

  const [selectedFile, setSelectedFile] = useState({selectedFile: [], selectedFileName: []});
  const [file,setFile] = useState('')


  const handleselectedFile = event => {
    setSelectedFile({
        selectedFile: event.target.files[0],
        selectedFileName: event.target.files[0].name
    });

    setFile(URL.createObjectURL(event.target.files[0]));
    
};




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

  const addObject ={
    ...patientProcessSteps,
   ecgResponseTime:Number(ecgResponseTime),
   ecgAnswerImage:selectedFile && selectedFile.selectedFile ?selectedFile.selectedFile :''
   
  }

  const addToPatientProcess = async(addObject,navigate,navigateUrl)=> {
    
    if(!ecgResponseTime||(selectedFile.selectedFile.length <1) ){
      
      
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
              Enter ECG:
              </Typography>
              <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

     <Grid container spacing={2} style={{margin:"0 auto",width:"60%",padding:"1rem",borderRadius:"3rem"}}>



     <Grid container item xs={12} spacing={1} style={{marginTop:"1rem"}}>
     
         <Grid item xs={1.5} style={{backgroundColor: '#D7DBA5' ,borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}} 
              >
                  
                 
                  <Link to={'/dashboard/add-patient-bloodinv'}>   
                    <img src={IMG1} style={{marginBottom:"5px",marginLeft:"5px"}} alt="blood inv icon"  />
                 
                    </Link>
                </Grid>
    
       
                <Grid item xs={7}>
                 <TextField
                 style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%",marginLeft:"1.6rem"}}
                 fullWidth
                 placeholder=" Response time in minutes"
                 variant="outlined"
                 multiline
                 maxRows={2}
                 value= {ecgResponseTime}
                 onChange = {(e)=>{
                   if(Number(e.target.value) ||e.target.value=== ''){
                   setEcgResponseTime(e.target.value)}
                   }
                 }
                 
                 />
            
            
              </Grid>
        </Grid>



        


        <Grid container item xs={12} spacing={2} style={{marginTop:"1rem"}}>
       
    <Grid container item xs={4} spacing={1} style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
        <div  style={{display:"flex",justifyContent:"center",alignItems:"center",height:"110px",width:"110px",backgroundColor: '#21D0C3', borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"-2rem"}} 
              >
                  
                  <Link to={'/dashboard/add-patient-radiology'}>
                    
                    <img src={IMG2} style={{marginBottom:"5px"}} alt="radiology icon"  />
                    </Link>

          </div>


          <div  style={{display:"flex",justifyContent:"center",alignItems:"center",height:"110px",width:"110px",backgroundColor: '#00B8D4',border:'4.5px solid #4C4E37', borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"-2rem"}} 
              >
                  
                  <Link to={'/dashboard/add-patient-ecg'}>
                    
                    <img src={IMG3} style={{marginBottom:"10px"}} alt="ecg icon"  />
                    </Link>  

          </div>
      
         </Grid>

       
                <Grid item xs={7}  style={{border: '0px solid red'}}>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <CardMedia
                      style={{ border: '0.2px solid black', backgroundColor: '#fff', width: '240px' }}
                      component="img"
                      height="240"
                      width="540"
                      image={file?file : DEFAULTIMG}
                      alt="IMG"
                    /> 
                    <p style={{color:"black"}}> {selectedFile && selectedFile.selectedFileName ?selectedFile.selectedFileName  :" "} </p>
                    <Button component="label" variant="contained" style={{ minHeight: '45px', minWidth: '145px', backgroundColor: '#000000', marginTop: '15px' }}>
                      <b>UPLOAD</b>
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleselectedFile}
                      />
                    </Button>
                  </div>
              </Grid>
        </Grid>



        <Grid container item xs={12} spacing={2} style={{marginTop:"1rem"}}>
        
         
        </Grid>



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"flex-end",marginRight:"3rem"}}variant="p" component="p">
             <div style={{color:"black"}} >
            
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
           
            
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
 
  <Button   variant="contained" onClick={() => {addToPatientProcess(addObject,navigate,'/dashboard/add-patient-prescription')}}
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

export default AddPatientECG;