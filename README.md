# Weather Forecast Website

This is a weather forecast website built with Express.js and the OpenWeatherMap API. Users can search for the current weather and a 5-day forecast by entering a city name.

## Features

- Search for weather by city name
- Display current temperature, humidity, wind speed, and weather conditions
- Show a 5-day weather forecast
- Dynamic backgrounds based on weather conditions
- Error handling for invalid city names

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-forecast.git
    cd weather-forecast
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Replace `YOUR_OPENWEATHERMAP_API_KEY` in `app.js` with your actual OpenWeatherMap API key.

### Running the Server

Start the server:
```bash
nodemon app.js
