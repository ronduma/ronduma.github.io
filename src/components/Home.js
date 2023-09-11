import React from 'react'
import '../App.css';

// router
import { Link } from 'react-router-dom';

// components
import Navbar from './Navbar';

// mui stuff
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <div className="Home App-header">
      <div className="Home-container">
        <Grid container>
          <Grid item xs={12}>
            <div className="Navbar-brand">
              <Link to="/" className="Navbar-element">Hi, I'm Ron Dumalagan.</Link>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Link to="/about" className="Navbar-element">About</Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/experience" className="Navbar-element">Experience</Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/contact" className="Navbar-element">Contact</Link>
          </Grid>
        </Grid>
      </div>
      <div className="Home-icons">
        <EmailIcon fontSize="inherit"></EmailIcon>
        <LinkedInIcon fontSize="inherit"></LinkedInIcon>
        <GitHubIcon fontSize="inherit"></GitHubIcon>
      </div>
    </div>
  );
}

export default Home;


