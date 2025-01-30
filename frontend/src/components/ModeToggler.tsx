import { FC } from 'react';

// mui components 
import { Theme, } from "@mui/material/styles";
import {
  IconButton
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

// custom components
import {lightTheme, darkTheme} from "./themes";

interface ModeTogglerProps {
  mode: string;
  toggle: (theme: Theme) => void;
}

const ModeToggler: FC<ModeTogglerProps> = ({ mode, toggle }) => {
  const toggleTheme = () => {
    toggle(mode === 'light' ? darkTheme : lightTheme);
  }
  return (
    <>
      <IconButton 
        onClick={toggleTheme} 
        sx={{
          border: 1,
        }}
        disableFocusRipple 
        disableRipple
      >
        { (mode === 'light') ? <ModeNightIcon /> : <LightModeIcon /> }
      </IconButton>
    </>
  )
}
export default ModeToggler;