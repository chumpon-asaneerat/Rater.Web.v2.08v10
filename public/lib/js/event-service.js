//#region EventService class

class EventService {
    constructor() { }
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
; (function () {
    //console.log('Init event service...');
    window.events = window.events || new EventService();    
})();

//#endregion