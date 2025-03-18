import React from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Person,
  Security,
  Notifications,
  Language,
} from '@mui/icons-material';

const Profile: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                margin: '0 auto 16px',
                bgcolor: 'primary.main',
              }}
            >
              <Person sx={{ fontSize: 60 }} />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Premium Member
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
            >
              Change Photo
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  defaultValue="John"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  defaultValue="Doe"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="john.doe@example.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  defaultValue="+1 (555) 123-4567"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  defaultValue="123 Main St, City, Country"
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
            </Box>
          </Paper>
          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account Settings
            </Typography>
            <List>
              <ListItem component="button">
                <ListItemIcon>
                  <Security />
                </ListItemIcon>
                <ListItemText primary="Security Settings" />
              </ListItem>
              <Divider />
              <ListItem component="button">
                <ListItemIcon>
                  <Notifications />
                </ListItemIcon>
                <ListItemText primary="Notification Preferences" />
              </ListItem>
              <Divider />
              <ListItem component="button">
                <ListItemIcon>
                  <Language />
                </ListItemIcon>
                <ListItemText primary="Language & Region" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 