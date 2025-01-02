
const logger = (request,response,next)=>{
        console.log(request.url)
        console.log(JSON.stringify(request.headers))
        console.log(JSON.stringify(request.baseUrl))
        console.log(JSON.stringify(request.bady))
        console.log(JSON.stringify(request.cookies))
        console.log("---------------------------------");


        next();
}

module.exports= logger;