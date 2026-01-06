import express from 'express';
import axios from 'axios';

const router = express.Router();

// NewsAPI base URL
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

// Add other categories if needed (e.g., sports, health)
router.get('/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: 'us',
        category: category,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to fetch ${category} news` });
  }
});

export default router;
