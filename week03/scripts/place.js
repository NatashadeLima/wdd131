
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();
document.getElementById("lastModified").textContent += formattedDate;


const temperatureF = 50;
const windSpeedMPH = 5;

const temperatureC = 10;
const windSpeedKPH = 8;


function calculateWindChill(temp, windSpeed, isImperial) {
  if (isImperial) {
    
    return 35.74 + (0.6215 * temp) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
  } else {
    
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
  }
}


function updateWindChill() {
  const weatherElement = document.getElementById("weather-windchill");
  
  
  if ((temperatureF <= 50 && windSpeedMPH > 3) || (temperatureC <= 10 && windSpeedKPH > 4.8)) {
    
    let windChill = null;
    
    
    const isImperial = temperatureF !== undefined;
    
    if (isImperial) {
      windChill = calculateWindChill(temperatureF, windSpeedMPH, true);
    } else {
      windChill = calculateWindChill(temperatureC, windSpeedKPH, false);
    }
    
    weatherElement.innerHTML = `Wind Chill: ${windChill.toFixed(2)}°`;
  } else {
    
    weatherElement.innerHTML = "Wind Chill: N/A";
  }
}


window.onload = updateWindChill;
