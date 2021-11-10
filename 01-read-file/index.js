const fs = require('fs');
const path = require('path');
const txtFile = path.join(__dirname, 'text.txt');

const readSt = fs.createReadStream(txtFile);

readSt.on('data', (data) => {
    console.log(data.toString());
});
