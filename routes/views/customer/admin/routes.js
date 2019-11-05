//#region requires

const path = require('path');
const rootPath = process.env['ROOT_PATHS'];
const nlib = require(path.join(rootPath, 'nlib', 'nlib'));
const sfs = require(path.join(rootPath, 'edl', 'server-fs'));
const WebServer = require(path.join(rootPath, 'nlib', 'nlib-express'));
const WebRouter = WebServer.WebRouter;
const router = new WebRouter();

//#endregion

//#region api

const routes = class {
    static home(req, res) {
        WebServer.sendFile(req, res, __dirname, 'index.html');
    }
    static branchManage(req, res) {
        WebServer.sendFile(req, res, __dirname, 'branch-manage.html');
    }
    static deviceManage(req, res) {
        WebServer.sendFile(req, res, __dirname, 'device-manage.html');
    }
    static reportHome(req, res) {
        WebServer.sendFile(req, res, __dirname, 'report-home.html');
    }
    static reportVoteSummary(req, res) {
        WebServer.sendFile(req, res, __dirname, 'report-votesummary.html');
    }
    static reportBarVoteSummary(req, res) {
        WebServer.sendFile(req, res, __dirname, 'report-bar-votesummary.html');
    }
    static reportPieVoteSummary(req, res) {
        WebServer.sendFile(req, res, __dirname, 'report-pie-votesummary.html');
    }
    static reportRawVote(req, res) {
        WebServer.sendFile(req, res, __dirname, 'report-raw-vote.html');
    }
    static reportStaffCompare(req, res) {
        WebServer.sendFile(req, res, __dirname, 'report-staff-compare.html');
    }
    static reportStaffPerf(req, res) {
        WebServer.sendFile(req, res, __dirname, 'report-staff-perf.html');
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
        let data = sfs.getContents(path.join(__dirname, 'contents'));
        let result = nlib.NResult.data(data);
        WebServer.sendJson(req, res, result);
    }
}

//#endregion

router.get('/', routes.home)
router.get('/contents', routes.getContents)
router.get('/js/:file', routes.getjsfile)

router.get('/branchs', routes.branchManage)
router.get('/branchs/contents', routes.getContents)
router.get('/branchs/js/:file', routes.getjsfile)

router.get('/devices', routes.deviceManage)
router.get('/devices/contents', routes.getContents)
router.get('/devices/js/:file', routes.getjsfile)

router.get('/report', routes.reportHome)
router.get('/report/contents', routes.getContents)
router.get('/report/js/:file', routes.getjsfile)

router.get('/report/votesummary', routes.reportVoteSummary)
router.get('/report/votesummary/contents', routes.getContents)
router.get('/report/votesummary/js/:file', routes.getjsfile)

router.get('/report/bar-votesummary', routes.reportBarVoteSummary)
router.get('/report/bar-votesummary/contents', routes.getContents)
router.get('/report/bar-votesummary/js/:file', routes.getjsfile)

router.get('/report/pie-votesummary', routes.reportPieVoteSummary)
router.get('/report/pie-votesummary/contents', routes.getContents)
router.get('/report/pie-votesummary/js/:file', routes.getjsfile)

router.get('/report/raw-vote', routes.reportRawVote)
router.get('/report/raw-vote/contents', routes.getContents)
router.get('/report/raw-vote/js/:file', routes.getjsfile)

router.get('/report/staff-compare', routes.reportStaffCompare)
router.get('/report/staff-compare/contents', routes.getContents)
router.get('/report/staff-compare/js/:file', routes.getjsfile)

router.get('/report/staff-perf', routes.reportStaffPerf)
router.get('/report/staff-perf/contents', routes.getContents)
router.get('/report/staff-perf/js/:file', routes.getjsfile)

const init_routes = (svr) => {
    svr.route('/customer/admin', router);
};

module.exports.init_routes = exports.init_routes = init_routes;
