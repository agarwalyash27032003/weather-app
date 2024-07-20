// URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";

// async function exchangeRates(){
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data);
//     console.log(data.longitude);
//     console.log(data.latitude);
//     console.log(data.hourly);
//     console.log(data.hourly.time);
//     console.log(data.hourly.time[2]);
//     for(i=0;i<168;i++)
//     {
//         // console.log(i);
//         if(data.hourly.time[i]=="2024-07-16T09:00")
//         {
//             console.log(i);
//             console.log(data.hourly.temperature_2m[i]);
//             break;
//         }
//     }
// };

// exchangeRates();

const searchIcon = document.querySelector("#search img");
const place = document.querySelector("#search input");
const showPlace = document.querySelector("#current-place");
const showTemp = document.querySelector("#current-temp");
const showStatus = document.querySelector("#weather-status");
const showFeelsLike = document.querySelector("#feels-like");
const otherDetails = document.querySelectorAll("#other-details div");
const mobileScreen = document.querySelector("#mobile-screen");
let URL = '';

searchIcon.addEventListener("click",()=>{
    placeNew = place.value;
    showPlace.innerText = placeNew;
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${placeNew}&appid=3484371497f2c8206ae87690b1b3f91d&units=metric`;
    fetchData();
});

window.addEventListener("load",()=>{
    showPlace.innerText = "Siliguri";
    URL = `https://api.openweathermap.org/data/2.5/weather?q=Siliguri&appid=3484371497f2c8206ae87690b1b3f91d&units=metric`;
    fetchData();
});

async function fetchData(){
    let response = await fetch(URL);
    let data = await response.json();
    if(data.cod==200)
    {
        showTemp.innerText = data.main.temp +"°C";
        showFeelsLike.innerText = "Feels like " + data.main.feels_like + "°C";
        showStatus.innerText = data.weather[0].main;
        otherDetails[0].children[1].innerText = data.main.humidity +"%";
        otherDetails[1].children[1].innerText = data.visibility +" m";
        otherDetails[2].children[1].innerText = data.wind.speed +" m/s";
        otherDetails[3].children[1].innerText = data.main.pressure +" hPa";
    }
    else
    {
        showPlace.innerText = "City Not Found!";
        showTemp.innerText = "***";
        showFeelsLike.innerText = "***";
        showStatus.innerText = "***";
        otherDetails[0].children[1].innerText = "***";
        otherDetails[1].children[1].innerText = "***";
        otherDetails[2].children[1].innerText = "***";
        otherDetails[3].children[1].innerText = "***";
    }
};