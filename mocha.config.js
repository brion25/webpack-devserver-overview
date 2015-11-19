var fs = require('fs'),
    path = require('path'),
    __register = require("babel-core/register"),
    filesPath = path.join(__dirname,'./app/'),
    files = verifyFiles(fs.readdirSync(filesPath),filesPath),
    specs = getSpecs(files);

console.log(specs);

function verifyFiles(arrayNames,parentPath){
  return arrayNames.map(function(name){
          var namePath = path.join(parentPath,'/'+name);

          if(fs.lstatSync(namePath).isDirectory()){
            return verifyFiles(fs.readdirSync(namePath),namePath);
          }else{
            return namePath;
          }
        });
}

function getSpecs(arrayFile){
  var temp = [],
      iterate = function(array){
        for(var i = 0;i<array.length;i++){
          if(array[i] instanceof Array){
            iterate(array[i]);
          }else{
            if(/-spec.js$/.test(array[i])){
              temp.push(array[i]);
            }
          }
        }
      }

  iterate(arrayFile);
  return temp;
}
