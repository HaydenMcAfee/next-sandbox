'use client';
import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  Stack, 
} from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShieldIcon from '@mui/icons-material/Shield';

export default function Home() {
return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
      {/* --- NAVBAR --- */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <CloudQueueIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Haydn Cloud
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">File Upload</Button>
            <Button color="inherit">File Explorer</Button>
            <Button variant="contained" sx={{ borderRadius: 2 }}>Sign Up</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* --- HERO SECTION --- */}
      <Container maxWidth="md" sx={{ pt: 15, pb: 10, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
          I need to find <br />
          <Box component="span" sx={{ color: 'primary.main' }}>A Job</Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
          plz hire me
        </Typography>
      </Container>


      {/* --- FOOTER --- */}
      <Box component="footer" sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Hayden McAfee. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
