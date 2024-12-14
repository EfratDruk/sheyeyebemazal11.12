
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import UserForm1 from './UserForm1';
import UserForm2 from './UserForm2';
import UserForm3 from './UsreForm3';


export function useProgress(props:number) {

  const steps = ['Personal-details', 'Aboute-me', 'My-requirments'];
  const [activeStep, setActiveStep] = React.useState(0);
 
  React.useEffect(()=>{
    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
 },[])
 

       return activeStep;         
    
  
}

