//#region common requires

const path = require('path');
const rootPath = process.env['ROOT_PATHS'];

// for production
const nlibPath = path.join(rootPath, 'nlib');
const nlibjs = path.join(nlibPath, 'nlib');
const nlib = require(nlibjs);

const nlibExprjs = path.join(nlibPath, 'nlib-express');
const WebServer = require(nlibExprjs);

const edlPath = path.join(rootPath, 'edl');
const raterdbjs = path.join(edlPath, 'raterdb');
const raterdb = require(raterdbjs);

//#endregion

//#region router type and variables

const WebRouter = WebServer.WebRouter;
const router = new WebRouter();

//#endregion

const routes = class {
    static GetLanguages(req, res) { 
        raterdb.GetLanguages(req, res);
    }
}

router.all('/languages/search', routes.GetLanguages)

const init_routes = (svr) => {
    svr.route('/api', router);
};

module.exports.init_routes = exports.init_routes = init_routes;