//#region common requires

const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp')

const rootPath = process.env['ROOT_PATHS'];

// for production
const nlibPath = path.join(rootPath, 'nlib');
// for nlib-server dev project
//const nlibPath = path.join(rootPath, 'src', 'server', 'js', 'nlib');
const nlibjs = path.join(nlibPath, 'nlib');
const nlib = require(nlibjs);

const nlibExprjs = path.join(nlibPath, 'nlib-express');

const WebServer = require(nlibExprjs);

//#endregion

//#region json result methods

const createSuccess = (data) => {
    let ret = nlib.NResult.data(data);
    return ret;
}

const createError = (errNum, errMsg) => {
    let ret = nlib.NResult.error(errNum, errMsg);
    return ret;
}

//#endregion

//#region router type and variables

const WebRouter = WebServer.WebRouter;
const router = new WebRouter();

//#endregion

//#region api

const routes = class {
    static GetContent(req, res) {
        let data = {
            "EN": {},
            "TH": {},
        };
        let result = createSuccess(data);
        WebServer.sendJson(req, res, result);
    }
}

//#endregion

router.post('/content', routes.GetContent);

const init_routes = (svr) => {
    svr.route('/sample/api/', router);
};

module.exports.init_routes = exports.init_routes = init_routes;