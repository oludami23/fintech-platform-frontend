import React from 'react';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Digital Wallet',
      description: 'Manage your funds and make transactions',
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 40 }} />,
      path: '/wallet',
    },
    {
      title: 'Transactions',
      description: 'View your transaction history',
      icon: <SwapHorizIcon sx={{ fontSize: 40 }} />,
      path: '/transactions',
    },
    {
      title: 'Loans',
      description: 'Apply for and manage loans',
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      path: '/loans',
    },
    {
      title: 'Profile',
      description: 'Update your account information',
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      path: '/profile',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to FinTech Platform
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Your one-stop solution for digital banking and financial services
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
                onClick={() => navigate(feature.path)}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard; 