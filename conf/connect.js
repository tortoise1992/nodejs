/**
 * Created by Administrator on 2017/6/30.
 */
var mysql=require('mysql');
var dbConfig=require('./db');
module.exports=mysql.createPool(dbConfig.mysql);