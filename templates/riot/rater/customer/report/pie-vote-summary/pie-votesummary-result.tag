<pie-votesummary-result>
    <h3>Pie Search Result.</h3>
    <date-result></date-result>
    <question-slide></question-slide>
    <question-slide></question-slide>
    <question-slide></question-slide>
    <button onclick="{ goback }">Close</button>
    <style>
        :scope {
            margin: 0 auto;
            padding: 0;
            width: 100%;
            height: 100%;
            /* overflow: hidden; */
            background-color: whitesmoke !important;
        }
    </style>
    <script>
        //#region Internal Variables

        let self = this;
        let result = null;
        this.current = null;

        //#endregion

        let updatecontent = () => {
            if (result) {
                self.current = result[lang.langId]
                console.log(self.current)
                self.update();
            }
        }

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
            events.raise(events.name.PieSummarySearch)
        }

        this.setup = (criteria) => {
            //console.log('criteria:', criteria)
            $.ajax({
                type: "POST",
                url: "/customer/api/report/votesummaries/search",
                data: JSON.stringify(criteria),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: (ret) => {
                    //console.log(ret);
                    result = ret.data;
                    updatecontent();
                },
                failure: (errMsg) => {
                    console.log(errMsg);
                }
            })
        }
    </script>
</pie-votesummary-result>