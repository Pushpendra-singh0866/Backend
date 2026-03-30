const mongoose = require('mongoose');

const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const url = 'mongodb+srv://Pushpendrasingh:p1234@cluster0.x2ji9jn.mongodb.net/mydb?appName=Cluster0';

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
        
})
.catch((err) => {
    console.log(err);
});


module.exports = mongoose;