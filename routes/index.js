var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.sign){
        res.render('sign',{session:req.session})
    }else {
        res.render('index')
    }
});
router.post('/sign',function (req,res,next) {

    req.session.sign=true;
    req.session.name='ahui'
    res.send('hello '+req.session.name)

})
router.get('/out',function (req,res,next) {
    req.session.destroy();
    res.redirect('/')
})
module.exports = router;
