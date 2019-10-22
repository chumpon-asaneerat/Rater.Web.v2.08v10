//#region requires

const path = require('path');
//const fs = require('fs');
//const mkdirp = require('mkdirp')
const rootPath = process.env['ROOT_PATHS'];
const nlib = require(path.join(rootPath, 'nlib', 'nlib'));
const WebServer = require(path.join(rootPath, 'nlib', 'nlib-express'));
const WebRouter = WebServer.WebRouter;
const router = new WebRouter();

//const secure = require(path.join(rootPath, 'edl', 'rater-secure')).RaterSecure;
//const sqldb = require(path.join(rootPath, 'RaterWebv2x08r9.db'));

//#endregion

//#region api

const routes = class {
    static home(req, res) {
        WebServer.sendFile(req, res, __dirname, 'index.html');
    }
    static getjsfile(req, res) {
        let file = req.params.file.toLowerCase();
        let files = ['app.js']
        let idx = files.indexOf(file);
        if (idx !== -1) {
            let fname = path.join(__dirname, 'js', files[idx]);
            WebServer.sendFile(req, res, fname);
        }
    }
    static getContents(req, res) {
        let data = {
            "EN": {},
            "TH": {},
        };
        let result = nlib.NResult.data(data);
        WebServer.sendJson(req, res, result);
    }

    /*
    static getContents(req, res) {
        let contentPath = path.join(__dirname, 'contents');
        let folders = getDirectories(contentPath);
        let json = {}
        folders.forEach(dir => {
            let langId = dir.replace(contentPath + '\\', '')
            json[langId] = JSON.parse(fs.readFileSync(path.join(dir, 'content.json'), 'utf8'))
        })
        WebServer.sendJson(req, res, nlib.NResult.data(json));
    }
    */
}

//#endregion

router.get('/', routes.home)
router.get('/contents', routes.getContents)
router.get('/js/:file', routes.getjsfile)

const init_routes = (svr) => {
    svr.route('/sample', router);
};

module.exports.init_routes = exports.init_routes = init_routes;