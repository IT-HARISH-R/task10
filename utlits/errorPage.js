const erroePage = (request, response, next) => {

    response.json({message: "404 Page not Fount"})

    console.log("-------404 Page not Fount--------")
    console.log("---------------------------------")
    next();
}

module.exports = erroePage;