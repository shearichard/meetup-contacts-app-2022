import { AppBar, Container, Link, Toolbar, Typography, useTheme } from '@material-ui/core';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar: FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="default" elevation={3}>
      <Container>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, textDecoration: 'none' }}
          >
            Contacts App
          </Typography>
          <nav style={{ flexGrow: 1 }}>
            <Link
              variant="button"
              color="textPrimary"
              component={NavLink}
              to="/"
              sx={{ margin: theme.spacing(1, 1.5), flexGrow: 1 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              component={NavLink}
              to="/contacts"
              sx={{ margin: theme.spacing(1, 1.5), flexGrow: 1 }}
            >
              Contacts
            </Link>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
