//#region requires

const path = require('path');
const rootPath = process.env['ROOT_PATHS'];
const nlib = require(path.join(rootPath, 'nlib', 'nlib'));

const sqldb = require(path.join(nlib.paths.root, 'RaterWebv2x08r9.db'));
const secure = require(path.join(rootPath, 'edl', 'rater-secure')).RaterSecure;

const WebServer = require(path.join(rootPath, 'nlib', 'nlib-express'));
const WebRouter = WebServer.WebRouter;
const router = new WebRouter();

//#endregion

//#region exec/validate wrapper method

const exec = async (db, callback) => {
    let ret;
    let connected = await db.connect();
    if (connected) {
        ret = await callback();
        await db.disconnect();
    }
    else {
        ret = db.error(db.errorNumbers.CONNECT_ERROR, 'No database connection.');
    }
    return ret;
}
const validate = (db, data) => {
    let result = data;
    if (!result) {
        result = db.error(db.errorNumbers.NO_DATA_ERROR, 'No data returns');
    }
    else {
        result = checkForError(data);
    }
    return result;
}
const checkForError = (data) => {
    let result = data;
    if (result.out && result.out.errNum && result.out.errNum !== 0) {
        result.errors.hasError = true;
        result.errors.errNum = result.out.errNum;
        result.errors.errMsg = result.out.errMsg;
    }
    return result;
}

//#endregion

const api = class {
    static async SaveBranchs(db, params) {
        let ret;
        let rets = [];
        let customerId = params.customerId;
        if (params && params.items) {
            let items = params.items;
            let branchId;

            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = customerId;
                if (item.langId === 'EN') {
                    ret = await db.SaveBranch(item);
                    branchId = ret.out.branchId;
                    rets.push(ret);
                }
            }
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = params.customerId;
                if (!item.branchId || item.branchId === '') {
                    item.branchId = branchId;
                }
                if (item.langId !== 'EN') {
                    ret = await db.SaveBranchML(item);
                    rets.push(ret);
                }                
            }
        }
        return rets;
    }
    static async SaveMemberInfos(db, params) {
        let ret;
        let rets = [];
        let customerId = params.customerId;
        if (params && params.items) {
            let items = params.items;
            let memberId;

            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = customerId;
                if (item.langId === 'EN') {
                    ret = await db.SaveMemberInfo(item);
                    memberId = ret.out.memberId;
                    rets.push(ret);
                }
            }
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = params.customerId;
                if (!item.memberId || item.memberId === '') {
                    item.memberId = memberId;
                }                
                if (item.langId !== 'EN') {
                    ret = await db.SaveMemberInfoML(item);
                    rets.push(ret);
                }                
            }
        }
        return rets;
    }
    static async SaveDevices(db, params) {
        let ret;
        let rets = [];
        let customerId = params.customerId;
        if (params && params.items) {
            let items = params.items;
            let deviceId;

            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = customerId;
                if (item.langId === 'EN') {
                    ret = await db.SaveDevice(item);
                    deviceId = ret.out.deviceId;
                    rets.push(ret);
                }
            }
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = params.customerId;
                if (!item.deviceId || item.deviceId === '') {
                    item.deviceId = deviceId;
                }                
                if (item.langId !== 'EN') {
                    ret = await db.SaveDeviceML(item);
                    rets.push(ret);
                }                
            }
        }
        return rets;
    }
    static async SaveOrgs(db, params) {
        let ret;
        let rets = [];
        let customerId = params.customerId;
        if (params && params.items) {
            let items = params.items;
            let orgId;

            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = customerId;
                if (item.langId === 'EN') {
                    ret = await db.SaveOrg(item);
                    orgId = ret.out.orgId;
                    rets.push(ret);
                }
            }
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.customerId = params.customerId;
                if (!item.orgId || item.orgId === '') {
                    item.orgId = orgId;
                }                
                if (item.langId !== 'EN') {
                    ret = await db.SaveOrgML(item);
                    rets.push(ret);
                }                
            }
        }
        return rets;
    }
}

