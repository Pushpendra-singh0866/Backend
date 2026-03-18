const mongoose = require('mongoose');

const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const url = 'mongodb+srv://Pushpendrasingh:Pushpa2005@cluster0.x2ji9jn.mongodb.net/mydb?appName=Cluster0';

// const url='mongodb://Pushpendrasingh:Pushpa2005@ac-3ognvsn-shard-00-00.x2ji9jn.mongodb.net:27017,ac-3ognvsn-shard-00-01.x2ji9jn.mongodb.net:27017,ac-3ognvsn-shard-00-02.x2ji9jn.mongodb.net:27017/?ssl=true&replicaSet=atlas-vzjsif-shard-0&authSource=admin&appName=Cluster0'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
        
})
.catch((err) => {
    console.log(err);
});


module.exports = mongoose;