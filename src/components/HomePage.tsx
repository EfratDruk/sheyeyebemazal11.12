// import react from 'react'

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid2';
// import Stack from '@mui/material/Stack';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Stepper from '@mui/material/Stepper';
// import Typography from '@mui/material/Typography';
// import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
// import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
// import AppTheme from '../theme/AppTheme';
// import UserForm1 from './UserForm1';
// import UserForm2 from './UserForm2';
// import UserForm3 from './UsreForm3';
// import { Gender } from '../models/enums';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import ManForm from './ManForm';
// import WomanForm from './WomanForm';
// import HerForm from './HerForm';
// import HisForm from './HisForm';
// import ManList from './manList';
// import WomanList from './womanList';
// import { useNavigate } from 'react-router-dom';
// // import InfoMobile from './components/InfoMobile';
// // import Review from './components/Review';
// // import SitemarkIcon from './components/SitemarkIcon';
// // import ColorModeIconDropdown from './theme/ColorModeIconDropdown';

// export default function HomePage(props: { disableCustomTheme?: boolean }) {

//   const steps = ['Personal-details', 'Aboute-me', 'More', 'more2', 'My-requirments'];
//   const user = useSelector((state: RootState) => state.user);
//   console.log("user", user);
//   const navigate=useNavigate();


// //   function getStepContent(step: number) {
// //     switch (step) {
// //       case 0:
// //         return <UserForm1 />;
// //       case 1:
// //         return <UserForm2 />;
// //       case 2:
// //         return <UserForm3 />
// //       case 3:
// //         if (user.user?.gender === 'MAN') {
// //           return <ManForm />
// //         }
// //         return <WomanForm />
// //       case 4:
// //         if (user.user?.gender === 'MAN') {
// //           return <HisForm />
// //         }
// //         return <HerForm />
// //         case 5:
// //           if (user.user?.gender === 'MAN') {
// //             return <ManList />
// //           }
// //           return <WomanList />


// //       default:
// //         throw new Error('Unknown step');
// //     }
// //   }
//   // const[isFormValid, setIsFormValid]=React.useState(false);  

//   const [navbar, setNavbar] = React.useState(0);
//   const handleNext = () => {
//     setNavbar(navbar + 1);
//   };
//   const handleBack = () => {
//     setNavbar(navbar - 1);
//   };


//   return (
//     <AppTheme {...props}>
//       <CssBaseline enableColorScheme />
//       <Box sx={{ position: 'fixed', top: '1rem', right: '1rem' }}>
//         {/* <ColorModeIconDropdown /> */}
//       </Box>

//       <Grid
//         container
//         sx={{
//           height: {
//             xs: '100%',
//             sm: 'calc(100dvh - var(--template-frame-height, 0px))',
//           },
//           mt: {
//             xs: 4,
//             sm: 0,
//           },
//         }}
//       >
//         <Grid
//           size={{ xs: 12, sm: 5, lg: 4 }}
//           sx={{
//             display: { xs: 'none', md: 'flex' },
//             flexDirection: 'column',
//             backgroundColor: 'background.paper',
//             borderRight: { sm: 'none', md: '1px solid' },
//             borderColor: { sm: 'none', md: 'divider' },
//             alignItems: 'start',
//             pt: 16,
//             px: 10,
//             gap: 4,
//           }}
//         >
//           {/* <SitemarkIcon /> */}
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               flexGrow: 1,
//               width: '100%',
//               maxWidth: 500,
//             }}
//           >
//           </Box>
//         </Grid>
//         <Grid
//           size={{ sm: 12, md: 7, lg: 8 }}
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             maxWidth: '100%',
//             width: '100%',
//             backgroundColor: { xs: 'transparent', sm: 'background.default' },
//             alignItems: 'start',
//             pt: { xs: 0, sm: 16 },
//             px: { xs: 2, sm: 10 },
//             gap: { xs: 4, md: 8 },
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: { sm: 'space-between', md: 'flex-end' },
//               alignItems: 'center',
//               width: '100%',
//               maxWidth: { sm: '100%', md: 600 },
//             }}
//           >
//             <Box
//               sx={{
//                 display: { xs: 'none', md: 'flex' },
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-end',
//                 flexGrow: 1,
//               }}
//             >
//               <Stepper
//                 id="desktop-stepper"
//                 navbar={navbar}
//                 sx={{ width: '100%', height: 40 }}
//               >
//                 {steps.map((label) => (
//                   <Step
//                     sx={{ ':first-of-type': { pl: 0 }, ':last-child': { pr: 0 } }}
//                     key={label}
//                   >
//                     <StepLabel>{label}</StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Box>
//           </Box>
//           <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
//             <CardContent
//               sx={{
//                 display: 'flex',
//                 width: '100%',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//               }}
//             >
//               <div>
//                 <Typography variant="subtitle2" gutterBottom>
//                   Selected products
//                 </Typography>

