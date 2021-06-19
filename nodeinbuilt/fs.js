var fs = require('fs')

// fs.appendFile("TextData.txt",'This is second line\n',function(err){
//     if(err) throw err;
//     console.log("File Appended")
// })
fs.readFile('db.json','utf-8',function(err,data){
    if(err)throw err;
    console.log(data)
})
 

