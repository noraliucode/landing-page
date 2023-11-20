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
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

const CurriculumSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Curriculum - The Path to Becoming a Web3 Engineer
        </Typography>
        <Grid container spacing={2}>
          {/* Example card for part of the curriculum */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="contemplative reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Participate in Open Source Projects
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get hands-on experience by contributing to real-world
                    software.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* You can add more cards for different parts of the curriculum */}
        </Grid>
      </Box>
    </Container>
  );
};

const OutcomesSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Outcomes - Your Future After the Bootcamp
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Learn what you'll be able to achieve after completing the bootcamp and
          how it will propel your career forward.
        </Typography>
        {/* Additional content and imagery would go here */}
      </Box>
    </Container>
  );
};

const FAQSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <div>
          {/* Example accordion for FAQ item */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is Web3?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Web3 refers to the new iteration of the World Wide Web based on
                blockchain technology, featuring decentralization and
                token-based economics.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* More accordions for additional FAQs */}
        </div>
      </Box>
    </Container>
  );
};

const GetStartedSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4} textAlign="center">
        <Typography variant="h4" component="h2" gutterBottom>
          Get Started - Join the Bootcamp
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Ready to take the next step in your career? Join our Web3 Frontend
          Engineering Bootcamp today.
        </Typography>

        <form noValidate autoComplete="off">
          <Box display="flex" justifyContent="center" mt={2}>
            <TextField label="Email Address" variant="outlined" />
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ marginLeft: 16 }}
            >
              Get Started
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <IntroSection />
        <CurriculumSection />
        <OutcomesSection />
        <FAQSection />
        <GetStartedSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default LandingPage;
