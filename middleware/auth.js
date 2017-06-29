/**
 * Created by Administrator on 2017/6/29.
 */
var jwt=require('jsonwebtoken');


module.exports=function (req,res,next) {
    var token=req.query.token || req.body.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token,'ahuijs',function (err,decode) {
            if(err){
                return res.json({msg:'token信息错误'})
            }else {
                req.userinfo=decode;
                next();
            }
        })
    }else {
        return res.json({msg:'没有token'})
    }
}