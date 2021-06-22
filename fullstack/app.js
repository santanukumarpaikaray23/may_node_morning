var express = require('express');
var app = express();
var dotenv = require ('dotenv');
dotenv.config()
var port=process.env.PORT || 9000;
const morgan = require('morgan');
var chalk = require('chalk');
app.use(morgan('tiny'))

var hotelRouter = require('./src/router/hotelRoutes');
var cityRouter = require('./src/router/cityRoutes');

//static file path
app.use(express.static(__dirname+'/public'))
//html file
app.set('views','./src/views');
//view engine
app.set('view engine','ejs')



app.get('/',function(req,res){
    res.render('index',{title:`Home Page`})
})

app.use('/hotel',hotelRouter)
app.use('/city',cityRouter)

app.listen(port,function(err){
    if(err)throw err;
    else{
        console.log(chalk.red("Server is running on port"+port))
    }
})