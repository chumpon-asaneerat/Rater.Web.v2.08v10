const nlib = require('./nlib/nlib')
const rootPath = process.env['ROOT_PATHS'];

const path = require('path');
const sfs = require('./edl/server-fs');

//console.log('root:', rootPath)

let contentPath = path.join(rootPath, 'routes', 'sample', 'contents')

//console.log('content:', contentPath)

let folders = sfs.getDirectories(contentPath);
//console.log('folders:', folders)

let langJson = sfs.getContents(contentPath);
//console.log('lang paths:', langJson)

console.log(JSON.stringify(langJson, null, 2))