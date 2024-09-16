import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const LessonAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          uygulamama
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default LessonAppBar;
