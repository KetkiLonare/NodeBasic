let fs=require('fs');

// fs.writeFile('myFsWritefile.txt',"File Write Using write fs ",function(){
//     console.log("File Written Succesfuly")
// })

// fs.appendFile("appendFileText.txt","File Append 1\n",function(){
//     console.log("File Appended Successfully")
// })

fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data,"data")
})


// fs.unlink('myFsWriteFile',function(err,data){
//     if(err) throw err;
//     console.log("File deleted Succusully");
    
// })