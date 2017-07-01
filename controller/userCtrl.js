/**
 * Created by Administrator on 2017/6/24.
 */
var common=require('../lib/common');
var pool=require('../conf/connect');
var user_modal=require('../modal/user_modal');
var jwt=require('jsonwebtoken');
module.exports={
    auth:function (req,res) {
        var param=req.body;
        var user={
            name:'hello',
            pwd:'123456'
        }
        var jwtSecret='ahuijs';
        var token=jwt.sign(user,jwtSecret,{
            expiresIn:3600
        })
        common.callback(res,{code:200,msg:'success',token:token})

    },
    test:function (req,res) {
        var userinfo=req.session.user;
        if(userinfo){
            common.callback(res,{code:200,msg:'welcome'})
        }
    },
    addComment:function (req,res) {

    }
}