//               </div>
//             </CardContent>
//           </Card>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               flexGrow: 1,
//               width: '100%',
//               maxWidth: { sm: '100%', md: 600 },
//               maxHeight: '720px',
//               gap: { xs: 5, md: 'none' },
//             }}
//           >
//             <Stepper
//               id="mobile-stepper"
//               navbar={navbar}
//               alternativeLabel
//               sx={{ display: { sm: 'flex', md: 'none' } }}
//             >
//               {steps.map((label) => (
//                 <Step
//                   sx={{
//                     ':first-of-type': { pl: 0 },
//                     ':last-child': { pr: 0 },
//                     '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
//                   }}
//                   key={label}
//                 >
//                   <StepLabel
//                     sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
//                   >
//                     {label}
//                   </StepLabel>
//                 </Step>
//               ))}
//             </Stepper>
//             {navbar === steps.length ? (
//               // <ManList/>
//               <Stack spacing={2} useFlexGap>
//                 {/* <Typography variant="h1">📦</Typography> */}
//                 <Typography variant="h5">הפרטים הושלמו בהצלחה!</Typography>
//                 <Typography variant="body1" sx={{ color: 'text.secondary' }}>
//                   תוכל לעדכן או למחוק את הנתונים שלך בדף הבא
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
//                 //   onClick={handleDetails}
//                 >
//                   הפרטים שלי
//                 </Button>
//               </Stack>
//             ) : (
//               <React.Fragment>
//                 {/* {getStepContent(navbar)} */}
//                 <Box
//                   sx={[
//                     {
//                       display: 'flex',
//                       flexDirection: { xs: 'column-reverse', sm: 'row' },
//                       alignItems: 'end',
//                       flexGrow: 1,
//                       gap: 1,
//                       pb: { xs: 12, sm: 0 },
//                       mt: { xs: 2, sm: 0 },
//                       mb: '60px',
//                     },
//                     navbar !== 0
//                       ? { justifyContent: 'space-between' }
//                       : { justifyContent: 'flex-end' },
//                   ]}
//                 >
//                   {navbar !== 0 && (
//                     <Button
//                       startIcon={<ChevronLeftRoundedIcon />}
//                       onClick={handleBack}
//                       variant="text"
//                       sx={{ display: { xs: 'none', sm: 'flex' } }}
//                     >
//                       Previous
//                     </Button>
//                   )}
//                   {navbar !== 0 && (
//                     <Button
//                       startIcon={<ChevronLeftRoundedIcon />}
//                       onClick={handleBack}
//                       variant="outlined"
//                       fullWidth
//                       sx={{ display: { xs: 'flex', sm: 'none' } }}
//                     >
//                       Previous
//                     </Button>
//                   )}
//                   <Button
//                     // type='submit'
//                     variant="contained"
//                     endIcon={<ChevronRightRoundedIcon />}
//                     onClick={handleNext}
//                     sx={{ width: { xs: '100%', sm: 'fit-content' } }}
//                   >
//                     {navbar === steps.length - 1 ? 'Place order' : 'Next'}
//                   </Button>
//                 </Box>
//               </React.Fragment>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </AppTheme>
//   );
// }

// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Paper } from '@mui/material';
// import { Link } from 'react-router-dom';

// function HomePage() {
//   return (
//     <div>
//       {/* Navbar */}
//       <AppBar position="sticky" color="primary">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             דף הבית
//           </Typography>
//           <Button color="inherit" component={Link} to="/">בית</Button>
//           <Button color="inherit" component={Link} to="/about">אודות</Button>
//           <Button color="inherit" component={Link} to="/contact">צור קשר</Button>
//         </Toolbar>
//       </AppBar>

