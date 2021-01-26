var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const uri = require('include');


/* GET home page. */
router.get('/', function(req, res, next){

    const options = {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    mongoose.connect(uri,options);
    
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

//.env
//https://tamotech.blog/2020/05/08/express-mongo-connect2/

module.exports = router;