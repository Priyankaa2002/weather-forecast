import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Helper to get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', async (req, res) => {
  const city = req.body.city;
  const apiKey = '776342497ae71bd202a4fcf45bae2943';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data;

    res.render('forecast', {
      city: weatherData.name,
      temp: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    });
  } catch (error) {
    res.render('index', { error: 'City not found. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
