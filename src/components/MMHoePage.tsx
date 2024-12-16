import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export function MMHomePage() {
  return (
    <div>
      {/* Navbar */}
      <NavBar></NavBar>
      {/* <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            דף הבית
          </Typography>
          <Button color="inherit" component={Link} to="/ManList">רשימת בחורים</Button>
          <Button color="inherit" component={Link} to="/WomanList">רשימת בחורות</Button>
          <Button color="inherit" component={Link} to="/AdjustmentList">הצעות</Button>
        </Toolbar>
      </AppBar> */}

      {/* Main Content */}
      <Box sx={{ mt: 4 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" gutterBottom>
                אודות
                </Typography>
                <Typography variant="body1" paragraph>
                  זהו דף הבית של האתר שלנו. כאן תוכל למצוא מידע על השירותים שלנו, לקרוא עלינו, או ליצור קשר. אנחנו מציעים מגוון שירותים איכותיים ומקצועיים.
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/services">
                  למד עוד
                </Button>
              </Paper>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" gutterBottom>
                  השירותים שלנו
                </Typography>
                <Typography variant="body1" paragraph>
                  אנו מציעים מגוון רחב של שירותים המיועדים לעזור לך להשיג את המטרות שלך. בין אם מדובר בשירותים טכנולוגיים, ייעוץ או עיצוב, אנחנו כאן כדי לעזור לך.
                </Typography>
                <Button variant="outlined" color="primary" component={Link} to="/services">
                  צפה בשירותים
                </Button>
              </Paper>
            </Grid> */}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ mt: 4, py: 2, bgcolor: '#f5f5f5' }}>
        <Container>
          <Typography variant="body2" color="textSecondary" align="center">
            כל הזכויות שמורות © 2024
          </Typography>
        </Container>
      </Box>
    </div>
  );
}



