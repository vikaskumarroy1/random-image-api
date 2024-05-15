const express = require('express');
const axios = require('axios');
const app = express();

// Route to get a random image
app.get('/random-image', async (req, res) => {
  try {
    // Fetch a random image from Unsplash API
    const response = await axios.get('https://source.unsplash.com/random');
    
    // Get the URL of the random image from the response headers
    const imageUrl = response.request.res.responseUrl;

    // Send the image URL as JSON response
    res.json({ image: imageUrl });
  } catch (error) {
    // Handle errors
    console.error('Error fetching random image:', error.message);
    res.status(500).json({ error: 'Failed to fetch random image' });
  }
});

// Start the server

app.listen(8080,()=>{
    console.log("server is rinning on port 8080");
})
