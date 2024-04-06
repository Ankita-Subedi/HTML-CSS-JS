let apiKey = "984ef9d0140607dc5ee0b0cf69096ceb";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    let response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/images/images/clouds.png";
    }
    else if (data.weather[0].main == "Clear")
        weatherIcon.src = "assets/images/images/clear.png";
    else if (data.weather[0].main == "Rain")
        weatherIcon.src = "assets/images/images/rain.png";
    else if (data.weather[0].main == "Drizzle")
        weatherIcon.src = "assets/images/images/drizzle.png";
    else if (data.weather[0].main == "Mist")
        weatherIcon.src = "assets/images/images/mist.png";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
