async function setRenderBackground(){
    // console.log('hi');
    // https://picsum.photos/200/300
    const result = await axios.get("https://picsum.photos/1280/780",{
        responseType:"blob"
    })
    //console.log(result.data)
    const data = URL.createObjectURL(result.data) 
    //console.log(data)
    document.querySelector("body").style.backgroundImage = `url(${data})`
}

function setTime() {
    const timer = document.querySelector(".timer");
   
    setInterval(()=>{
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        const seconds = new Date().getSeconds();
        timer.textContent = `${hour} : ${minutes} : ${seconds}`
    },1000)
}

function setContent() {
    const content = document.querySelector(".timer-content")
    if (new Date().getHours() <= 12) content.textContent = "Good mornig, chaewoo";
    if (new Date().getHours() > 12) content.textContent = "Good evening, chaewoo";
}

function getMemo(value){
    const memo = document.querySelector(".memo")
    const memoValue = localStorage.getItem("todo");
    memo.textContent = memoValue
}

function setMemo(){
    const memoInput = document.querySelector(".memo-input")
    memoInput.addEventListener("keyup",function(e){
        if(e.code === "Enter" && e.currentTarget.value){
            localStorage.setItem("todo",e.currentTarget.value)
            getMemo();
            memoInput.value = "";
        }
    })
}
function deleteMemo(){
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("memo")) {
            localStorage.removeItem("todo");
            e.target.textContent = "";
        }
    })
}

function getPosition(options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve,reject,options)
    })
}

async function getWether(lat, lon) {
    const data = await axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=798b389506fb3f79c607c0caea3036c0")
    
    if (lat && lon) {
        const data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2719e331e07a6af0547cfe7df2754c8c`)
    }
    return data
}

async function renderWeather() {
    let latitude = "";
    let longitude = "";

    try {
        const position = await getPosition();
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }
    catch {
        
    }
    const result = await getWether(latitude, longitude);
    const weatherData = result.data;
    //console.log(result);

    const weahterList = weatherData.list.reduce((acc, cur) => {
        if (cur.dt_txt.indexOf("18:00:00")>0) {
            acc.push(cur);
        }
        return acc;
    },[])
    //console.log(weahterList);
    const modalBody = document.querySelector(".modal-body")
    modalBody.innerHTML = weahterList.map((e) => {
        return weahterWrapperComponet(e);
    })
}

function weahterWrapperComponet(e) {
    //console.log(e);
    const changeToCelsius = (temp) => (temp - 273.15).toFixed(1)
    return `
     <div class="card" style="width: 18rem;">
      <div class="card-header text-red text-center">
        ${e.dt_txt.split(" ")[0]}
      </div>  
      <div class="card-body">
        <h5>${e.weather[0].main}</h5>
        <img src="${matchIcon(e.weather[0].main)}" class="card-img-top" alt="...">
        <p class="card-text text-center">${changeToCelsius(e.main.temp)}</p>
      </div>
    </div> 
    `
}

async function renderWeatherForButton() {
    let latitude = "";
    let longitude = "";

    try {
        const position = await getPosition();
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }
    catch {
        
    }
    const result = await getWether(latitude, longitude);
    const e = result.data.list[0].weather[0].main;
    return weatherButton(e);
}

function weatherButton(e) {
    const img = new Image();
    img.src = matchIcon(e)
    const modalButton = document.querySelector(".modal-button");
    modalButton.appendChild(img);
    console.log(matchIcone(e))
}
function matchIcon(wheatherData) {
//console.log(wheatherData)
if (wheatherData === "Clear") return "/02_11/images/039-sun.png"
if (wheatherData === "Clouds") return "/02_11/images/002-cloud-1.png"
if (wheatherData === "Rain") return "/02_11/images/images/003-rainy.png"
if (wheatherData === "Snow") return "/02_11/images/images/006-snowy.png"
if (wheatherData === "Thunderstorm") return "/02_11/images/images/008-storm.png"
if (wheatherData === "Drizzle") return "/02_11/images/images/031-snowflake.png"
if (wheatherData === "Atomsphere") return "/02_11/images/images/033-hurricane.png"
}

renderWeatherForButton();
setContent();
getPosition();
renderWeather();
deleteMemo();
getMemo();
setMemo();
setTime();
setRenderBackground();
setInterval(()=>{
    setRenderBackground();
},5000)