//       {/* Main Content */}
//       <Box sx={{ mt: 4 }}>
//         <Container>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <Paper elevation={3} sx={{ padding: 3 }}>
//                 <Typography variant="h4" gutterBottom>
//                 אודות
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   זהו דף הבית של האתר שלנו. כאן תוכל למצוא מידע על השירותים שלנו, לקרוא עלינו, או ליצור קשר. אנחנו מציעים מגוון שירותים איכותיים ומקצועיים.
//                 </Typography>
//                 <Button variant="contained" color="primary" component={Link} to="/services">
//                   למד עוד
//                 </Button>
//               </Paper>
//             </Grid>
//             {/* <Grid item xs={12} md={6}>
//               <Paper elevation={3} sx={{ padding: 3 }}>
//                 <Typography variant="h4" gutterBottom>
//                   השירותים שלנו
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   אנו מציעים מגוון רחב של שירותים המיועדים לעזור לך להשיג את המטרות שלך. בין אם מדובר בשירותים טכנולוגיים, ייעוץ או עיצוב, אנחנו כאן כדי לעזור לך.
//                 </Typography>
//                 <Button variant="outlined" color="primary" component={Link} to="/services">
//                   צפה בשירותים
//                 </Button>
//               </Paper>
//             </Grid> */}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Footer */}
//       <Box sx={{ mt: 4, py: 2, bgcolor: '#f5f5f5' }}>
//         <Container>
//           <Typography variant="body2" color="textSecondary" align="center">
//             כל הזכויות שמורות © 2024
//           </Typography>
//         </Container>
//       </Box>
//     </div>
//   );
// }

// export default HomePage;


import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';

// יצירת תמה מותאמת אישית עם צבעים רכים
const theme = createTheme({
  
  palette: {
    primary: {
      main: '#F6A5C0', // צבע פסטל 
    },
    secondary: {
      main: '#FFC1E3', // צבע פסטל נוסף
    },
    background: {
      default: '#fff7f8', // צבע רקע בהיר ועדין
    },
  },
});

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Navbar */}
        <NavBar></NavBar>

        {/* <AppBar position="sticky" color="primary">
          <Toolbar>
          <img src="./img/שיהיה במזל.png" alt="Engagement Rings" style={{ width: 'auto', height: '100px' }} />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              שיהיה במזל 
            </Typography>
            <Typography variant="h1"></Typography> 
            <Button color="inherit" component={Link} to="/">בית</Button>
            <Button color="inherit" component={Link} to="/SignIn">התחבר</Button>
            {/* <Button color="inherit" component={Link} to="/contact">צור קשר</Button> */}
          {/* </Toolbar>
        </AppBar>  */} 

         {/* Main Content */}
        <Box sx={{ mt: 4, backgroundColor: '#fff', py: 6 }}>
          <Container >
            <Typography variant="h3" align="center"  gutterBottom sx={{ color: '#F6A5C0' }}>
              ברוכים הבאים לאתר שלנו
            </Typography>
            <Typography variant="h5" align="center" paragraph sx={{ color: '#333' }}>
              אנחנו כאן לעזור לכם למצוא את בן/בת הזוג המושלם/ת, בעזרת שירות אישי ומקצועי, מלא באהבה.
            </Typography>

            <Grid container spacing={4} sx={{ display: 'flex' }}>
              {/* כרטיסים לשירותים/הצעות */}
              <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./img/gold-ring.png"  
                    alt="Wedding"
                  />
                  <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                      מציאת בן/בת זוג
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      שירות מקצועי וממוקד למציאת בן/בת זוג מתאים לפי דרישות והעדפות אישיות.
                    </Typography>
                    <Button variant="outlined" color="primary" component={Link} to="/matchmaking">
                      קרא עוד
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
             
              {/* כרטיסים לשירותים/הצעות */}
              <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./img/canva-ring.png" // דוגמת תמונה
                    alt="Wedding"
                  />
                  <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                        הזוגות שלנו
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      מוזמנים להצטרף
                    </Typography>
                    <Button variant="outlined" color="primary" component={Link} to="/matchmaking">
                      קרא עוד
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ py: 2, bgcolor: '#FFC1E3' }}>
          <Container>
            <Typography variant="body2" color="textSecondary" align="center">
              כל הזכויות שמורות © 2024 - האתר שלנו
            </Typography>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;


