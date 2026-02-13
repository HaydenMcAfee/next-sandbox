import MUIThemeProvider from './theme-provider';
import "./globals.css";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
} from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // Ensures the layout fills the whole screen
          }}
        >

          {/* --- NAVBAR --- */}
          <Box component="header" sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
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
          </Box>

          <Box component="main" sx={{ flexGrow: 1 }}>
            <MUIThemeProvider>{children}</MUIThemeProvider>
          </Box>

          {/* --- FOOTER --- */}
          <Box component="footer" sx={{ py: 3, textAlign: 'center', mt: 'auto' }}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Hayden McAfee. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </body >
    </html >
  );
}
