var express = require('express')

var app = express()

app.use(express.static(__dirname+'/client'))

app.get('/', function(req, res){
    return res.status(200).send({message: 'Hey There!'})
})

app.get('/error', function(req, res){
    throw new Error('errored')
    return res.status(500).send({})
})

app.listen(3000, function(){
    console.log('server on 3000')
})