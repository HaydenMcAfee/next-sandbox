'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    Link,
    Stack,
} from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { NavButton } from './NavButton';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <CloudQueueIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    Haydn Cloud
                </Typography>
                <Stack direction="row" spacing={2}>
                    <NavButton href="/fileUpload">File Upload</NavButton>
                    <NavButton href="/fileExplorer">File Explorer</NavButton>
                    <NavButton href="/fileExplorer">About</NavButton>
                    <Button variant="contained" sx={{ borderRadius: 2 }}>Sign Up</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;