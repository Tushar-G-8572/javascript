const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// app.use(express.static('/public'));
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
   res.render("index")
})

module.exports = app;