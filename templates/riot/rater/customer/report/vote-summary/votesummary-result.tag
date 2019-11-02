<votesummary-result>
    <h3>Vote Summary Search Result.</h3>
    <button onclick="{ goback }">Close</button>
    <style>
        :scope {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            /* overflow: hidden; */
        }
    </style>
    <script>
        //#region Internal Variables

        let self = this;

        //#endregion

        //#region controls variables and methods

        let initCtrls = () => {}
        let freeCtrls = () => {}

        //#endregion

        //#region document listener add/remove handler

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        //#endregion

        //#region events bind/unbind

        let bindEvents = () => {}
        let unbindEvents = () => {}

        //#endregion

        //#region riot handlers

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        //#endregion

        this.goback = () => {
            events.raise(events.name.VoteSummarySearch)
        }

        this.setup = (criteria) => {
            console.log('criteria:', criteria)
        }
    </script>
</votesummary-result>