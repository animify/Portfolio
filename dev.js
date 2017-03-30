const connect = require('connect')
const serveStatic = require('serve-static')
connect().use(serveStatic(__dirname)).listen(1337, function(){
	console.log('Serving static files')
})
