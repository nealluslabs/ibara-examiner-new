import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState,useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addTeacher,addComplaint, fetchAllTreatmentTests, fetchAllCategories} from 'src/redux/actions/group.action';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import users from 'src/_mock/user';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function AddTeacher() {
  const navigate = useNavigate();
  const location = useLocation()
 // console.log("location is",location.state.levelName,location.state.uid)

  
  const dispatch = useDispatch();




  const [loading,setLoading] = useState(false)

  const [firstName,setFirstName] =useState('')


  const [complaint,setComplaint] = useState('')
  const [bloodInvestigation,setBloodInvestigation] = useState('')
  const [referral,setReferral] = useState('')
  const [prescription,setPrescription] = useState('')
  const [radiology,setRadiology] = useState('')
  const [intervention,setIntervention]=useState('')

  const { teachers } = useSelector((state) => state.jobs);

 const [teachersArr,setTeacherArr]=useState([...teachers.map((item)=>(item.firstName + " " + item.lastName))])
 
 const { allCategories,allTreatmentTests } = useSelector((state) => state.group);
 console.log("all treatments  ARRE:",allCategories)
 console.log("all tests are ",allTreatmentTests)

  const { user } = useSelector((state) => state.auth);

  console.log("user details are:",user)

  useEffect(()=>{
    dispatch(fetchAllCategories())
    dispatch(fetchAllTreatmentTests())
  },[])


  const addObject ={
    complaint,
    bloodInvestigation,
    referral,
    prescription,
    radiology,
    intervention
  }

  const addThisComplaint = async(addObject,navigate) => {
    
    if(!intervention||!complaint||!bloodInvestigation||!referral || !prescription ||!radiology ){
      notifyErrorFxn("Please make sure to fill in all fields.")
    }
    else{
    
    setLoading(true)
    dispatch(addComplaint(addObject,navigate))
   
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



    <h1 style={{position:"relative",fontWeight:"bold",marginBottom:"40px",fontSize:"30px"}}>NEW COMPLAINT</h1>

    <Grid item xs={12} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              ADD COMPLAINT BELOW
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
               COMPLAINT NAME
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
            <TextField
            fullWidth
            placeholder=" enter complaint."
            variant="outlined"
            multiline
            maxRows={2}
            value= {complaint}
            onChange = {(e)=>{setComplaint(e.target.value)}}
            
            />
            
            
          </Grid>
        </Grid>




        <Grid item xs={12} sx={{ display: 'flex',position:"relative",marginTop:"2rem",width:"22rem" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              ADD TREATMENT
              </Typography>
             
            </Box>
            <br/> <br/> <br/>
        </Grid>


       {allCategories.length > 0 && allCategories.map((item)=> (

<Grid container item xs={12} spacing={2}>
<Grid item xs={3}>
  <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
   <div >
   {item.title.toUpperCase()}
   </div>

  </Typography>

</Grid>

<Grid item xs={7}>
<Select
style={{width:"100%"}}
labelId="demo-simple-select-label"
id="demo-simple-select"
value={bloodInvestigation}
label="bloodInvestigation"
onChange={(event) => {
  setBloodInvestigation(event.target.value);
}}
>
{allTreatmentTests && allTreatmentTests.length >0 && allTreatmentTests.filter((me)=>(me.treatmentId === item.uid)).length > 0 ? allTreatmentTests.filter((me)=>(me.treatmentId === item.uid)).map((kiwi)=>(
  <MenuItem value={kiwi}>{kiwi.title}</MenuItem>
)):
<MenuItem value={null}>{"No items listed!"}</MenuItem>
}

</Select>
</Grid>

</Grid>

       ))
       }





 {/*
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             BLOOD INVESTIGATION
             </div>
      
            </Typography>
          
          </Grid>
 
          <Grid item xs={7}>
          <Select
         style={{width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bloodInvestigation}
          label="bloodInvestigation"
          onChange={(event) => {
            setBloodInvestigation(event.target.value);
          }}
        >
        {teachersArr.length >0  && teachersArr.map((item)=>(
            <MenuItem value={item}>{item}</MenuItem>
        ))}
       
        </Select>
        </Grid>

        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             RADIOLOGY
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
          <Select
         style={{width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={radiology}
          label="Radiology"
          onChange={(event) => {
            setRadiology(event.target.value);
          }}
        >
        {teachersArr.length >0  && teachersArr.map((item)=>(
            <MenuItem value={item}>{item}</MenuItem>
        ))}
       
        </Select>
        </Grid>

        </Grid>


   
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             INTERVENTIONS
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
          <Select
         style={{width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={intervention}
          label="Intervention"
          onChange={(event) => {
            setIntervention(event.target.value);
          }}
        >
        {teachersArr.length >0  && teachersArr.map((item)=>(
            <MenuItem value={item}>{item}</MenuItem>
        ))}
       
        </Select>
        </Grid>

        </Grid>



        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             REFERRALS
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={7}>
          <Select
         style={{width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={referral}
          label="Referral"
          onChange={(event) => {
            setReferral(event.target.value);
          }}
        >
        {teachersArr.length >0  && teachersArr.map((item)=>(
            <MenuItem value={item}>{item}</MenuItem>
        ))}
       
        </Select>
        </Grid>

        </Grid>
*/}

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography  style={{display:"flex",alignItems:"center",justifyContent:"center"}}variant="p" component="p">
             <div >
             PRESCRIPTIONS
             </div>
      
            </Typography>
          
          </Grid>

          <Grid item xs={2}>
            <TextField
            fullWidth
            placeholder=""
            variant="outlined"
            multiline
            maxRows={3}
            value= {prescription}
            onChange = {(e)=>{setPrescription(e.target.value)}}
            
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
            fullWidth
            placeholder=""
            variant="outlined"
            multiline
            maxRows={3}
            value= {prescription}
            onChange = {(e)=>{setPrescription(e.target.value)}}
            
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
            fullWidth
            placeholder=""
            variant="outlined"
            multiline
            maxRows={3}
            value= {prescription}
            onChange = {(e)=>{setPrescription(e.target.value)}}
            
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
 
  <Button  onClick={() => { addThisComplaint(addObject,navigate)}} variant="contained" 
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