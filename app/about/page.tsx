import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Chip,
    Card,
    CardContent,
    Divider,
    Stack
} from '@mui/material';
import {
    CloudQueue,
    Code,
    AutoAwesome,
    Storage,
    School
} from '@mui/icons-material';

export default function AboutPage() {
    const skills = [
        "TypeScript", "Golang", "Java", "Python", "React", "Next.js",
        "GCP", "Kubernetes", "Docker", "Terraform", "LLMs", "PostgreSQL"
    ];

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" mb={6}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="700">
                    About Me
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    Senior Software Engineer & Google Certified ML Professional
                </Typography>
            </Box>

            <Typography variant="body1" paragraph fontSize="1.1rem">
                I am a versatile Senior Software Engineer with a track record of optimizing financial systems
                and architecting high-impact cloud migrations. Most recently at **The Home Depot**,
                I've specialized in full-stack development, transitioning legacy data into modern
                cloud architectures, and leveraging Generative AI to drive financial insights.
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Expertise Cards */}
            <Grid container spacing={3} mb={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                            <CloudQueue color="primary" />
                            <Typography variant="h6">Cloud & Platform</Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            Expertise in GCP, Kubernetes, and Terraform. I’ve migrated 10+ pipelines to GitHub Actions
                            and architected Go-based Cloud Run solutions that mitigated millions in audit risk.
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                            <AutoAwesome color="primary" />
                            <Typography variant="h6">AI & Machine Learning</Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            Google Certified ML Engineer. Experienced in building LLM-powered analytics and
                            anomaly detection models using Facebook Prophet and VertexAI.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* Skills Section */}
            <Typography variant="h4" gutterBottom fontWeight="600">
                Technical Toolkit
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 6 }}>
                {skills.map((skill) => (
                    <Chip key={skill} label={skill} color="primary" variant="outlined" />
                ))}
            </Box>

            {/* Education/Background */}
            <Typography variant="h4" gutterBottom fontWeight="600">
                Education
            </Typography>
            <Stack spacing={2}>
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Kennesaw State University
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        B.S. in Computer Science & B.M. in Music Performance (2016–2020)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Google Cloud Certification
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Professional Machine Learning Engineer (2024)
                    </Typography>
                </Box>
            </Stack>
        </Container>
    );
}