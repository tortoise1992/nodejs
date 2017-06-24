/**
 * Created by Administrator on 2017/6/24.
 */
module.exports={
    callback:function (res,ret){
        if(typeof ret === 'undefined'){
            res.json({
                code:'-1',
                msg:'失败'
            })
        }else {
            res.json(ret);
        }
    }
}