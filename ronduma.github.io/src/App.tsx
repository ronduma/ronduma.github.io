import {useState, useEffect} from 'react';
import './App.css'

// components
import CustomSwitch from './components/Switch'

// mui components
import { 
  Grid2 as Grid,
} from '@mui/material'

function App() {
  const [darkMode, setDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleModeChange = (newMode: boolean) => {
    setDarkMode(newMode);
    console.log('Mode changed to:', newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  }

  return (
    <>
      <Grid>
        <CustomSwitch mode={darkMode} onModeChange={handleModeChange} />
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </Grid>
    </>
  )
}

export default App
