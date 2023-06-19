var value = ""
var serchURL = ""



function getValue() {
    value = document.getElementById("input-field").value;
    serchURL = "https://basketapi1.p.rapidapi.com/api/basketball/search/" + value;
    console.log(value);
    console.log(serchURL);
    fetchData();

}

function fetchData() {
    fetch(serchURL, {
        "method": "GET",
        headers: {
            'X-RapidAPI-Key': '9e54e692aamshf0397534f0229a5p1e5a65jsn96eac41826d4',
            'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
        }

    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.error(err);
        })
}
