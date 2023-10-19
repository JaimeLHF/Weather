
setInterval(function () {



}, 1000);

window.addEventListener('load', () => {


    let city = document.getElementById('city')
    let temp = document.getElementById('temp')
    let descricao = document.getElementById('descr')
    let latitude = document.getElementById('lat')
    let longitude = document.getElementById('long')
    let vento = document.getElementById('vento')
    let icon = document.getElementById('icone')



    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitudeData = position.coords.latitude;
            const longitudeData = position.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudeData}&lon=${longitudeData}&appid=94f261fa142774418ea6a8d4ec11a957&units=metric&lang=pt_br`

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {

                    setInterval(function () {
                        var today = new Date().toLocaleTimeString();
                        city.textContent = `${data.name} ${today}`
                        temp.textContent = parseInt(data.main.temp) + " °C"
                        descricao.textContent = data.weather[0].description
                        latitude.textContent = "Latitude: " + data.coord.lat
                        longitude.textContent = "Longitude: " + data.coord.lon
                        vento.textContent = "Velocidade do vento: " + data.wind.speed + " km/h"
                    });





                    switch (data.weather[0].description) {
                        case 'chuva leve':
                            icon.src = 'http://openweathermap.org/img/wn/10d.png'
                            break;

                        case 'algumas nuvens':
                            icon.src = 'http://openweathermap.org/img/wn/03d.png'
                            break;

                        case 'nublado':
                            icon.src = 'http://openweathermap.org/img/wn/04d.png'
                            break;

                        case 'chuva moderada':
                            icon.src = 'http://openweathermap.org/img/wn/10d.png'
                            break;

                        case 'light rain':
                            icon.src = 'http://openweathermap.org/img/wn/10d.png'
                            break;

                        case 'clear sky':
                            icon.src = 'http://openweathermap.org/img/wn/01d.png'
                            break;
                    }
                })
                .catch(error => {
                    console.log(error)
                });
        })

    } else {
        console.log("Geolocalização não é suportada neste navegador.");
    }

})
