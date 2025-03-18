import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  AccountBalance,
  AccessTime,
  TrendingUp,
} from '@mui/icons-material';

const loans = [
  {
    id: 1,
    type: 'Personal Loan',
    amount: 10000,
    interestRate: 5.5,
    term: '24 months',
    status: 'active',
    progress: 45,
  },
  {
    id: 2,
    type: 'Home Loan',
    amount: 250000,
    interestRate: 3.8,
    term: '30 years',
    status: 'pending',
    progress: 0,
  },
];

const Loans: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'completed':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Loans</Typography>
        <Button variant="contained" color="primary">
          Apply for Loan
        </Button>
      </Box>
      <Grid container spacing={3}>
        {loans.map((loan) => (
          <Grid item xs={12} md={6} key={loan.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">{loan.type}</Typography>
                  <Chip
                    label={loan.status}
                    color={getStatusColor(loan.status)}
                    size="small"
                  />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccountBalance sx={{ mr: 1 }} />
                      <Typography variant="body2">Amount</Typography>
                    </Box>
                    <Typography variant="h6">${loan.amount.toLocaleString()}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TrendingUp sx={{ mr: 1 }} />
                      <Typography variant="body2">Interest Rate</Typography>
                    </Box>
                    <Typography variant="h6">{loan.interestRate}%</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccessTime sx={{ mr: 1 }} />
                      <Typography variant="body2">Term</Typography>
                    </Box>
                    <Typography variant="h6">{loan.term}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2">Progress</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ flexGrow: 1, mr: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={loan.progress}
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                      </Box>
                      <Typography variant="body2">{loan.progress}%</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                {loan.status === 'active' && (
                  <Button size="small" color="primary">
                    Make Payment
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Loans; 