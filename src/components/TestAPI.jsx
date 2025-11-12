import { useState } from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function TestAPI() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testLambda = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('https://5bnu3oi26m.execute-api.us-east-1.amazonaws.com/prod/hello');
      
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error('API Error:', err);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <Box sx={{ p: 4, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Test AWS Lambda API
      </Typography>
      
      <Button 
        variant="contained" 
        onClick={testLambda} 
        disabled={loading}
        size="large"
        sx={{ mb: 3 }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Call Lambda Function'}
      </Button>

      {error && (
        <Paper sx={{ p: 2, bgcolor: 'error.light', color: 'error.contrastText', mb: 2 }}>
          <Typography variant="body1">
            ❌ Error: {error}
          </Typography>
        </Paper>
      )}

      {response && (
        <Paper sx={{ p: 3, bgcolor: 'background.paper', textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom color="success.main">
            ✅ Lambda Response:
          </Typography>
          <Typography variant="body2" component="pre" sx={{ 
            overflow: 'auto',
            bgcolor: 'grey.900',
            color: 'grey.100',
            p: 2,
            borderRadius: 1
          }}>
            {JSON.stringify(response, null, 2)}
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

export default TestAPI;