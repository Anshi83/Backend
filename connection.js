const mongoose = require('mongoose');
const url = "mongodb+srv://Pakariaon90:Pakariaon90@cluster0.3crxahe.mongodb.net/mydb500?retryWrites=true&w=majority&appName=Cluster0";

//asynchronous function
mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;