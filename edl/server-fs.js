const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const find = require('find')

const isDirectory = (source) => {
    return fs.lstatSync(source).isDirectory()
}
const getDirectories = (source) => { 
    return fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory)
}

//module.exports.init_routes = exports.init_routes = init_routes;