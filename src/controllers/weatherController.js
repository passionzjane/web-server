const fetchWeather = (req, res) => {
    res.send([{
        location: "New York",
    }, {
        forcast: '59 degrees'
    }])
}

module.exports = {fetchWeather}