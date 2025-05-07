document.getElementById('getWeatherBtn').addEventListener('click',function(){
    const city = document.getElementById('cityInput').value;
    const apiKey = "f34e7db2dc3a493d9df42125252704";
    const url = `http://api.weatherapi.com/v1/current.json?key=${"f34e7db2dc3a493d9df42125252704"}&q=${city}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // to see what you get
    
      const weatherDiv = document.getElementById('weatherResult');
      weatherDiv.innerHTML = `
        <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p class="temperature">Temperature: ${data.current.temp_f}°F</p>
        <p class="condition">Condition: ${data.current.condition.text}</p>
        <img class ="img"src="https:${data.current.condition.icon}" alt="weather icon"/>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


function checkLocation() {
  const userInput = document.getElementById('cityInput').value.trim().toLowerCase();

  if (userInput === 'london') {
    document.body.style.backgroundImage = "url('britain.jpeg')";
  } else if (userInput === 'miami') {
    document.body.style.backgroundImage = "url('miami.jpeg')";
  } else if (userInput === 'rome') {
    document.body.style.backgroundImage = "url('rome.jpeg')";
  } else if (userInput === 'new york') {
    document.body.style.backgroundImage = "url('new york.jpeg')";
  } 
    else if (userInput === 'houston') {
    document.body.style.backgroundImage = "url('houston.jpeg')";
  }
    else if (userInput === 'san francisco') {
    document.body.style.backgroundImage = "url('san francisco.jpeg')";
  }
    else {
    // Optional: reset to default or blank background
    document.body.style.backgroundImage = "none";
  }

  document.body.style.backgroundSize = "cover"; // ensure image fills screen
}