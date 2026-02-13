import MUIThemeProvider from './theme-provider';
import "./globals.css";
import Navbar from './api/components/Navbar';
import {
  Typography,
  Box,
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
            <Navbar />
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
