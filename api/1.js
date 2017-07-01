/**
 * Created by Administrator on 2017/6/29.
 */
var fs=require('fs');
// fs.readFile('./a.txt',function (err,data) {
//     if(err) throw err;
//     console.log(data.toString())
// })
function hello (file) {
    return new Promise(function (resolve,reject) {
        fs.readFile(file,(err,data) =>{
            if(err){
                reject(err)
            }else {
                resolve(data.toString())
            }
        })
    })
}

hello('./b.txt').then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})