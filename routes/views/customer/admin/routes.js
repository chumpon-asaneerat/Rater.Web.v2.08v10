//#region requires

const path = require('path');
const rootPath = process.env['ROOT_PATHS'];
const nlib = require(path.join(rootPath, 'nlib', 'nlib'));
const sfs = require(path.join(rootPath, 'edl', 'server-fs'));
const secure = require(path.join(rootPath, 'edl', 'rater-secure')).RaterSecure;

const WebServer = require(path.join(rootPath, 'nlib', 'nlib-express'));
const WebRouter = WebServer.WebRouter;
const router = new WebRouter();

//#endregion

//#region api

const routes = class {
    static home(req, res) {
        WebServer.sendFile(req, res, __dirname, 'index.html');
    }
    static memberManage(req, res) {
        WebServer.sendFile(req, res, __dirname, 'member-manage.html');
    }
    static branchManage(req, res) {
        WebServer.sendFile(req, res, __dirname, 'branch-manage.html');
    }
    static orgManage(req, res) {
        WebServer.sendFile(req, res, __dirname, 'org-manage.html');
    }
    static deviceManage(req, res) {
        WebServer.sendFile(req, res, __dirname, 'device-manage.html');
    }
    static questionManage(req, res) {
        WebServer.sendFile(req, res, __dirname, 'question-manage.html');
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

router.get('/', secure.checkAccess, secure.checkRedirect, routes.home)
router.get('/contents', routes.getContents)
router.get('/js/:file', routes.getjsfile)

router.get('/members', secure.checkAccess, secure.checkRedirect, routes.memberManage)
router.get('/members/contents', routes.getContents)
router.get('/members/js/:file', routes.getjsfile)

router.get('/branchs', secure.checkAccess, secure.checkRedirect, routes.branchManage)
router.get('/branchs/contents', routes.getContents)
router.get('/branchs/js/:file', routes.getjsfile)

router.get('/orgs', secure.checkAccess, secure.checkRedirect, routes.orgManage)
router.get('/orgs/contents', routes.getContents)
router.get('/orgs/js/:file', routes.getjsfile)

router.get('/devices', secure.checkAccess, secure.checkRedirect, routes.deviceManage)
router.get('/devices/contents', routes.getContents)
router.get('/devices/js/:file', routes.getjsfile)

router.get('/questions', secure.checkAccess, secure.checkRedirect, routes.questionManage)
router.get('/questions/contents', routes.getContents)
router.get('/questions/js/:file', routes.getjsfile)

router.get('/report', secure.checkAccess, secure.checkRedirect, routes.reportHome)
router.get('/report/contents', routes.getContents)
router.get('/report/js/:file', routes.getjsfile)

router.get('/report/votesummary', secure.checkAccess, secure.checkRedirect, routes.reportVoteSummary)
router.get('/report/votesummary/contents', routes.getContents)
router.get('/report/votesummary/js/:file', routes.getjsfile)

router.get('/report/bar-votesummary', secure.checkAccess, secure.checkRedirect, routes.reportBarVoteSummary)
router.get('/report/bar-votesummary/contents', routes.getContents)
router.get('/report/bar-votesummary/js/:file', routes.getjsfile)

router.get('/report/pie-votesummary', secure.checkAccess, secure.checkRedirect, routes.reportPieVoteSummary)
router.get('/report/pie-votesummary/contents', routes.getContents)
router.get('/report/pie-votesummary/js/:file', routes.getjsfile)

router.get('/report/raw-vote', secure.checkAccess, secure.checkRedirect, routes.reportRawVote)
router.get('/report/raw-vote/contents', routes.getContents)
router.get('/report/raw-vote/js/:file', routes.getjsfile)

router.get('/report/staff-compare', secure.checkAccess, secure.checkRedirect, routes.reportStaffCompare)
router.get('/report/staff-compare/contents', routes.getContents)
router.get('/report/staff-compare/js/:file', routes.getjsfile)

router.get('/report/staff-perf', secure.checkAccess, secure.checkRedirect, routes.reportStaffPerf)
router.get('/report/staff-perf/contents', routes.getContents)
router.get('/report/staff-perf/js/:file', routes.getjsfile)

const init_routes = (svr) => {
    svr.route('/customer/admin', router);
};

module.exports.init_routes = exports.init_routes = init_routes;
