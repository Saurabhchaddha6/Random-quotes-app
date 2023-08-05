
// const quote_text = fetch('https://api.themotivate365.com/stoic-quote')
//     .then(res => res.json())
//     .then(data => console.log(data.quote));


// console.log(change);

const api_url = "https://api.themotivate365.com/stoic-quote"

async function api_quote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    const change = document.getElementById('quote');
    change.innerHTML = data.quote;
}
api_quote(api_url);

