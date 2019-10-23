<navibar>
    <div class="banner">
        <div class="caption">My Choice Rater Web{ (content.label) ? '&nbsp;-&nbsp;' : '&nbsp;'}</div>
        <div class="title ">{ content.label.screenTitle }</div>
    </div>
    <language-menu></language-menu>
    <links-menu></links-menu>
    <style>
        :scope {
            width: 100vw;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 90px 40px;
            grid-template-rows: 1fr;
            grid-template-areas: 
                'banner lang-menu links-menu';
            background: cornflowerblue;
            color: whitesmoke;
            user-select: none;
        }
        .banner {
            grid-area: banner;
            margin: 0;
            padding: 0 3px;
            display: flex;
            align-items: center;
            justify-content: stretch;
        }
        .banner .title {
            margin: 0;
            padding: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.2rem;
        }

        .banner .caption {
            margin: 0;
            padding: 0;
            width: auto;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.2rem;
        }
        @media only screen and (max-width: 700px) {
            .banner .caption {
                width: 0;
                visibility: hidden;
            }
        }
        language-menu {
            grid-area: lang-menu;
            margin: 0 auto;
            padding: 0 3px;
            display: flex;
            align-items: center;
            justify-content: stretch;
        }
        links-menu {
            grid-area: links-menu;
            margin: 0 auto;
            padding: 0 3px;
            display: flex;
            align-items: center;
            justify-content: stretch;
        }
    </style>
    <script>
        //#region Internal Variables

        let self = this;

        //#endregion

        //#region content variables and methods

        let updatecontent = () => {
            self.update();
        }

        //#endregion

        //#region controls variables and methods

        let ctrl;
        let initCtrls = () => {
            //ctrl = self.refs['osd-ctrl']
        }
        let freeCtrls = () => {
            ctrl = null;
        }

        //#endregion

        //#region document listener add/remove handler

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        //#endregion

        //#region events bind/unbind

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
        }
        let unbindEvents = () => {
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
    </script>
</navibar>