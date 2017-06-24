/**
 * Created by Administrator on 2017/6/24.
 */
var common=require('../lib/common');
module.exports={
    login:function (req,res) {
        var param=req.body;
        var user={
            name:'ahui',
            pwd:'123456'
        }
        if(param.name == user.name && param.password == user.pwd){
            req.session.user=user;
            common.callback(res,{code:200,msg:'success'})
        }
    }
}