<bar-votesummary-search>
    <h3>Bar Search Criteria.</h3>
    <button onclick="{ onseach }">Search</button>
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

        this.onseach = () => {
            let criteria = {
                qsetId: 'QS00001',
                beginDate: '2019-10-01',
                endDate: '2019-11-01',
                slides: [
                    { qSeq: 1 },
                    { qSeq: 2 },
                    { qSeq: 3 }
                ],
                orgs: [
                    { orgId: 'O0001' },
                    { orgId: 'O0003' },
                    { orgId: 'O0008' }
                ]
            }
            events.raise(events.name.BarSummaryResult, criteria)
        }
    </script>
</bar-votesummary-search>