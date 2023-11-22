import React, { useEffect, useRef } from "react";
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
  CardActions,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";

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
          TheWeb3Frontend
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
    <Box
      style={{
        backgroundImage: "url(/assets/alvados.jpg)",
        backgroundSize: "cover",
        color: "black", // Adjust text color for readability
        height: "65vh",
      }}
    >
      <Container maxWidth="md">
        <Box py={4}>
          {" "}
          {/* Optional overlay */}
          <Container maxWidth="md">
            <Box py={4}>
              <Typography variant="h4" component="h2" gutterBottom>
                Start Your Remote Life
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Study online, with flexible payment options and the full support
                of industry pros and career mentors.
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
        </Box>
      </Container>
    </Box>
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
  // Explicitly define the type of the ref as HTMLDivElement
  const scriptContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the ref is attached to a DOM element
    if (scriptContainerRef.current) {
      // Create a script element
      const script = document.createElement("script");
      script.src = "https://noraliu.ck.page/729c4aa5ae/index.js";
      script.async = true;
      script.dataset.uid = "729c4aa5ae";

      // Append the script to the ref container
      scriptContainerRef.current.appendChild(script);

      // Clean up
      return () => {
        if (scriptContainerRef.current) {
          scriptContainerRef.current.removeChild(script);
        }
      };
    }
  }, []);

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
        <Container maxWidth="md">
          <Box py={4} textAlign="center">
            {/* Other content */}
            <div ref={scriptContainerRef}></div>{" "}
            {/* Script will be loaded here */}
          </Box>
        </Container>
        <div ref={scriptContainerRef}></div> {/* Script will be loaded here */}
      </Box>
    </Container>
  );
};

const EventSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Web3 Events
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src="/assets/web3-event.jpg"
              alt="Web3 Event"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography gutterBottom variant="h5" component="div">
              Global Web3 Conference
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join the leading minds in the Web3 space to discuss the future of
              the internet.
            </Typography>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const HackathonSection = () => {
  return (
    <Container maxWidth="md">
      <Box py={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Hackathon in Foreign Countries
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography gutterBottom variant="h5" component="div">
              International Hackathon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Collaborate with international developers to build the next big
              Web3 innovation.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <img
              src="/assets/hackathon.jpg"
              alt="Hackathon Event"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
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
        <EventSection />
        <HackathonSection />
        <OutcomesSection />
        <FAQSection />
        <GetStartedSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default LandingPage;
