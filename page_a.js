var express = require('express');
var mongoose = require('mongoose');
const morgan = require('morgan');
const user = require("./routes/user");
const product = require("./routes/product");
const cors = require('cors');


var router = express.Router();


const app = express();

/* GET home page. */
router.get('/', function(req, res, next){

    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    mongoose
      .connect(process.env.DEV_DB,options)
      .then(()=> console.log('DB Connected'))
      .catch(err=>{
        console.log(err);
      })
      app.use(morgan('dev'));
      app.use(cors({ origin: "*"}));
      app.use("/user", user);
      app.use("/product", product);

    
    const db = mongoose.connection;
    
    db.on('error',console.error.bind(console,'DB connection error:'));
    db.once('open', () => console.log('DB connection successful !!!!'));
    
    // var Schema = mongoose.Schema;
    // var UserSchema = new Schema({
    // name: String,
    // age: Number,
    // id: Number
    // });
    // var UserModel = mongoose.model('user', UserSchema);

    // UserModel.find({}, function(err, docs) {
    //     var data = {
    //         title: 'MongoDB mongo_user_db users' ,
    //         content: docs
    //     };
    //     res.render('page_a', data);
    // });
});

//https://tamotech.blog/2020/05/08/express-mongo-connect2/

module.exports = router;