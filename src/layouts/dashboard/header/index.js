import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Grid, Button } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar2';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import Searchbar2 from './Searchbar2';
import { useSelector } from 'react-redux';
import CustomSearchBar from 'src/components/global/CustomSearchBar';


import  injection from 'src/assets/images/injection.png'
import  settings from'src/assets/images/settings.png'
import patient from'src/assets/images/patient.png'
import doctor from'src/assets/images/doctor.png'
import ibaraLogo from 'src/assets/images/incu.png'

import { Link } from 'react-router-dom';


// ----------------------------------------------------------------------

const NAV_WIDTH = 240;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  backgroundColor: '#5B8DDE',
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <Typography variant="h4" sx={{color: '#000000', fontSize: '36px' }}>
       
        <Link to={"/dashboard/home"}>
        <img  style={{height:"6rem"}} src={ibaraLogo} />
      
        </Link>

         {/* Welcome {user?.firstName + " " + user?.lastName}🖐🏽 */}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
       
       
        <Grid item xs={12} sx={{ display: 'flex',justifyContent:"space-between",gap:"4rem" ,alignItems: 'center' }}>
         <Box sx={{ width: '100%' }}>
          <Link to={"/dashboard/candidate-list"}>
        <img  style={{height:"4rem"}} src={doctor} />
        <p  style={{color:"black"}}>Candidates </p>
        </Link>
          </Box>

          <Box sx={{ width: '100%' }}>
          <Link to={"/dashboard/patient-list"}>
        <img style={{height:"4rem"}}  src={patient} />
        <p style={{color:"black"}}>Patients </p>
        </Link>
          </Box>

          <Box sx={{ width: '100%' }}>
        <img style={{height:"4rem"}}  src={settings} />
        <p style={{color:"black",width:"max-content"}}>Set Conditions </p>
          </Box>

          <Box sx={{ width: '100%' }}>
          <Link to={"/dashboard/treatments"}>
        <img style={{height:"4rem"}}  src={injection} />
        <p style={{color:"black"}}>Treatments </p>
        </Link>
          </Box>
      &nbsp; &nbsp;
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      
      </Box>
        </Grid>


        {/* <Searchbar /> */}
        {/* <Searchbar2 /> */}
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="h6" sx={{color: '#000000', fontSize: '16px' }}>
        Administration &nbsp;
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <NotificationsPopover /> */}
          <AccountPopover />
        </Stack>    
      </StyledToolbar>
    </StyledRoot>
  );
}
