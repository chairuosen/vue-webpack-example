var fs = require('fs');
var path = require('path');
var mmm = require('mmmagic');
var magic = new mmm.Magic(mmm.MAGIC_MIME_TYPE | mmm.MAGIC_MIME_ENCODING);

require('http').createServer(function(req,res){
    if( /.*\.[a-z]{2,4}$/.test(req.url) ){
        var filePath = path.join(__dirname, req.url);
        if(!fs.existsSync(filePath)){
            res.writeHead(404);
            res.end('');
            return;
        }
        var stat = fs.statSync(filePath);
        magic.detectFile(filePath, function(err, result) {
            if (err) throw err;
            if(/.*\.js$/.test(req.url)){
                result = "application/javascript";
            }
            // console.log(req.url,result);
            res.writeHead(200, {
              'Content-Type': result,
              'Content-Length': stat.size
            });

            var readStream = fs.createReadStream(filePath);
            // We replaced all the event handlers with a simple call to readStream.pipe()
            readStream.pipe(res);
        });
        
    }else{
        res.end(require('fs').readFileSync('./index.html'));
    }
    
}).listen(5000);