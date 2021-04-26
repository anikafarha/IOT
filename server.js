const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express()

app.use(express.urlencoded({ extended: false }));

//index
app.get('/', (req, res) => {
    res.render('index.html')
})

//api.authRouter(app);
app.listen(3000)