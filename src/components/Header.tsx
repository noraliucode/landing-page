import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export const HEADER_HEIGHT = 56;

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const DrawerLink = ({ to, children }: { to: string; children: string }) => (
    <ScrollLink
      to={to}
      smooth
      duration={500}
      onClick={handleDrawerToggle}
      offset={-HEADER_HEIGHT}
    >
      <ListItem
        sx={{
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f0f0f0", // Change as needed
          },
        }}
      >
        {children}
      </ListItem>
    </ScrollLink>
  );

  const LinksInfo = [
    { text: "Intro", to: "introSection" },
    { text: "About", to: "aboutSection" },
    { text: "Curriculum", to: "curriculumSection" },
    { text: "Outcomes", to: "outcomesSection" },
    { text: "Q & A", to: "faqSection" },
    { text: "Get Started", to: "getStartedSection" },
  ];

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TheWeb3Frontend
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Desktop Links */}
          {LinksInfo.map((link, index) => (
            <ScrollLink
              to={link.to}
              smooth
              duration={500}
              key={link.text}
              offset={-HEADER_HEIGHT}
            >
              <Button color="inherit">{link.text}</Button>
            </ScrollLink>
          ))}
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {/* Mobile Links */}
          {LinksInfo.map((link, index) => (
            <DrawerLink to={link.to} key={link.text}>
              {link.text}
            </DrawerLink>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
