
const input_tex =document.querySelector('.input_box');
const searchbtn =document.querySelector('.search');

async  function getweather(city){
    var res = fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2010d5c8c7dd8a5449d8baca5420705&units=metric');
    var data = await res.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = math.round( data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humip').innerHTML = math.round(data.main.humidity) +"%";
    document.querySelector('.winds').innerHTML = math.round( data.wind) + "km/h";
}
searchbtn.addEventListener('click',()=>{
    getweather(input_tex.value);
})

