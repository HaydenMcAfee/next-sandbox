'use client';
import {
  Typography,
  Container,
  Box,
} from '@mui/material';

export default function Home() {
  return (
      <Container maxWidth="md" sx={{ pt: 15, pb: 10, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
          I need to find <br />
          <Box component="span" sx={{ color: 'primary.main' }}>A Job</Box>
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
          plz hire me
        </Typography>
      </Container>
  );
}
