const path = require("path");

function pics(req,res){
    res.sendFile(path.join(__dirname,'..','public','download.jpg'));
}

module.exports = pics;