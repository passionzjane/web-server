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
        title: 'Customer care',
        name: 'Jane Stack'
        
    })
}

const notfound = (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jane Stack',
        errorMessage: 'Page not found'
    })
}

const notexist = (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jane Stack',
        errorMessage: 'Help article not found'
    })
}

module.exports = {showdata,
    aboutdata, 
    helpdata,
    notfound,
    notexist
    }