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
import AppTheme from '../theme/AppTheme';
import UserForm1 from './UserForm1';
import UserForm2 from './UserForm2';
import UserForm3 from './UsreForm3';
import { Gender } from '../models/enums';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ManForm from './ManForm';
import WomanForm from './WomanForm';
import HerForm from './HerForm';
import HisForm from './HisForm';
import ManList from './manList';
import WomanList from './womanList';
import { useNavigate } from 'react-router-dom';
// import InfoMobile from './components/InfoMobile';
// import Review from './components/Review';
// import SitemarkIcon from './components/SitemarkIcon';
// import ColorModeIconDropdown from './theme/ColorModeIconDropdown';

export default function SignUpOld(props: { disableCustomTheme?: boolean }) {

  const steps = ['Personal-details', 'Aboute-me', 'More', 'more2', 'My-requirments'];
  const user = useSelector((state: RootState) => state.user);
  console.log("user", user);
  const navigate=useNavigate();

  // const [formData, setFormData]=React.useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   gender: '',
  //   license: '',
  //   residence: '',
  //   status: '',
  //   city: '',
  //   country: '',
  //   phon: '',
  //   //address: '',
  //   type_phon: '',
  //   budget: 0,
  //   height: 0.0,
  //   countryOfOrigin:'',
  // });

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <UserForm1 />;
      case 1:
        return <UserForm2 />;
      case 2:
        return <UserForm3 />
      case 3:
        if (user.user?.gender === 'MAN') {
          return <ManForm />
        }
        return <WomanForm />
      case 4:
        if (user.user?.gender === 'MAN') {
          return <HisForm />
        }
        return <HerForm />
        case 5:
          if (user.user?.gender === 'MAN') {
            return <ManList />
          }
          return <WomanList />


      default:
        throw new Error('Unknown step');
    }
  }
  // const[isFormValid, setIsFormValid]=React.useState(false);  
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleDetails = () => {
    console.log("i am here", user.user?.gender);
    
    if (user.user?.gender === 'MAN') {
      const filterId=user.user.id;
      navigate('/ManList',{ state: { filterId } });
      // return <ManList filterId={user.user.id}/>
    }
    else{
    navigate('/WomanList');
    // return <WomanList filterId={user.user?.id} />
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box sx={{ position: 'fixed', top: '1rem', right: '1rem' }}>
        {/* <ColorModeIconDropdown /> */}
      </Box>

      <Grid
        container
        sx={{
          height: {
            xs: '100%',
            sm: 'calc(100dvh - var(--template-frame-height, 0px))',
          },
          mt: {
            xs: 4,
            sm: 0,
          },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 16,
            px: 10,
            gap: 4,
          }}
        >
          {/* <SitemarkIcon /> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >
          </Box>
        </Grid>
        <Grid
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexGrow: 1,
              }}
            >
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{ width: '100%', height: 40 }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{ ':first-of-type': { pl: 0 }, ':last-child': { pr: 0 } }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
            <CardContent
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Selected products
                </Typography>

              </div>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
            <Stepper
              id="mobile-stepper"
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: 'flex', md: 'none' } }}
            >
              {steps.map((label) => (
                <Step
                  sx={{
                    ':first-of-type': { pl: 0 },
                    ':last-child': { pr: 0 },
                    '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}
                >
                  <StepLabel
                    sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              // <ManList/>
              <Stack spacing={2} useFlexGap>
                {/* <Typography variant="h1">📦</Typography> */}
                <Typography variant="h5">הפרטים הושלמו בהצלחה!</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  תוכל לעדכן או למחוק את הנתונים שלך בדף הבא
                </Typography>
                <Button
                  variant="contained"
                  sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
                  onClick={handleDetails}
                >
                  הפרטים שלי
                </Button>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box
                  sx={[
                    {
                      display: 'flex',
                      flexDirection: { xs: 'column-reverse', sm: 'row' },
                      alignItems: 'end',
                      flexGrow: 1,
                      gap: 1,
                      pb: { xs: 12, sm: 0 },
                      mt: { xs: 2, sm: 0 },
                      mb: '60px',
                    },
                    activeStep !== 0
                      ? { justifyContent: 'space-between' }
                      : { justifyContent: 'flex-end' },
                  ]}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{ display: { xs: 'none', sm: 'flex' } }}
                    >
                      Previous
                    </Button>
                  )}
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="outlined"
                      fullWidth
                      sx={{ display: { xs: 'flex', sm: 'none' } }}
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    // type='submit'
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    type='submit'
                    onClick={handleNext}
                    sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </AppTheme>
  );
}

