import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState} from 'react';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addSubject, addTeacher} from 'src/redux/actions/group.action';
import {CardMedia,CssBaseline,FormControlLabel, Checkbox, makeStyles, Chip} from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import users from 'src/_mock/user';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IMG1 from 'src/assets/images/blood-investigation.png'
import IMG2 from 'src/assets/images/radiology.png'
import IMG3 from 'src/assets/images/referrals.png'
import DEFAULTIMG from 'src/assets/images/cooler-img.png'

function AddConditionsBloodInv() {
  const navigate = useNavigate();
  const location = useLocation()
 // console.log("location is",location.state.levelName,location.state.uid)

 
  const dispatch = useDispatch();

  const [bloodInv,setBloodInv] = useState([])
  const [bloodInvId,setBloodInvId] =  useState([])
  const [treatmentCategoryId,setTreatmentCategoryId] = useState('')
  const [title,setTitle] = useState('')
  const [specific,setSpecific]  = useState('none for now')
  const [response,setResponse]  = useState('none for now')

  const [selectedFile, setSelectedFile] = useState({selectedFile: [], selectedFileName: []});
  const [file,setFile] = useState('')


  const handleselectedFile = event => {
    setSelectedFile({
        selectedFile: event.target.files[0],
        selectedFileName: event.target.files[0].name
    });

    setFile(URL.createObjectURL(event.target.files[0]));
    
};


const handleDelete = (tbr,tbrId) => {
    

  let placeholder =   bloodInv.filter((item)=>(item !== tbr))
 let placeholder2 =   bloodInvId.filter((item)=>(item !== tbrId))


   setBloodInv([...placeholder])
  setBloodInvId([...placeholder2])
};


const { categoryVideos,allTreatmentCategories,subjectInfo } = useSelector((state) => state.group);


  const [loading,setLoading] = useState(false)

  const [level,setLevel] = useState('')
  const [body,setBody] = useState('')
  const [imageUrl,setImageUrl] =useState('')

 

  const { teachers } = useSelector((state) => state.jobs);

 const [teachersArr,setTeacherArr]=useState([...teachers.map((item)=>(item.firstName + " " + item.lastName))])

  const { user } = useSelector((state) => state.auth);
  const { complaints } = useSelector((state) => state.jobs);
  const [complaintArr, setComplaintArr] = useState(complaints?complaints:[]/*teachers*/);
  
  console.log("user details are:",user)


  const addObject ={
    title,
    body,
    response,
    treatmentId:'7aHB3TreYQYh3bzBS65K',
   // treatment:location.state.treatment,
    treatmentCategoryId,
    specific,
    answerImage:''
  }


 
  const addThisInvestigation = async(addObject) => {
    
    if(!treatmentCategoryId||!title){
      notifyErrorFxn("Please make sure to fill in all fields.")
    }
    else{
    
    setLoading(true)
    dispatch(addSubject(addObject))
   
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
              Add Blood Investigation:
              </Typography>
             {/* <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>*/}
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

     <Grid container spacing={2} style={{margin:"0 auto",width:"60%",padding:"1rem",borderRadius:"3rem"}}>



     <Grid container item xs={12} spacing={1} style={{marginTop:"1rem"}}>
     
         <Grid item xs={1.5} style={{backgroundColor: '#D7DBA5',border:'4.5px solid #4C4E37' ,borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}} 
              >
                  
                 
                  <div style={{padding:"0.3rem"}}>
                   
                   <img src={IMG1}  alt="blood inv icon"  />
                   
                   </div>
                </Grid>
    
       
          <Grid item xs={7}>
          <Select
         style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={treatmentCategoryId}
          label="icon"
          onChange={(event) => {
            setTreatmentCategoryId(event.target.value);
          }}
        >
       
       {categoryVideos && categoryVideos.length >0 && categoryVideos.filter((me)=>(me.treatmentId === '7aHB3TreYQYh3bzBS65K')).length > 0 ? categoryVideos.filter((me)=>(me.treatmentId === '7aHB3TreYQYh3bzBS65K')).map((kiwi)=>(
  <MenuItem style={{color:"black"}} value={kiwi.uid}>{kiwi.title}</MenuItem>
)):
<MenuItem style={{color:"black"}}  value={null}>{"No items listed!"}</MenuItem>
}
       
        </Select>
            
            
          </Grid>
        </Grid>



        


        <Grid container item xs={12} spacing={2} style={{marginTop:"1rem"}}>
       
        <Grid item xs={1.5} style={{backgroundColor: '#21D0C3', borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}} 
              >
                  
                  <div style={{padding:"0.3rem"}}>
                   
                    <img src={IMG2}  alt="radiology icon"  />
                    
                    </div>

                </Grid>
       
          <Grid item xs={7}>
            <TextField
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" Add blood investigation"
            variant="outlined"
            multiline
            maxRows={2}
            value= {title}
           onChange = {(e)=>{setTitle(e.target.value)}}
           
            
            />
            
            
          </Grid>
        </Grid>



        <Grid container item xs={12} spacing={2} style={{marginTop:"1rem"}}>
       
        <Grid item xs={1.5} style={{backgroundColor: '#E5EEF9', borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}} 
              >
                   <div style={{padding:"0.3rem"}}>
                   
                   <img src={IMG3}  alt="ecg icon"  />
                   
                   </div>

                </Grid>
          

         
          <Grid item xs={7}>
            <center>
 <Button onClick={() => { addThisInvestigation(addObject)}}
 component="label" variant="contained" style={{ minHeight: '45px', minWidth: '145px', backgroundColor: '#081B85', marginTop: '15px' }}>
    <b>SUBMIT</b>
   
  </Button>
          </center>
     </Grid>
            
            
         
        </Grid>



      






 </Grid>
      <br/><br/><br/><br/>
  <div style={{ display: 'flex',margin:"0 auto", justifyContent: 'space-between',width:"60%",gap:"1rem" }}>
 
  <Button  onClick={() => {navigate(-1) }} variant="contained" 
  style={{ backgroundImage:"linear-gradient(rgba(8, 27, 133, 1), rgba(8, 27, 133, 0.9))"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    Back
  </Button>
 
  <Button   variant="contained" onClick={() => {navigate('/dashboard/add-conditions-radiology') }}
  style={{ backgroundImage:"linear-gradient(rgba(8, 27, 133, 1), rgba(8, 27, 133, 0.9))"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
   {loading?"loading..." :"Next"}
  </Button>
</div>
</Container>
    </>
  );
}

export default AddConditionsBloodInv;