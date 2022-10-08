document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let name = document.querySelector('input').value
    fetch(`https://www.amiiboapi.com/api/amiibo/?name=${name}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('.first').innerText = data.amiibo[0].name
      document.querySelector('.second').innerText = data.amiibo[0].gameSeries
      document.querySelector('.third').innerText = data.amiibo[0].release.na
      document.querySelector('img').src = data.amiibo[0].image
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