const routes = class {
    static GetBranchs(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;
        // force langId to null;
        params.langId = null;
        params.customerId = secure.getCustomerId(req, res);
        params.branchId = null;
        params.enabled = true;

        let fn = async () => {
            return db.GetBranchs(params);
        }
        exec(db, fn).then(data => {
            let dbResult = validate(db, data);

            let result = {
                data : null,
                //src: dbResult.data,
                errors: dbResult.errors,
                //multiple: dbResult.multiple,
                //datasets: dbResult.datasets,
                out: dbResult.out
            }
            let records = dbResult.data;
            let ret = {};

            records.forEach(rec => {
                if (!ret[rec.langId]) {
                    ret[rec.langId] = []
                }
                let map = ret[rec.langId].map(c => c.branchId);
                let idx = map.indexOf(rec.branchId);
                let nobj;
                if (idx === -1) {
                    // set id
                    nobj = { branchId: rec.branchId }
                    // init lang properties list.
                    ret[rec.langId].push(nobj)
                }
                else {
                    nobj = ret[rec.langId][idx];
                }
                nobj.branchName = rec.BranchName;
            })
            // set to result.
            result.data = ret;

            WebServer.sendJson(req, res, result);
        })
    }
    static SaveBranchs(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;

        params.customerId = secure.getCustomerId(req, res);

        let fn = async () => {
            return api.SaveBranchs(db, params);
        }
        exec(db, fn).then(data => {
            let results = [];
            let result;
            let dbResult;

            for (let i = 0; i < data.length; i++) {
                dbResult = validate(db, data[i]);

                result = {
                    data : dbResult.data,
                    //src: dbResult.data,
                    errors: dbResult.errors,
                    //multiple: dbResult.multiple,
                    //datasets: dbResult.datasets,
                    out: dbResult.out
                }
                results.push(result);
            }

            WebServer.sendJson(req, res, results);
        })
    }
    static GetMemberInfos(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;
        // force langId to null;
        params.langId = null;
        params.customerId = secure.getCustomerId(req, res);
        params.memberId = null;
        params.enabled = true;

        let fn = async () => {
            return db.GetMemberInfos(params);
        }
        exec(db, fn).then(data => {
            let dbResult = validate(db, data);

            let result = {
                data : null,
                //src: dbResult.data,
                errors: dbResult.errors,
                //multiple: dbResult.multiple,
                //datasets: dbResult.datasets,
                out: dbResult.out
            }
            let records = dbResult.data;
            let ret = {};

            records.forEach(rec => {
                if (!ret[rec.langId]) {
                    ret[rec.langId] = []
                }
                let map = ret[rec.langId].map(c => c.memberId);
                let idx = map.indexOf(rec.memberId);
                let nobj;
                if (idx === -1) {
                    // set id
                    nobj = { memberId: rec.memberId }
                    // init lang properties list.
                    ret[rec.langId].push(nobj)
                }
                else {
                    nobj = ret[rec.langId][idx];
                }
                nobj.MemberType = rec.MemberType;
                nobj.Prefix = rec.Prefix;
                nobj.FirstName = rec.FirstName;
                nobj.LastName = rec.LastName;
                nobj.UserName = rec.UserName;
                nobj.Password = rec.Password;
                nobj.TagId = rec.TagId;
                nobj.IDCard = rec.IDCard;
                nobj.EmployeeCode = rec.EmployeeCode;
            })
            // set to result.
            result.data = ret;

            WebServer.sendJson(req, res, result);
        })
    }
    static SaveMemberInfos(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;

        params.customerId = secure.getCustomerId(req, res);

        let fn = async () => {
            return api.SaveMemberInfos(db, params);
        }
        exec(db, fn).then(data => {
            let results = [];
            let result;
            let dbResult;

            for (let i = 0; i < data.length; i++) {
                dbResult = validate(db, data[i]);

                result = {
                    data : dbResult.data,
                    //src: dbResult.data,
                    errors: dbResult.errors,
                    //multiple: dbResult.multiple,
                    //datasets: dbResult.datasets,
                    out: dbResult.out
                }
                results.push(result);
            }

            WebServer.sendJson(req, res, results);
        })
    }
    static GetDevices(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;
        // force langId to null;
        params.langId = null;
        params.customerId = secure.getCustomerId(req, res);
        params.deviceId = null;
        params.enabled = true;

        let fn = async () => {
            return db.GetDevices(params);
        }
        exec(db, fn).then(data => {
            let dbResult = validate(db, data);

            let result = {
                data : null,
                //src: dbResult.data,
                errors: dbResult.errors,
                //multiple: dbResult.multiple,
                //datasets: dbResult.datasets,
                out: dbResult.out
            }
            let records = dbResult.data;
            let ret = {};

            records.forEach(rec => {
                if (!ret[rec.langId]) {
                    ret[rec.langId] = []
                }
                let map = ret[rec.langId].map(c => c.deviceId);
                let idx = map.indexOf(rec.deviceId);
                let nobj;
                if (idx === -1) {
                    // set id
                    nobj = { deviceId: rec.deviceId }
                    // init lang properties list.
                    ret[rec.langId].push(nobj)
                }
                else {
                    nobj = ret[rec.langId][idx];
                }
                nobj.DeviceName = rec.DeviceName;
                nobj.Location = rec.Location;
                nobj.deviceTypeId = rec.deviceTypeId;
                nobj.memberId = rec.memberId;
                nobj.orgId = rec.orgId;
                nobj.Type = rec.Type;
            })
            // set to result.
            result.data = ret;

            WebServer.sendJson(req, res, result);
        })
    }
    static SaveDevices(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;

        params.customerId = secure.getCustomerId(req, res);

        let fn = async () => {
            return api.SaveDevices(db, params);
        }
        exec(db, fn).then(data => {
            let results = [];
            let result;
            let dbResult;

            for (let i = 0; i < data.length; i++) {
                dbResult = validate(db, data[i]);

                result = {
                    data : dbResult.data,
                    //src: dbResult.data,
                    errors: dbResult.errors,
                    //multiple: dbResult.multiple,
                    //datasets: dbResult.datasets,
                    out: dbResult.out
                }
                results.push(result);
            }

            WebServer.sendJson(req, res, results);
        })
    }
    static GetOrgs(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;
        // force langId to null;
        params.langId = null;
        params.customerId = secure.getCustomerId(req, res);
        params.branchId = null;
        params.orgId = null;
        params.enabled = true;

        let fn = async () => {
            return db.GetOrgs(params);
        }
        exec(db, fn).then(data => {
            let dbResult = validate(db, data);

            let result = {
                data : null,
                //src: dbResult.data,
                errors: dbResult.errors,
                //multiple: dbResult.multiple,
                //datasets: dbResult.datasets,
                out: dbResult.out
            }
            let records = dbResult.data;
            let ret = {};

            records.forEach(rec => {
                if (!ret[rec.langId]) {
                    ret[rec.langId] = []
                }
                let map = ret[rec.langId].map(c => c.orgId);
                let idx = map.indexOf(rec.orgId);
                let nobj;
                if (idx === -1) {
                    // set id
                    nobj = { orgId: rec.orgId }
                    // init lang properties list.
                    ret[rec.langId].push(nobj)
                }
                else {
                    nobj = ret[rec.langId][idx];
                }
                nobj.parentId = rec.parentId;
                nobj.branchId = rec.branchId;
                nobj.OrgName = rec.OrgName;
                nobj.BranchName = rec.BranchName;
            })
            // set to result.
            result.data = ret;

            WebServer.sendJson(req, res, result);
        })
    }
    static SaveOrgs(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;

        params.customerId = secure.getCustomerId(req, res);

        let fn = async () => {
            return api.SaveOrgs(db, params);
        }
        exec(db, fn).then(data => {
            let results = [];
            let result;
            let dbResult;

            for (let i = 0; i < data.length; i++) {
                dbResult = validate(db, data[i]);

                result = {
                    data : dbResult.data,
                    //src: dbResult.data,
                    errors: dbResult.errors,
                    //multiple: dbResult.multiple,
                    //datasets: dbResult.datasets,
                    out: dbResult.out
                }
                results.push(result);
            }

            WebServer.sendJson(req, res, results);
        })
    }
    static UploadQuestionJson(req, res) {
        let params = WebServer.parseReq(req).data;
        params.customerId = secure.getCustomerId(req, res);
        console.log(params)

        let result = createSuccess(null);

        WebServer.sendJson(req, res, result);
    }
    static GetRawVotes(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;
        if (params.langId === undefined || params.langId === null || params.langId === '') {
            params.langId =  'EN';
        }
        params.customerId = secure.getCustomerId(req, res);
        params.deviceId = null;

        let fn = async () => {
            return db.GetRawVotes(params);
        }
        exec(db, fn).then(data => {
            let dbResult = validate(db, data);

            let result = {
                data : null,
                //src: dbResult.data,
                errors: dbResult.errors,
                //multiple: dbResult.multiple,
                //datasets: dbResult.datasets,
                out: dbResult.out
            }
            let records = dbResult.data;
            let ret = {};
            // set to result.
            result.data = records;

            WebServer.sendJson(req, res, result);
        })
    }
    static GetVoteSummaries(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;
        if (params.langId === undefined || params.langId === null || params.langId === '') {
            params.langId =  'EN';
        }
        params.customerId = secure.getCustomerId(req, res);
        params.deviceId = null;

        let fn = async () => {
            return db.GetVoteSummaries(params);
        }
        exec(db, fn).then(data => {
            let dbResult = validate(db, data);

            let result = {
                data : null,
                //src: dbResult.data,
                errors: dbResult.errors,
                //multiple: dbResult.multiple,
                //datasets: dbResult.datasets,
                out: dbResult.out
            }
            let records = dbResult.data;
            let ret = {};
            // set to result.
            result.data = records;

            WebServer.sendJson(req, res, result);
        })
    }

    static SaveJsonQuestion(req, res) {
        let params = WebServer.parseReq(req).data;
        let customerId = secure.getCustomerId(req, res);
        if (customerId) params.customerId = customerId;
        params.qsetid = 'QS00001' // hard code.
        let targetPath = path.join(rootPath, 'customer', params.customerId, 'Question')
        mkdirp.sync(targetPath);
        let targetFile =  path.join(targetPath, params.qsetid + '.json')
        let data = {
            id: params.qsetid,
            data: params.data
        };
        fs.writeFileSync(targetFile, JSON.stringify(data), 'utf8')

        let result = nlib.NResult.data({});
        WebServer.sendJson(req, res, result);
    }
}

router.use(secure.checkAccess);
// branch
router.all('/branch/search', routes.GetBranchs);
router.post('/branch/save', routes.SaveBranchs);
// member
router.all('/member/search', routes.GetMemberInfos);
router.post('/member/save', routes.SaveMemberInfos);
// device
router.all('/device/search', routes.GetDevices);
router.post('/device/save', routes.SaveDevices);
// org
router.all('/org/search', routes.GetOrgs);
router.post('/org/save', routes.SaveOrgs);

router.post('/question/upload/', routes.UploadQuestionJson);

router.all('/report/rawvotes/search', routes.GetRawVotes);
router.all('/report/votesummaries/search', routes.GetVoteSummaries);

router.post('/question/save', routes.SaveJsonQuestion);

const init_routes = (svr) => {
    svr.route('/customer/api/', router);
};

module.exports.init_routes = exports.init_routes = init_routes;