import React from 'react'
import '../App.css';

import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="Navbar-brand">
            <Link to="/" className="Navbar-element">Ron Dumalagan</Link>
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
    </div>
  );
}

export default Navbar;
