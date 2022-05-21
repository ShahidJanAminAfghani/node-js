document.getElementById('button').addEventListener('click', () => {
    console.log("hi")
});

function update() {
    var place = document.getElementById('search').value;
    xhr = new XMLHttpRequest();
    if (place.length < 1) {
        place = 'pakistan'
    }
    try {
        xhr.open('Get', `http://api.weatherapi.com/v1/current.json?key=a3d04c8085434989ab170927221605&q=${place}`);
        xhr.onload = function() {
            console.log("the file is")
            var t = this.responseText;
            t = JSON.parse(t)
            var temp = t.current.temp_c;
            date = t.location.localtime.split(' ')
            document.getElementById('temp').innerHTML = `${temp}<sup>o</sup>C`;
            document.getElementById('country').innerHTML = t.location.country;
            document.getElementById('humidity').innerHTML = t.current.humidity;
            document.getElementById('fellslike').innerHTML = t.current.feelslike_c;
            document.getElementById('localtime').innerHTML = date[1];
            document.getElementById('date').innerHTML = date[0];
            document.getElementById('show_hide').style.display = 'none';
        }
        xhr.onprogress = function(req, res) {
            document.getElementById('show_hide').style = 'display:block;';
        }
    } catch (err) {
        document.getElementById('show_hide').innerHTML = 'Enter the correct name ' + err;
        console.log(err)
    } finally {
        document.getElementById('show_hide').innerHTML = 'Enter the correct name ';

    }
    xhr.send();

};