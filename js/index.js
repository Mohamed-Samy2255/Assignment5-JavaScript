
let data1 = [];
let data2 = [];
let data3 = [];
async function getWeather(Weather){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=93824416015f4b75901210944241301&q=${Weather}&days=3`)

    let finalRespose = await response.json()
  
    data1 = finalRespose.location;
    data2 = finalRespose.current;
    data6 = finalRespose.current.condition;
    data3 = finalRespose.forecast.forecastday;
    data4 = finalRespose.forecast.forecastday[0].day;
    data5 = finalRespose.forecast.forecastday[0].day.condition;
    data9 = finalRespose.forecast.forecastday[1].day;
    data7 = finalRespose.forecast.forecastday[1].day.condition;
    data8 = finalRespose.forecast.forecastday[2].day.condition;
    data10 = finalRespose.forecast.forecastday[2].day;
    // console.log(data1);
    // console.log(data2);
    // console.log(data3);
    // console.log(data4);
    // console.log(data5);
    // console.log(data6);
    // console.log(data7);
    displayData();
    

}
getWeather("Cairo")


function displayData(){
    let cartona = 
    `
    <div class="col-md-4 groub1">
              <div class="forecast-container title">
                <div class="today forecast">
                  <div class="forecast-header d-flex justify-content-between">
                    <div class="day">${data4.avgtemp_c}</div>
                    <div class="date">${data3[0].date}</div>
                  </div>
                </div>
              </div>
              <div class="forecast-content p-3">
                <div class="location">${data1.name}</div>
                <div class="degree">
                  <div class="forecast-icon d-flex align-items-center justify-content-center">
                    <div class="num">${data4.maxtemp_c}<sup>o</sup>C</div>
                    <img src="${data5.icon}" class="ms-3 mt-3" alt="img">
                  </div>
                  <div class="custom">Clear</div>
                  <span>
                    <img src="imgs/icon-umberella.png" alt="">
                    20%
                  </span>
                  <span>
                    <img src="imgs/icon-wind.png" alt="">
                    18km/h
                  </span>
                  <span>
                    <img src="imgs/icon-compass.png" alt="">
                    East
                  </span>
                </div>
              </div>
            </div> 



  
            <div class="col-md-4 bg-danger groub2">
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day text-center">${data3[1].date}</div>
                </div>
                <div class="forecast-content d-flex flex-column text-center">
                  <div class="forecast-icon">
                    <img src="${data7.icon}" class="" alt="img">
                  </div>
                  <div class="degree text-white">${data9.maxtemp_c}<sup>o</sup>C</div>
                  <small>${data9.mintemp_c}<sup>o</sup></small>
                  <div class="custom">Suny</div>
                </div>
              </div>
            </div> 



            
            <div class="col-md-4 bg-danger groub3">
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day text-center">${data3[2].date}</div>
                </div>
                <div class="forecast-content d-flex flex-column  text-center">
                  <div class="forecast-icon">
                    <img src="${data8.icon}" alt="img">
                  </div>
                  <div class="degree text-white">${data10.maxtemp_c}<sup>o</sup>C</div>
                  <small>${data9.mintemp_c}<sup>o</sup></small>
                  <div class="custom">Suny</div>
                </div>
              </div>
            </div>

    `
    document.getElementById("showData").innerHTML = cartona;
}

document.querySelector(".form-control").addEventListener("input" , function(){
  getSearch()
});


let searchh = document.getElementById("search");


function getSearch(){
  let dd = searchh.value;
  getWeather(dd)
}