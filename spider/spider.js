/**
 * Created by Administrator on 2017/7/1.
 */
var superAgent=require('superagent');
var cheerio=require('cheerio');
var eventProxy=require('eventproxy');
var ep=new eventProxy();
var async=require('async');
var url=require('url');
var baseUrl='http://tv.youku.com/?spm=a2hww.20023042.topNav.5~1~3!2~A';
var listUrl='http://list.youku.com/category/show/c_97_g_%E6%AD%A6%E4%BE%A0_s_1_d_1.html?spm=a2htv.20009910.m_86809.5~5~5!2~1~3!2~A';
var fs=require('fs');
var data=[];
function getUrl(tag,page) {
    return 'http://list.youku.com/category/show/c_97_g_'+tag+'_s_1_d_1_p_'+page+'.html?spm=a2htv.20009910.m_86809.5~5~5!2~1~3!2~A'
}
var test=[];
for(var i=1;i<=5;i++){
    test.push('http://cnodejs.org/?tab=all&page='+i)
}

async.mapLimit(test,3,fetchSecondUrl,function (err,result) {
    // result.forEach(function (item) {
    //     console.log(item)
    // })
    console.log(result)

})

function fetchSecondUrl(url,callback) {
    superAgent.get(url).end(function (err,res) {
        // if(err) throw err;
        console.log('完成抓取'+url)
        var $=cheerio.load(res.text);
        var title=$('#content .topic_title').first().attr('title')


        callback(null,title)


    })
}

