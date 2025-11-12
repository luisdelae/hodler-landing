import { useState } from 'react';
import { Button, Box, Typography, TextField, Paper, Alert } from '@mui/material';

function ProfileTest() {
    const [userId, setUserId] = useState('test-user-001');
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        setLoading(true);
        setError(null);
        setProfile(null);

        try {
            const response = await fetch(
                `https://5bnu3oi26m.execute-api.us-east-1.amazonaws.com/prod/users/${userId}/profile`
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP ${response.status}`);
            }

            const data = await response.json();
            setProfile(data);
        } catch (err) {
            console.log('Error fetching profile: ', err);
            setError(err.message);
        }

        setLoading(false);
    }

    return (
        <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
            <Typography variant='h5' gutterBottom>
                Test DynamoDB User Profile
            </Typography>

            <TextField
                label='User ID'
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
                helperText="Try: test-user-001" />

            <Button
                variant='contained'    
                onClick={fetchProfile}
                disabled={loading}
                fullWidth
                sx={{ mb: 3 }}
            >
                {loading ? 'Loading...' : 'Fetch Profile'}
            </Button>

            {error && (
                <Alert severity='error' sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            {profile && (
                <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
                    <Typography variant='h6' gutterBottom color='success.main'>
                        User Profile:
                    </Typography>
                    <Box sx={{ ml: 2}}>
                        <Typography variant='body1'><strong>User ID: </strong>{profile.userId}</Typography>
                        <Typography variant='body1'><strong>Email: </strong>{profile.email}</Typography>
                        <Typography variant='body1'><strong>UserName: </strong>{profile.username}</Typography>
                        <Typography variant='body1'><strong>Created: </strong>{profile.createdAt}</Typography>

                    </Box>
                </Paper>
            )}
        </Box>
    );
}

export default ProfileTest;
