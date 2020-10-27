const express = require('express');
const { get } = require('http');
const redis = require('redis');


const app = express();

const client = redis.createClient({
    host : 'redis-server',
    port : 6379
});
client.set('visits',0);

app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
       

        res.status(200).send(visits);
        client.set('visits',parseInt(visits)+1);

    })
})

app.listen(8080,()=> console.log('port 8080'));