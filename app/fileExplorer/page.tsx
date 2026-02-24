'use client';
import {
    Typography,
    Container,
    Box,
} from '@mui/material';
import { useEffect, useState } from 'react';
import FileExplorer from '../api/components/FileExplorer/FileExplorer';
import fileInfo from '../models/fileInfo';


export default function fileExplorerPage() {
    const [fileInfoList, setFileInfoList] = useState([] as fileInfo[]);

    useEffect(() => {
        fetch('http://localhost:8080/fileInfo') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                console.log('Fetched file info:', data);
                setFileInfoList(data);
                console.log('Updated file info list:', data);
            })
            .catch(error => {
                console.error('Error fetching file info:', error);
            });

        
    }, []);


    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    File Explorer
                </Typography>
                < FileExplorer fileInfoList={fileInfoList} /> {/* Pass the fetched file info list here */}
            </Box>
        </Container>
    );
}