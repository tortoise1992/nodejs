var express = require('express');
var router = express.Router();
var auth=require('../middleware/auth');
var user_controller=require('../controller/userCtrl');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login',function (req,res,next) {
    user_controller.login(req,res,next);
})

router.post('/auth',function (req,res,next) {
    user_controller.auth(req,res,next);
})

router.get('/list',auth,function (req,res,next) {
    console.log(req.userinfo);
    res.json(req.userinfo)
})
module.exports = router;
