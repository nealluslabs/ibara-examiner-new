import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState} from 'react';
import { useNavigate,useLocation, Link } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addSubject, addSubjectReferral, addTeacher} from 'src/redux/actions/group.action';
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

function AddConditionsReferral() {
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
    title,
    body,
    response,
    treatmentId:'wcN8WP6CXlG3SFDzJNsq',
   // treatment:location.state.treatment,
    treatmentCategoryId,
    specific,
    answerImage:''
  }

 
  const addThisInvestigation = async(addObject) => {
    
    if(!title){
      notifyErrorFxn("Please make sure to fill in all fields.")
    }
    else{
    
    setLoading(true)
    dispatch(addSubjectReferral(addObject))
   
    // console.log("identity is",identity)
    // console.log("update this subject is updating.........")
    setTimeout(()=>{setLoading(false)},1800)
    }
  }

  const bloodInvHandlerSub = (e)=>{
    if(!bloodInv.includes(e.target.value)) {
      setBloodInv([...bloodInv,e.target.value])
     
       }
  }


  const bloodInvHandler= (prescriptionString)=>{
    
    const returnArray =  prescriptionString.split(',')
   
    const finalReturnArray = returnArray.map((item)=>(item.trim()))
    //setPrescriptionArray(finalReturnArray)

    setBloodInv([...finalReturnArray])
     
    console.log("our trimmed return array", finalReturnArray)
   
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
              Add Referral:
              </Typography>
             {/* <div style={{height:"2px", width:"80%",borderBottom:"1px solid black",position:"absolute",left:"20rem",top:"18rem"}}></div>*/}
            </Box>
            <br/> <br/> <br/>
        </Grid>
   

     <Grid container spacing={2} style={{margin:"0 auto",width:"60%",padding:"1rem",borderRadius:"3rem"}}>



     <Grid container item xs={12} spacing={1} style={{marginTop:"1rem"}}>
     
         <Grid item xs={1.5} style={{backgroundColor: '#D7DBA5' ,borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}} 
              >
                  
                 
                  <Link to={'/dashboard/add-conditions-bloodinv'}>   
                    <img src={IMG1} style={{marginBottom:"5px",marginLeft:"5px"}} alt="blood inv icon"  />
                 
                    </Link>
                </Grid>
    
       
          <Grid item xs={7}>
          {/*<Select
         style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={icon}
          label="icon"
          onChange={(event) => {
            setTreatmentCategoryId(event.target.value);
          }}
        >
      
            
       {categoryVideos && categoryVideos.length >0 && categoryVideos.filter((me)=>(me.treatmentId === 'wcN8WP6CXlG3SFDzJNsq')).length > 0 ? categoryVideos.filter((me)=>(me.treatmentId === 'wcN8WP6CXlG3SFDzJNsq')).map((kiwi)=>(
  <MenuItem style={{color:"black"}} value={kiwi.uid}>{kiwi.title}</MenuItem>
)):
<MenuItem style={{color:"black"}}  value={null}>{"No items listed!"}</MenuItem>
}
       
       
       
        </Select>*/}
            
            
          </Grid>
        </Grid>



        


        <Grid container item xs={12} spacing={2} style={{marginTop:"1rem"}}>
       
        <Grid item xs={1.5} style={{backgroundColor: '#21D0C3', borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}} 
              >
                  
                  <Link to={'/dashboard/add-conditions-radiology'}>
                    
                    <img src={IMG2} style={{marginBottom:"5px"}} alt="radiology icon"  />
                    </Link>

                </Grid>
       
          <Grid item xs={7}>
            <TextField
            style={{backgroundColor:"#FFFFFF",borderRadius:"0.75rem",width:"100%"}}
            fullWidth
            placeholder=" Add Referral"
            variant="outlined"
            multiline
            maxRows={2}
            value= {title}
           onChange = {(e)=>{setTitle(e.target.value)}}
            />
            
            
          </Grid>
        </Grid>



        <Grid container item xs={12} spacing={2} style={{marginTop:"1rem"}}>
       
        <Grid item xs={1.5} style={{backgroundColor: '#E5EEF9',border:'4.5px solid #4C4E37', borderRadius: '9px', cursor: 'pointer',marginRight:"7rem",marginLeft:"1rem"}} 
              >
                  
                  <Link to={'/dashboard/add-conditions-referral'}>
                    
                    <img src={IMG3} style={{marginBottom:"10px"}} alt="ecg icon"  />
                    </Link>  

                </Grid>
          

         
        
                <Grid item xs={7}>
            <center>
               <Button  onClick={() => { addThisInvestigation(addObject)}}
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
  style={{ backgroundColor: "#081B85"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    Back
  </Button>
 
  <Button   variant="contained" onClick={() => {navigate('/dashboard/home') }}
  style={{ backgroundColor: "#081B85"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
   {loading?"loading..." :"Finish"}
  </Button>
</div>
</Container>
    </>
  );
}

export default AddConditionsReferral;