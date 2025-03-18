import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  AccountBalance,
  Add,
  Remove,
  SwapHoriz,
} from '@mui/icons-material';

const Wallet: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Digital Wallet
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <AccountBalance sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
              <Box>
                <Typography variant="h4">$10,000.00</Typography>
                <Typography variant="body2" color="text.secondary">
                  Available Balance
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<Add />}
                >
                  Deposit
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Remove />}
                >
                  Withdraw
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<SwapHoriz />}
                >
                  Transfer
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Transactions
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Add color="success" />
                </ListItemIcon>
                <ListItemText
                  primary="Salary Deposit"
                  secondary="Today, 9:00 AM"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Remove color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Grocery Shopping"
                  secondary="Yesterday, 2:30 PM"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SwapHoriz color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Transfer to Savings"
                  secondary="2 days ago, 10:15 AM"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Wallet; 