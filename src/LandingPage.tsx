import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Paper,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#c62828",
    },
    background: {
      default: "#fff",
    },
  },
});

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nomad Engineer
        </Typography>
        <Button color="inherit">Intro</Button>
        <Button color="inherit">Curriculum</Button>
        <Button color="inherit">Outcomes</Button>
        <Button color="inherit">Q & A</Button>
        <Button color="inherit">Get Started</Button>
      </Toolbar>
    </AppBar>
  );
};

const IntroSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Open Your Remote Life
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Study online, with flexible payment options and the full support of
          industry pros and career mentors.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

const Footer = () => {
  return (
    <Paper sx={{ p: 6, mt: 8 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </Paper>
  );
};

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        {/* Intro Section */}
        <IntroSection />
        {/* Other sections would be here... */}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default LandingPage;
