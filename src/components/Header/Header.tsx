import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavList } from '../NavList/NavList';


export const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLang = (lang: any) => {
    i18n.changeLanguage(lang)
  }
  return (
    <AppBar sx={{ position: 'static' }}>
      <Toolbar sx={{
        dy: 'flex',
        justifyContent: 'space-around'
      }}>
        <NavList />
        <Box>
          <Button
            variant='contained'
            sx={{
              color: 'white',
              backgroundColor: 'orange',
              marginRight: '3px'
            }}
            onClick={() => changeLang('en')}
          >
            EN
          </Button>
          <Button
            variant='contained'
            sx={{
              color: 'white',
              backgroundColor: 'orange'
            }}
            onClick={() => changeLang('ua')}
          >
            UA
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
