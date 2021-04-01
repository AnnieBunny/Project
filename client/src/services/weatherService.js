const url = `http://api.openweathermap.org/data/2.5/weather?q=`;

const apiKey = '776d1439d44f90890a30204cb49dd1f8';



export const getWeather = (city) => {

  return  fetch(`${url}${city}&appid=${apiKey}`,{ method: 'GET'})
    .then(res => {
        
        console.log(res.json())
    })
    .then(data => {
        console.log(data)
        // let temperature = data['main']['temp']
    })
    
}

