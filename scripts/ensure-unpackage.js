const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../unpackage');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log('Created directory:', dir);
}
