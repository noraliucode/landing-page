import React, { useEffect, useRef } from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Link,
  Paper,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as ScrollLink } from "react-scroll";
import Header from "./components/Header";

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
      <Container maxWidth="md" id="introSection">
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

              <ScrollLink to="curriculumSection" smooth duration={500}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn More
                </Button>
              </ScrollLink>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

const Footer: React.FC = () => {
  return (
    <Paper sx={{ p: 6, mt: 8, backgroundColor: "#424242" }} component="footer">
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{ color: "#fff" }}
      >
        Follow Us
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link
          href="https://www.instagram.com/noraliu.code/"
          target="_blank"
          rel="noopener"
          sx={{
            textDecoration: "none",
            color: "#fff",
            "&:hover": { color: "#bbdefb" },
          }}
        >
          <IconButton color="primary">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://github.com/TheWeb3Frontend"
          target="_blank"
          rel="noopener"
          sx={{
            textDecoration: "none",
            color: "#fff",
            "&:hover": { color: "#bbdefb" },
          }}
        >
          <IconButton color="primary">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>
    </Paper>
  );
};

const CourseContent: React.FC = () => {
  return (
    <div>
      {/* Month 1 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            Month 1: Fundamentals of Web3 and Frontend Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Week 1-2: Introduction to Web3
            <ul>
              <li>
                Overview of Web3, Blockchain, and Decentralized Applications
                (DApps)
              </li>
              <li>
                Understanding Ethereum, Smart Contracts, and Decentralized
                Finance (DeFi)
              </li>
              <li>Basic concepts of cryptocurrency and wallets</li>
            </ul>
            Week 3-4: Basics of Frontend Development
            <ul>
              <li>HTML5 and CSS3 for building web pages</li>
              <li>JavaScript fundamentals</li>
              <li>
                Introduction to React.js (or Vue.js/Angular as alternatives)
              </li>
              <li>Setting up a development environment</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Month 2 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            Month 2: Advanced Frontend Development and Web3 Integration
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Week 5-6: Advanced JavaScript and Frontend Frameworks
            <ul>
              <li>
                Deep dive into React.js components, state management, and hooks
              </li>
              <li>
                Responsive web design and CSS frameworks like Bootstrap or
                Tailwind CSS
              </li>
              <li>Introduction to TypeScript for better code structure</li>
            </ul>
            Week 7-8: Integrating Web3 with Frontend
            <ul>
              <li>Web3.js or Ethers.js libraries to interact with Ethereum</li>
              <li>Connecting a frontend to smart contracts</li>
              <li>
                Handling cryptocurrency transactions and wallet integration
              </li>
              <li>Building a simple DApp interface</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Month 3 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            Month 3: Real-world Applications and Project Work
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Week 9-10: Building a Complete DApp
            <ul>
              <li>Project: Develop a basic Decentralized Application</li>
              <li>Implementing smart contract interactions</li>
              <li>Integrating frontend with blockchain functionality</li>
              <li>Testing and debugging DApps</li>
            </ul>
            Week 11-12: Advanced Topics and Course Conclusion
            <ul>
              <li>
                Advanced Web3 concepts: Oracles, Layer 2 solutions, and
                cross-chain functionality
              </li>
              <li>Security best practices in DApps</li>
              <li>Performance optimization</li>
              <li>
                Final project: Building a comprehensive DApp incorporating
                learned concepts
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Supplementary Resources and Evaluation */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Supplementary Resources and Evaluation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Supplementary Resources:
            <ul>
              <li>Weekly coding exercises and assignments</li>
              <li>Guest lectures from industry experts</li>
              <li>Online resources and communities for support</li>
              <li>Continuous assessment through quizzes and mini-projects</li>
            </ul>
            Evaluation:
            <ul>
              <li>Regular assessments after each module</li>
              <li>Final project evaluation</li>
              <li>
                Peer reviews and code sharing sessions for collaborative
                learning
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const CurriculumSection = () => {
  return (
    <Container maxWidth="md" id="curriculumSection">
      <Box py={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Curriculum - The Path to Becoming a Web3 Engineer
        </Typography>
        <CourseContent />
      </Box>
    </Container>
  );
};

const OutcomesSection = () => {
  return (
    <Container maxWidth="md" id="outcomesSection">
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
    <Container maxWidth="md" id="faqSection">
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
    <Container maxWidth="md" id="getStartedSection">
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

const AboutSection = () => {
  return (
    <Container
      maxWidth="md"
      id="aboutSection"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
          <Box
            component="img"
            sx={{
              height: 200,
              width: 200,
              borderRadius: "50%", // Creates the circle shape
            }}
            alt="Your Name"
            src="/assets/about.jpg" // Replace with your image path
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" gutterBottom>
            About The Mentor
          </Typography>
          <Typography variant="subtitle1" paragraph>
            a career switcher with over seven years of experience in React and
            React Native development, successfully pivoted into the Web3 space,
            joining a startup and securing a 1.5 million TWD offer within three
            years. My expertise lies in React and Web3 application development.
            {/* Add more personal details or professional information here */}
          </Typography>
          {/* You can add more paragraphs or elements as needed */}
        </Grid>
      </Grid>
    </Container>
  );
};

const LandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <IntroSection />
        <AboutSection />
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
