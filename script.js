const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
    

    async function fetchWeather(searchQuery) {
       
        const apiKey = 'f0a99371790848459e3172627230611';
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery}`;

        try {

            const response = await fetch(url, {mode:"cors"});
            const weatherData = await response.json();
            console.log(weatherData);

            document.getElementById('cityName').textContent = weatherData.location.name;
            document.getElementById('temperature').textContent = weatherData.current.temp_c;
            document.getElementById('humidity').textContent = weatherData.current.humidity;
            document.getElementById('condition').textContent = weatherData.current.condition.text;

        }catch (error) {
            console.error('cannot fetch:', error);
            
        }
    } 
        function getData() {
            const searchQuery = searchInput.value;
            if (searchQuery) {
                fetchWeather(searchQuery);
            }
        }
        searchButton.addEventListener('click', getData);
        fetchWeather('bizerte');