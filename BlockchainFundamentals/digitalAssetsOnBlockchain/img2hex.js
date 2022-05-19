const fs = require('fs');

imgRead=fs.readFileSync('test-pattern.jpg')

imgencode=new Buffer(imgRead).toString('hex')

console.log(imgencode)