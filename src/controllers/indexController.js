const showdata = (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: 'Jane Stack'
    })
}

const aboutdata = (req, res) => {
    res.render('about', {
        name: 'Jane Stack',
        title: 'About Me'
    })
}

const helpdata = (req, res) => {
    res.render('help', {
        message: 'Contact us for help, we are always at you service',
        hotline: 'Customer care'
    })
}

module.exports = {showdata,
     aboutdata, 
     helpdata}