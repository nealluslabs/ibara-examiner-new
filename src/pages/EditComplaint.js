import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState,useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { addLesson,updateLesson} from 'src/redux/actions/group.action';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';
import users from 'src/_mock/user';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function EditComplaint() {
  const navigate = useNavigate();
  const location = useLocation()
 
 
  const dispatch = useDispatch();

  const [newPassword,setNewPassword] =useState('')
  const [confirmPassword,setConfirmPassword] =useState('')
  const [companySize,setCompanySize] =useState('')

  const [loading,setLoading] =useState(false)

  const {complaintInfo} = useSelector((state) => state.group)
  const { user } = useSelector((state) => state.auth);
 
  

 
  
  useEffect(()=>{

    console.log("INFO FOR THE SELECTED  complaint IS ",complaintInfo)
 
   },[])





  const updateThisComplaint= (uid,updateObject) => {
    setLoading(true)
    dispatch(updateLesson(uid,updateObject))

    setTimeout(()=>{setLoading(false)},1000)
   // setTimeout(()=>{},1000)
   
  }


  const [stateObject,setStateObject]=useState(
    {
     complaint:complaintInfo && complaintInfo.complaint?complaintInfo.complaint:" ",
     'Blood Investigation':complaintInfo && complaintInfo.treatment.bloodInvestigation ?complaintInfo.treatment.bloodInvestigation:" ",
     'Referrals':complaintInfo && complaintInfo.treatment.referral ?complaintInfo.treatment.referral:" ",
    'Radiology':complaintInfo && complaintInfo.treatment.radiology ?complaintInfo.treatment.radiology:" ",
    'Prescription':complaintInfo && complaintInfo.treatment.prescription ?complaintInfo.treatment.prescription:" ",
     prescription1:complaintInfo && complaintInfo.treatment.prescription1 ?complaintInfo.treatment.prescription1:" ",
     prescription2:complaintInfo && complaintInfo.treatment.prescription2 ?complaintInfo.treatment.prescription2:" ",
     prescription3:complaintInfo && complaintInfo.treatment.prescription3 ?complaintInfo.treatment.prescription3:" ",
     ECG:complaintInfo && complaintInfo.treatment.ecg ?complaintInfo.treatment.ecg:" ",
        }
  )


  console.log("our experiment",Object.values(stateObject)[Object.keys(stateObject).indexOf(('Radiology'))])
   console.log("our experiment values",Object.values(stateObject)[1])

  const updateObject ={
    ...stateObject
  }

  console.log("our state OBJECT-->",stateObject)

  const { teachers } = useSelector((state) => state.jobs);

 const [teachersArr,setTeacherArr]=useState([...teachers.map((item)=>(item.firstName + " " + item.lastName))])
 
 const { allCategories,allTreatmentCategories } = useSelector((state) => state.group);


  return (
    <>
    <Container maxWidth="xl">



    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6rem"}}>
       
      
       </div>



    <h1 style={{position:"relative",fontWeight:"bold",marginBottom:"40px",fontSize:"30px"}}>NEW COMPLAINT</h1>

    <Grid item xs={12} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              EDIT COMPLAINT BELOW
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
            name="complaint"
          
            value= {stateObject.complaint}
            onChange = {(e)=>{setStateObject({
              ...stateObject,
              [e.target.name]:e.target.value})}}
            
            />
            
            
          </Grid>
        </Grid>




        <Grid item xs={12} sx={{ display: 'flex',position:"relative",marginTop:"2rem",width:"22rem" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              EDIT TREATMENT
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
value={Object.values(stateObject)[Object.keys(stateObject).indexOf((item.title))]>-1 && Object.values(stateObject)[Object.keys(stateObject).indexOf((item.title))].title}
placeholder={Object.values(stateObject)[Object.keys(stateObject).indexOf((item.title))]>-1 && Object.values(stateObject)[Object.keys(stateObject).indexOf((item.title))].title}
name={item.title}       

onChange = {(e)=>{setStateObject({
  ...stateObject,
  [e.target.name]:e.target.value.title})}}


>
{allTreatmentCategories && allTreatmentCategories.length >0 && allTreatmentCategories.filter((me)=>(me.treatmentId === item.uid)).length > 0 ? allTreatmentCategories.filter((me)=>(me.treatmentId === item.uid)).map((kiwi)=>(
  <MenuItem value={kiwi}>{kiwi.title}</MenuItem>
)):
<MenuItem value={null}>{"No items listed!"}</MenuItem>
}

</Select>
</Grid>

</Grid>

       ))
       }



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
            value= {stateObject.prescription1}
            onChange = {(e)=>{setStateObject(
              {...stateObject,
              prescription1:e.target.value
              }
              )}}
            
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
            fullWidth
            placeholder=""
            variant="outlined"
            multiline
            maxRows={3}
            value= {stateObject.prescription2}
            onChange = {(e)=>{setStateObject(
              {...stateObject,
              prescription2:e.target.value
              }
              )}}
            
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
            fullWidth
            placeholder=""
            variant="outlined"
            multiline
            maxRows={3}
            value= {stateObject.prescription3}
            onChange = {(e)=>{setStateObject(
              {...stateObject,
              prescription3:e.target.value
              }
              )}}
            
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
 
  <Button  onClick={() => { updateThisComplaint(updateObject,navigate)}} variant="contained" 
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

export default EditComplaint;