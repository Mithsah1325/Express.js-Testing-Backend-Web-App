const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config()

// Use the port specified in .env file, or default to 3000
const port = process.env.PORT;



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send("<h1>Hello From Twitter</h1>")
})

// Define the route handler for /login
app.get('/login', (req, res) => {
    // Send the login HTML file as the response
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})