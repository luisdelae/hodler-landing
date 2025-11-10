import { Box, Container, Typography, Button, TextField } from '@mui/material';
import { Download } from '@mui/icons-material';
import { useState } from 'react';

function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup: ', email);
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Ready to Start Trading?
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Download Hodler now and get $10,000 virtual cash to start practicing
        </Typography>

        <Button
          variant="contained"
          size="large"
          startIcon={<Download />}
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            mb: 4,
            '&:hover': { bgcolor: 'grey.100' },
          }}
          onClick={() => window.open('https://github.com/luisdelae/hodler-android', '_blank')}
        >
          Download for Android
        </Button>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Get Notified at Launch
        </Typography>

        {submitted ? (
          <TextField variant="body1">
            Thanks for signing up! We'll email youi when Hodler launches.
          </TextField>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email.example.com"
              required
              sx={{
                bgcolor: 'white',
                borderRadius: 1,
                flexGrow: 1,
              }}
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: 'secondary.main' }}>
              Notify Me
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default CTASection;
