async function getweatherdata() {
    var cityname = document.getElementById('cityName').value
    console.log(cityname)
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=40472e68613745050c66c84ca7cf9295`
    var data = await fetch(url)
    var res = await data.json()
    console.log(res)
   
   var weatherdeatails = document.getElementById('weatherContainer')
    weatherdeatails.innerHTML = `
    <div class="row">
        <div class=" col">
      <img class="card-img-top" src="${res.weather[0].main}.svg" alt="Card image cap">
      </div>
      <div class="col">
      <div class="card-body">
        <p class="card-text text-center temp mt-3" style="font-weight:700">${Math.floor((res.main.temp-274.15))+"°C"}</p>
        <p class="card-text text-center mb-2 "style="font-size:20px;font-weight:900">${res.weather[0].main}</p>
        <p class="card-text text-center " style="color:black;font-size:15px;font-weight:900 ";}><i class="fa-sharp fa-solid fa-location-dot"></i>  ${res.name},${res.sys.country}</p>
      </div>
      </div>
    </div>
    <p class="card-text text-center  mt-3 g" style='font-size:15px;font-weight:900;'>Wind speed: ${res.wind.speed}<img src="wind.svg"></p>
    <p class="card-text text-center mb-1 mt-0 des style=' font-family: 'Poppins', sans-serif;">${res.weather[0].description}</p>
    </div>
  </div>
  `
  weatherdeatails.style.visibility="visible";
}
