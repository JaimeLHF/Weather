
setInterval(function() {
    let city = document.getElementById('city')
    const today = new Date(). toLocaleTimeString();
    city.textContent = "São José do Cedro " +today
}, 1000);

window.addEventListener('load', ()=> { 

    var config = {
        apiKey: "AIzaSyBbKFyTLgdb6BZUasgj8chUtib1Y3YRcJ4",
        authDomain: "temp-1ac8c.firebaseapp.com",
        databaseURL: "https://temp-1ac8c-default-rtdb.firebaseio.com",
        projectId: "temp-1ac8c",
        storageBucket: "temp-1ac8c.appspot.com",
        messagingSenderId: "5903967480",
        appId: "1:5903967480:web:e3cba1ea0ea0526c88c70d",
        measurementId: "G-2TN1XJREPE"
        };
        
        firebase.initializeApp(config);
        
        let temp = document.getElementById('temp')
        setInterval(function(){
        var db = firebaseRef = firebase.database().ref().child("Hasil_Pembacaan")
        db.on('child_added', function(snapshot){
            var valor = snapshot.val();
            temp.innerHTML = valor + " °C"
        })}, 1000);
           

    let lon
    let lat
        
    let descricao = document.getElementById('descr')
    let latitude = document.getElementById('lat')
    let longitude = document.getElementById('long')
    let vento = document.getElementById('vento')
    let icon = document.getElementById('icone')

        
      
                      
            lon = -81.250853
            lat = 42.988407      
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=94f261fa142774418ea6a8d4ec11a957&units=metric&lang=pt_br`
               console.log(url)
            fetch(url)
            .then( response => { return response.json() })
            .then ( data => {
                descricao.textContent = data.weather[0].description
                latitude.textContent = "Latitude: " + data.coord.lat
                longitude.textContent = "Longitude: " + data.coord.lon
                vento.textContent = "Velocidade do vento: " + data.wind.speed + " km/h"
                console.log(data)

                switch(data.weather[0].description){
                    case 'chuva leve':
                    icon.src = 'animated/rainy-1.svg'
                    break;

                    case 'algumas nuvens':
                    icon.src = 'animated/cloudy-day-1.svg'
                    break;

                    case 'nublado':
                    icon.src = 'animated/cloudy.svg'
                    break;

                    case 'chuva moderada':
                    icon.src = 'animated/rainy-1.svg'
                    break;

                    case 'light rain':
                    icon.src = 'animated/cloudy.svg'
                    break;

                    case 'clear sky':
                    icon.src = 'animated/day.svg'
                    break;
                }

            })
            .catch( error => {
                console.log(error)
            })
        
          
    
})
