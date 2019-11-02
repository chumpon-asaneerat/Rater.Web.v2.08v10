<pie-votesummary-result>
    <date-result caption="Date" begin="{ current.begin }" end="{ current.end }"></date-result>
    <virtial if={ current.slides && current.slides.length > 0 }>
        <virtial each={ slide in current.slides }>
            <pie-question-slide slide="{ slide }"></pie-question-slide>
        </virtial>
    </virtial>
    <button onclick="{ goback }">Close</button>
    <style>
        :scope {
            display: block;
            margin: 0 auto;
            padding: 0;
            width: 100%;
            height: 100%;
            /* overflow: hidden; */
            background-color: whitesmoke;
        }
    </style>
    <script>
        //#region Internal Variables

        let self = this;
        let result = null;
        let search = {
            begin: '',
            end: ''
        }
        this.current = {
            begin: '',
            end: '',
            slides: []
        };

        //#endregion

        let updatecontent = () => {
            if (result) {
                self.current = result[lang.langId]
                self.current.begin = search.beginDate;
                self.current.end = search.endDate;
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

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
        }
        let unbindEvents = () => {
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

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

        //#region dom event handlers

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        //#endregion

        this.goback = () => {
            events.raise(events.name.PieSummarySearch)
        }

        this.setup = (criteria) => {
            //console.log('criteria:', criteria)
            search = criteria;
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