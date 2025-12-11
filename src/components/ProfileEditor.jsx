import { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Alert, Paper, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure } from '../store/slices/authSlice';

function ProfileEditor() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fetchingProfile, setFetchingProfile] = useState(true);

    const dispatch = useDispatch();
    const { user, profileLoading, error, success } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) return;

        const fetchProfile = async () => {
            try {
                const res = await fetch(
                    `https://5bnu3oi26m.execute-api.us-east-1.amazonaws.com/prod/users/${user.userId}/profile`
                );

                if (res.ok) {
                    const data = await res.json();
                    setUsername(data.username);
                    setEmail(data.email);
                }
            } catch (err) {
                console.error('Error fetching profile: ', err);
            }

            setFetchingProfile(false);
        };

        fetchProfile();
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        dispatch(updateUserStart());

        try {
            const res = await fetch(
                `https://5bnu3oi26m.execute-api.us-east-1.amazonaws.com/prod/users/${user.userId}/profile`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify({ username }),
                }
            );

            const data = await res.json();

            if (res.ok) {
                dispatch(updateUserSuccess({ username: data.user.username }));
            } else {
                dispatch(updateUserFailure(data.error || 'Failed to update profile'));
            }
        } catch (err) {
            dispatch(updateUserFailure('Network error. Please try again.'));
            console.error('Update error: ', err);
        }
    };

    if (!user) {
        return (
            <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
                <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Please log in to edit your profile
                    </Typography>
                </Paper>
            </Box>
        );
    }

    if (fetchingProfile) {
        return (
            <Box sx={{ p: 4, maxWidth: 500, mx: 'auto', textAlign: 'center' }}>
                <CircularProgress />
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Loading profile...
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4, maxWidth: 500, mx: 'auto' }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Edit Profile
                </Typography>

                {success && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                        {success}
                    </Alert>
                )}

                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleUpdate}>
                    <TextField
                        label="Email"
                        value={email}
                        disabled
                        fullWidth
                        sx={{ mb: 2 }}
                        helperText="Email cannot be changed"
                    />

                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={profileLoading}
                    >
                        {profileLoading ? 'Updating...' : 'Update Profile'}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProfileEditor;
