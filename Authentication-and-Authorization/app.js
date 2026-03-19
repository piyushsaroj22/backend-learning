const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get("/", function (req, res) {
    bcrypt.compare("piyush", "$2b$10$5jDqQ0guL9DrxexrhzmeQulBS8UkIlrIgmVng9S0DUdYKVT2pHEgS", function(err, result) {
        console.log(result)
    // result == true
});
})

app.listen(3000);