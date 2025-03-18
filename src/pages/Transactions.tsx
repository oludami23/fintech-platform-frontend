import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Search,
  FilterList,
  Download,
} from '@mui/icons-material';

const transactions = [
  {
    id: 1,
    date: '2024-03-20',
    description: 'Salary Deposit',
    amount: 5000.00,
    type: 'deposit',
    status: 'completed',
  },
  {
    id: 2,
    date: '2024-03-19',
    description: 'Grocery Shopping',
    amount: -150.50,
    type: 'expense',
    status: 'completed',
  },
  {
    id: 3,
    date: '2024-03-18',
    description: 'Transfer to Savings',
    amount: -1000.00,
    type: 'transfer',
    status: 'completed',
  },
];

const Transactions: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'success';
      case 'expense':
        return 'error';
      case 'transfer':
        return 'primary';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Transaction History</Typography>
          <Box>
            <IconButton>
              <FilterList />
            </IconButton>
            <IconButton>
              <Download />
            </IconButton>
          </Box>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search transactions..."
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Type</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.type}
                      color={getTypeColor(transaction.type)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right" sx={{
                    color: transaction.amount >= 0 ? 'success.main' : 'error.main',
                  }}>
                    {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.status}
                      color={getStatusColor(transaction.status)}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Transactions; 