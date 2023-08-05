fetch('https://api.themotivate365.com/stoic-quote')
    .then(res => res.json())
    .then(data => console.log(data.quote));