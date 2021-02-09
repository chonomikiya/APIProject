var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const productRouter = require('./routes/product')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;

//https://tamotech.blog/2020/05/08/express-mongo-connect2/
require('dotenv').config();

var mongoose = require('mongoose');
const router = require('./routes/index');
// router.get('/', function (req, res){
mongoose
	.connect(process.env.DEV_DB, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true})
	.then(()=> console.log('DB Connected'))
	.catch(err=>{
		console.log(err);
  })
  var productSchema = new mongoose.Schema({
    _id: Number,
    best_seller: Boolean,
    product_reviews: Array,
    product_by: String,
    product_link: String,
    product_imgurl: String,
    product_summary: String,
    title: String,
  })
  var UserModel = mongoose.model('products',productSchema);
  UserModel.find({},{product_by:1,title:1,product_imgurl:1},function(err,docs){
    if(err) throw err;
    console.log(docs);
  })
// })