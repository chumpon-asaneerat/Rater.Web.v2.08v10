//#region EventService class

class EventService {
    constructor() {
        this.name = {}
    }
    raise(eventName, data) {
        // Raise event.
        let evt;
        if (data) {
            evt = new CustomEvent(eventName, { detail: { data: data } });
        }
        else {
            evt = new CustomEvent(eventName);
        }
        document.dispatchEvent(evt);
    }
}

//console.log('Init event service...');
window.events = window.events || new EventService();

//#endregion

//#region avaliable events name for app.

/** app language changed. */
window.events.name.LanguageChanged = 'app:language:change';

/** app screen changed. */
window.events.name.ScreenChanged = 'app:screen:change';

/** Show OSD. */
window.events.name.ShowOsd = 'app:osd:show';
/** Update OSD. */
window.events.name.UpdateOsd = 'app:osd:update';
/** Hide OSD. */
window.events.name.HideOsd = 'app:osd:hide';

//#endregion

//#region LocalStorage class

class LocalStorage {
    constructor() {
        this._name = ''
        this._data = null
        this._ttl = 0;
    };
    //-- public methods.
    checkExist() {
        if (!this.data) {
            this.data = this.getDefault();
            this.save();
        }
    };
    getDefault() { return {} };
    save() {
        if (!this._name) return; // no name specificed.
        let ttl = (this._ttl) ? this._ttl : 0;
        nlib.storage.set(this._name, this._data, { TTL: ttl }); // 1 days.
    };
    load() {
        if (!this._name) return; // no name specificed.
        let ttl = (this._ttl) ? this._ttl : 0;
        this._data = nlib.storage.get(this._name);
    };
    //-- public properties.
    get name() { return this._name; };
    set name(value) { this._name = value; };
    get data() { return this._data; };
    set data(value) { this._data = value; };
    get ttl() { return this._ttl; };
    set ttl(value) { this._ttl = value; };
};

//#endregion

//#region UserPerference class

class UserPerference extends LocalStorage {
    constructor() {
        super();
        this.name = 'uperf'
        this.ttl = 0;
        this._prefchanged = null;
        this.load();
        this.checkExist();
    };
    //-- public methods.
    getDefault() { return { langId: 'EN' } };
    load() { super.load(); };
    save() { super.save(); };
    //-- public properties.
    get langId() {
        if (!this.data) this.checkExist();
        return this.data.langId;
    };
    set langId(value) {
        if (!this.data) this.checkExist();
        this.data.langId = value;
    };
};

//#endregion

//#region LanguageService class

class LanguageService {
    constructor() {
        this.pref = new UserPerference();
        this.pref.load(); // load once.
        this.languages = null;
        this.langId = LanguageService.defaultId;
        this.current = LanguageService.defaultLang;
    }
    getLanguages() {
        let self = this;
        let fn = (r) => {
            let data = api.parse(r);
            self.languages = data.records;
            self.change(self.pref.langId); // set langId from preference.
        }
        //XHR.get('/api/languages/search', { enable: true }, fn);
    }
    change(langId) {
        let newId = (langId) ? langId.toUpperCase() : LanguageService.defaultId;
        if (this.langId != newId) {
            this.langId = newId;
            let ids = this.languages.map(lang => lang.langId);
            let idx = ids.indexOf(newId);
            this.current = (idx === -1) ? LanguageService.defaultLang : this.languages[idx];
            // keep langid to storage.
            this.pref.langId = this.current.langId;
            this.pref.save();
            // Raise event.
            events.raise(events.name.LanguageChanged);
        }
    }
    static get defaultId() { return 'EN' }
    static get defaultLang() { 
        return {
            Description: "English",
            Enabled: true,
            SortOrder: 1,
            flagId: "US",
            langId: "EN"
        } 
    }
}

//console.log('Init language service...');
window.lang = window.lang || new LanguageService();
lang.getLanguages();

//#endregion

//#region OSDService class

class OSDService {
    constructor() {
        this.handle = null;
        this.shown = false;
        this.lastUpdate = new Date();
        /** timeout in millisecond. */
        this.timeout = 5000;
    }
    get elapse() { return new Date() - this.lastUpdate; }
    show() {
        let self = this;        
        if (!this.shown) {
            this.lastUpdate = new Date();
            this.shown = true;
            // raise message
            events.raise(events.name.ShowOsd);
            this.handle = setInterval(() => {
                if (self.elapse > self.timeout) self.hide()
            }, 100);
        }
        // not show so show osd
        events.raise(events.name.ShowOsd)
    }
    info(message) {
        this.lastUpdate = new Date();
        if (!this.shown) this.show();
        // raise message
        events.raise(events.name.UpdateOsd, { msg: message, type: 'info' })
    }
    warn(message) {
        this.lastUpdate = new Date();
        if (!this.shown) this.show();
        // raise message
        events.raise(events.name.UpdateOsd, { msg: message, type: 'warn' })
    }
    err(message) {
        this.lastUpdate = new Date();
        if (!this.shown) this.show();
        // raise message
        events.raise(events.name.UpdateOsd, { msg: message, type: 'error' })
    }
    hide() {
        if (this.shown) {
            //console.log('OSD hide.')
            clearInterval(this.handle);
        }
        this.lastUpdate = new Date();
        this.handle = null;
        this.shown = false;
        // raise message
        events.raise(events.name.HideOsd)
    }
}

window.osd = window.osd || new OSDService()

//#endregion