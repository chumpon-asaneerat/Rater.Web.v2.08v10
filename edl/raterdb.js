const path = require('path');
const rootPath = process.env['ROOT_PATHS'];
// for production
const nlibPath = path.join(rootPath, 'nlib');
const nlibjs = path.join(nlibPath, 'nlib');
const nlib = require(nlibjs);

const nlibExprjs = path.join(nlibPath, 'nlib-express');
const WebServer = require(nlibExprjs);

const sqldb = require(path.join(nlib.paths.root, 'RaterWebv2x08r9.db'));

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

//#region router type and variables

const WebRouter = WebServer.WebRouter;

//#endregion

class RaterWebDb {
    GetLanguages(req, res) {
        let db = new sqldb();
        let params = WebServer.parseReq(req).data;
        // force enable only.
        params.enabled = true;
        let fn = () => db.GetLanguages(params);
        exec(db, fn).then(data => {
            let result = validate(db, data);
            WebServer.sendJson(req, res, result);
        })
    }

    /*
    GetRandomCode	PROCEDURE
    GetErrorMsg	PROCEDURE
    SaveErrorMsg	PROCEDURE
    SaveErrorMsgML	PROCEDURE
    GetErrorMsgs	PROCEDURE
    SaveLanguage	PROCEDURE
    DisableLanguage	PROCEDURE
    EnableLanguage	PROCEDURE
    GetLanguages	PROCEDURE
    SavePeriodUnit	PROCEDURE
    SavePeriodUnitML	PROCEDURE
    GetPeriodUnits	PROCEDURE
    SaveLimitUnit	PROCEDURE
    SaveLimitUnitML	PROCEDURE
    GetLimitUnits	PROCEDURE
    GetMemberTypes	PROCEDURE
    SaveLicenseType	PROCEDURE
    SaveLicenseTypeML	PROCEDURE
    GetLicenseTypes	PROCEDURE
    SaveLicenseFeature	PROCEDURE
    GetLicenseFeatures	PROCEDURE
    GetLicenses	PROCEDURE
    SaveUserInfo	PROCEDURE
    SaveUserInfoML	PROCEDURE
    GetUserInfos	PROCEDURE
    SaveLicenseHistory	PROCEDURE
    GetCustomerHistories	PROCEDURE
    RevokeLicense	PROCEDURE
    ExtendLicense	PROCEDURE
    CheckLicense	PROCEDURE
    SaveCustomer	PROCEDURE
    SaveCustomerML	PROCEDURE
    GetCustomers	PROCEDURE
    DeleteCustomer	PROCEDURE
    DeleteCustomers	PROCEDURE
    SaveMemberInfo	PROCEDURE
    SaveMemberInfoML	PROCEDURE
    GetMemberInfos	PROCEDURE
    SaveBranch	PROCEDURE
    SaveBranchML	PROCEDURE
    GetBranchs	PROCEDURE
    SaveOrg	PROCEDURE
    SaveOrgML	PROCEDURE
    GetOrgs	PROCEDURE
    SaveQSet	PROCEDURE
    SaveQSetML	PROCEDURE
    GetQSets	PROCEDURE
    SaveQSlide	PROCEDURE
    SaveQSlideML	PROCEDURE
    GetQSlides	PROCEDURE
    SaveQSlideItem	PROCEDURE
    SaveQSlideItemML	PROCEDURE
    GetQSlideItems	PROCEDURE
    SaveDevice	PROCEDURE
    SaveDeviceML	PROCEDURE
    GetDevices	PROCEDURE
    GetDeviceTypes	PROCEDURE
    SaveVote	PROCEDURE
    GetVoteSummaries	PROCEDURE
    GetRawVotes	PROCEDURE
    Register	PROCEDURE
    CheckUsers	PROCEDURE
    SignIn	PROCEDURE
    CheckAccess	PROCEDURE
    GetAccessUser	PROCEDURE
    SignOut	PROCEDURE
    */

    /*
    async GetMemberTypes(db, params) { return await db.GetMemberTypes(params); }
    async GetPeriodUnits(db, params) { return await db.GetPeriodUnits(params); }
    async GetLimitUnits(db, params) { return await db.GetLimitUnits(params); }
    async GetLicenseTypes(db, params) { return await db.GetLicenseTypes(params); }
    async GetLicenseFeatures(db, params) { return await db.GetLicenseFeatures(params); }

    async GetDeviceTypes(db, params) { return await db.GetDeviceTypes(params); }

    async GetBranchs(db, params) { return await db.GetBranchs(params); }
    async GetMemberInfos(db, params) { return await db.GetMemberInfos(params); }
    async GetDevices(db, params) { return await db.GetDevices(params); }
    async GetOrgs(db, params) { return await db.GetOrgs(params); }
    */
}

const webdb = new RaterWebDb();

module.exports = exports = webdb;
