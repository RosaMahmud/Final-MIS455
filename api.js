const currentWeatherItemsEl = document.getElementById('api-data');



function process(){

    var typed = document.getElementById("category").value;

    var link =`https://api.openweathermap.org/data/2.5/weather?q=${typed}&appid=e5108f6bf70aa12ed52e085b4efd29ce`;

    fetch (link)
    .then (res => res.json() )
    .then (data => showResult (data) );
   

}



function showResult(data){
    console.log (data.main);

    var city = document.getElementById("category").value;
let {humidity, feels_like, pressure, temp, temp_max, temp_min} = data.main;
let{main} = data.weather[0];

currentWeatherItemsEl.innerHTML = `   
<div class="card col-md-6 mx-auto" style="width: 18rem;">
<img src="`+ tempImg(main)+`" class="card-img-thumbnail" alt="...">
<div class="card-body">
  <h5 class="card-title">${city}</h5>
  <p class="card-text">Feels Like: ${feels_like} <br>
           Humidity:  ${humidity} <br>
         Pressure: ${pressure} <br>
         Temperature: ${temp} <br>
         Maximum Temperature:  ${temp_max} <br>
         Minimum Temperature:  ${temp_min} <br>
         Main:  ${main} <br></p></p>
</div>
</div>

;` ;

function tempImg(main){
    if(main=="Clear"){
        image = "/images/clear.svg"
        return image;
    }
    else if(main =="Clouds"){
        image = "/images/cloud.svg"
        return image;
    }
    else if(main =="Mist"){
        image = "/images/haze.svg"
        return image;
    }
    else if(main =="Smoke" ){
        image = "/images/haze.svg"
        return image;
    }
    else{
        image="/images/storm.svg"
        return image;
    }
}



    

}

var url = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=e5108f6bf70aa12ed52e085b4efd29ce`;

function callAPI(){
    fetch (url)
    .then (res => res.json() )
    .then (data => showDefault (data) );
   
}

callAPI();


function showDefault(data){
    let {humidity, feels_like, pressure, temp, temp_max, temp_min} = data.main;
    let{main} = data.weather[0];

   


    currentWeatherItemsEl.innerHTML = `   
    <div class="card col-md-6 mx-auto" style="width: 18rem;">
    <img src="`+ tempImg(main)+`" class="card-img-thumbnail " alt="...">
    <div class="card-body">
      <h5 class="card-title">Dhaka</h5>
      <p class="card-text">Feels Like: ${feels_like} <br>
               Humidity:  ${humidity} <br>
             Pressure: ${pressure} <br>
             Temperature: ${temp} <br>
             Maximum Temperature:  ${temp_max} <br>
             Minimum Temperature:  ${temp_min} <br>
             Main:  ${main} <br></p>

    </div>
  </div>

;`;

function tempImg(main){
    if(main=="Clear"){
        image = "/images/clear.svg"
        return image;
    }
    else if(main =="Clouds"){
        image = "/images/cloud.svg"
        return image;
    }
    else if(main =="Mist" ){
        image = "/images/haze.svg"
        return image;
    }
    else if(main =="Smoke" ){
        image = "/images/haze.svg"
        return image;
    }
    else{
        image="/images/storm.svg"
        return image;
    }
}


        
}
