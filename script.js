fetch('https://corona.lmao.ninja/v2/countries/Bangladesh')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('flag').src = data.countryInfo.flag;
        document.getElementById('country').innerHTML = data.country;
        document.getElementById('active').innerHTML = data.active;
        document.getElementById('cases').innerHTML = data.cases;
        document.getElementById('critical').innerHTML = data.critical;
        document.getElementById('death').innerHTML = data.deaths;
        document.getElementById('recovered').innerHTML = data.recovered;
        document.getElementById('tests').innerHTML = data.tests;
    });