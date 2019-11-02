riot.tag2('ninput', '<input ref="input" type="{opts.type}" name="{opts.name}" riot-value="{opts.value}" required="" autocomplete="off"> <div ref="clear" class="clear">x</div> <label>{opts.title}</label>', 'ninput,[data-is="ninput"]{ margin: 0; margin-top: 5px; padding: 10px; font-size: 14px; display: inline-block; position: relative; height: auto; width: 100%; background: transparent; box-shadow: 0 5px 10px solid rgba(0, 0, 0, .2); } ninput input,[data-is="ninput"] input{ display: inline-block; padding: 20px 0 10px 0; margin-bottom: 0px; width: calc(100% - 25px); background-color: whitesmoke; box-sizing: border-box; box-shadow: none; outline: none; border: none; font-size: 14px; box-shadow: 0 0 0px 1000px white inset; border-bottom: 2px solid #999; } ninput .clear,[data-is="ninput"] .clear{ display: inline-block; margin: 0; padding: 0px 6px; font-size: 12px; font-weight: bold; width: 21px; height: 21px; color: white; cursor: pointer; user-select: none; border: 1px solid red; border-radius: 50%; background: rgba(255, 100, 100, .75); } ninput .clear:hover,[data-is="ninput"] .clear:hover{ color: yellow; background: rgba(255, 0, 0, .8); } ninput input:-webkit-autofill,[data-is="ninput"] input:-webkit-autofill,ninput input:-webkit-autofill:hover,[data-is="ninput"] input:-webkit-autofill:hover,ninput input:-webkit-autofill:focus,[data-is="ninput"] input:-webkit-autofill:focus{ font-size: 14px; transition: background-color 5000s ease-in-out 0s; } ninput label,[data-is="ninput"] label{ position: absolute; top: 30px; left: 14px; color: #555; transition: .2s; pointer-events: none; } ninput input:focus ~ label,[data-is="ninput"] input:focus ~ label{ top: 5px; left: 10px; color: #f7497d; font-weight: bold; } ninput input:-webkit-autofill ~ label,[data-is="ninput"] input:-webkit-autofill ~ label,ninput input:valid ~ label,[data-is="ninput"] input:valid ~ label{ top: 5px; left: 10px; color: cornflowerblue; font-weight: bold; } ninput input:focus,[data-is="ninput"] input:focus{ border-bottom: 2px solid #f7497d; } ninput input:valid,[data-is="ninput"] input:valid{ border-bottom: 2px solid cornflowerblue; }', '', function(opts) {


        let self = this;

        let input, clear;

        let initCtrls = () => {
            input = self.refs['input'];
            clear = self.refs['clear'];
        }
        let freeCtrls = () => {
            flipper = null;
        }
        let clearInputs = () => {
            input = null;
            clear = null;
        }

        let bindEvents = () => {
            clear.addEventListener('click', onClear);
        }
        let unbindEvents = () => {
            clear.removeEventListener('click', onClear);
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            clearInputs();
        });

        let onClear = () => {
            if (input) input.value = '';
        }

        this.clear = () => { if (input) input.value = ''; }
        this.focus = () => { if (input) input.focus(); }
        this.value = (text) => {
            let ret;
            if (input) {
                if (text !== undefined && text !== null) {
                    input.value = text;
                }
                else {
                    ret = input.value;
                }
            }
            return ret;
        }

});
riot.tag2('nselect', '<select ref="input"> <option each="{item in items}" riot-value="{item.value}">{item.text}</option> </select> <div ref="clear" class="clear">x</div> <label>{opts.title}</label>', 'nselect,[data-is="nselect"]{ margin: 0; margin-top: 5px; padding: 10px; font-size: 14px; display: inline-block; position: relative; height: auto; width: 100%; background: transparent; box-shadow: 0 5px 10px solid rgba(0, 0, 0, .2); } nselect select,[data-is="nselect"] select{ display: inline-block; padding: 20px 0 10px 0; margin-bottom: 0px; width: calc(100% - 25px); background-color: whitesmoke; box-sizing: border-box; box-shadow: none; outline: none; border: none; font-size: 14px; box-shadow: 0 0 0px 1000px white inset; border-bottom: 2px solid #999; -webkit-appearance: none; -moz-appearance: none; background-image: url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>"); background-repeat: no-repeat; background-position-x: 100%; background-position-y: 20px; border-radius: 2px; } nselect .clear,[data-is="nselect"] .clear{ display: inline-block; margin: 0; padding: 0px 6px; font-size: 12px; font-weight: bold; width: 21px; height: 21px; color: white; cursor: pointer; user-select: none; border: 1px solid red; border-radius: 50%; background: rgba(255, 100, 100, .75); } nselect .clear:hover,[data-is="nselect"] .clear:hover{ color: yellow; background: rgba(255, 0, 0, .8); } nselect select:-webkit-autofill,[data-is="nselect"] select:-webkit-autofill,nselect select:-webkit-autofill:hover,[data-is="nselect"] select:-webkit-autofill:hover,nselect select:-webkit-autofill:focus,[data-is="nselect"] select:-webkit-autofill:focus{ font-size: 14px; transition: background-color 5000s ease-in-out 0s; } nselect label,[data-is="nselect"] label{ position: absolute; top: 30px; left: 14px; color: #555; transition: .2s; pointer-events: none; } nselect select:focus ~ label,[data-is="nselect"] select:focus ~ label{ top: 5px; left: 10px; color: #f7497d; font-weight: bold; } nselect select:-webkit-autofill ~ label,[data-is="nselect"] select:-webkit-autofill ~ label,nselect select:valid ~ label,[data-is="nselect"] select:valid ~ label{ top: 5px; left: 10px; color: cornflowerblue; font-weight: bold; } nselect select:focus,[data-is="nselect"] select:focus{ border-bottom: 2px solid #f7497d; } nselect select:valid,[data-is="nselect"] select:valid{ border-bottom: 2px solid cornflowerblue; }', '', function(opts) {


        let self = this;
        let fldmap = { valueField:'code', textField:'name' }
        let defaultItem = {
            value: '',
            text: '-',
            source: null
        };
        this.items = [];
        this.items.push(defaultItem);

        let input, clear;

        let initCtrls = () => {
            input = self.refs['input'];
            clear = self.refs['clear'];
            disableFirstOption();
        }
        let freeCtrls = () => {
            input = null;
            clear = null;
        }
        let clearInputs = () => {
            if (input) {
                input.selectedIndex = 0;
            }
        }
        let disableFirstOption = () => {
            if (input && input.options[0]) {
                let opt = input.options[0];
                opt.setAttribute('disable', '')
                opt.setAttribute('selected', '')
                opt.style.display = 'none';
            }
        }

        let bindEvents = () => {
            input.addEventListener('change', onSelection);
            clear.addEventListener('click', onClear);
        }
        let unbindEvents = () => {
            clear.removeEventListener('click', onClear);
            input.removeEventListener('change', onSelection);
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            clearInputs();
        });

        let onClear = () => {
            clearInputs();
        }
        let onSelection = (e) => {
            if (input) {
                let idx = input.selectedIndex
                let val = input.options[input.selectedIndex].value;
                console.log('selected value:', val)
            }
        }

        this.clear = () => { clearInputs(); }
        this.focus = () => { if (input) input.focus(); }

        let hasValue = (val) => {
            return (val !== undefined && val !== null);
        }
        let getSelectedIndexByValue = (val) => {
            let sVal = val.toString();
            let opt, idx = 0;
            for (let i = 0; i < input.options.length; i++) {
                opt = input.options[i];
                if (opt.value.toString() === sVal) {

                    idx = i
                    break;
                }
            }
            return idx;
        }
        let getSelectedValue = () => {
            let idx = input.selectedIndex
            let ret = (idx > 0) ? input.options[input.selectedIndex].value : null;
            return ret;
        }
        this.value = (val) => {
            let ret;
            if (input) {
                if (hasValue(val)) {
                    input.selectedIndex = getSelectedIndexByValue(val);
                }
                else {
                    ret = getSelectedValue();
                }
            }
            return ret;
        }
        this.setup = (values, fldMap) => {
            fldmap = fldMap;
            self.items = [];
            self.items.push(defaultItem);
            values.forEach(val => {
                let item = {
                    value: val[fldmap.valueField],
                    text: val[fldmap.textField],
                    source: val
                }
                self.items.push(item);
            })
            disableFirstOption();
            self.update();
        }

});

riot.tag2('osd', '<div ref="osd-ctrl" class="osd error"> <label style="margin: 0 auto; padding: 0;"></label> </div>', 'osd,[data-is="osd"]{ display: inline-block; position: absolute; margin: 0 auto; padding: 0; left: 50px; right: 50px; bottom: 50px; z-index: 1000; background-color: transparent; } osd .osd,[data-is="osd"] .osd{ display: block; position: relative; margin: 0 auto; padding: 5px; height: auto; width: 200px; color: white; background-color: rgba(0, 0, 0, .7); text-align: center; border: 1; border-color: rgba(0, 0, 0, 1); border-radius: 8px; user-select: none; visibility: hidden; } osd .osd.show,[data-is="osd"] .osd.show{ visibility: visible; } osd .osd.show.info,[data-is="osd"] .osd.show.info{ color: whitesmoke; background-color: rgba(0, 0, 0, .7); border-color: rgba(0, 0, 0, 1); } osd .osd.show.warn,[data-is="osd"] .osd.show.warn{ color: black; background-color: rgba(255, 255, 0, .7); border-color: rgba(255, 255, 0, 1); } osd .osd.show.error,[data-is="osd"] .osd.show.error{ color: yellow; background-color: rgba(255, 0, 0, .7); border-color: rgba(255, 0, 0, 1); }', '', function(opts) {


        let self = this;

        let ctrl;
        let initCtrls = () => {
            ctrl = self.refs['osd-ctrl']
        }
        let freeCtrls = () => {
            ctrl = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.ShowOsd, showOsd)
            addEvt(events.name.UpdateOsd, updateOsd)
            addEvt(events.name.HideOsd, hideOsd)
        }
        let unbindEvents = () => {
            delEvt(events.name.HideOsd, hideOsd)
            delEvt(events.name.UpdateOsd, updateOsd)
            delEvt(events.name.ShowOsd, showOsd)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let showOsd = () => {
            ctrl.classList.add('show')
            self.update();
        }
        let updateOsd = (e) => {
            let data = e.detail.data;
            ctrl.innerHTML = data.msg;
            if (data.type === 'warn') {
                ctrl.classList.remove('info')
                ctrl.classList.add('warn')
                ctrl.classList.remove('error')
            }
            else if (data.type === 'error') {
                ctrl.classList.remove('info')
                ctrl.classList.remove('warn')
                ctrl.classList.add('error')
            }
            else {
                ctrl.classList.add('info')
                ctrl.classList.remove('warn')
                ctrl.classList.remove('error')
            }
            self.update();
        }
        let hideOsd = () => {
            ctrl.innerHTML = '';
            ctrl.classList.remove('info')
            ctrl.classList.remove('warn')
            ctrl.classList.remove('error')
            ctrl.classList.remove('show')
            self.update();
        }
});
riot.tag2('app', '<navibar class="navibar"></navibar> <div class="scrarea"> <yield></yield> </div> <page-footer class="footer"></page-footer>', 'app,[data-is="app"]{ margin: 0 auto; height: 100vh; display: grid; grid-template-columns: 1fr; grid-template-rows: 100%; grid-template-areas: \'scrarea\'; overflow: hidden; } app .navibar,[data-is="app"] .navibar{ display: none } app .footer,[data-is="app"] .footer{ display: none } app[navibar][footer],[data-is="app"][navibar][footer]{ grid-template-columns: 1fr; grid-template-rows: 40px 1fr 22px; grid-template-areas: \'navibar\' \'scrarea\' \'footer\'; overflow: hidden; } app[navibar][footer] .navibar,[data-is="app"][navibar][footer] .navibar{ display: grid; } app[navibar][footer] .footer,[data-is="app"][navibar][footer] .footer{ display: grid;} app[navibar],[data-is="app"][navibar]{ grid-template-columns: 1fr; grid-template-rows: 40px 1fr; grid-template-areas: \'navibar\' \'scrarea\'; overflow: hidden; } app[navibar] .navibar,[data-is="app"][navibar] .navibar{ display: grid; } app[footer],[data-is="app"][footer]{ grid-template-columns: 1fr; grid-template-rows: 1fr 22px; grid-template-areas: \'scrarea\' \'footer\'; overflow: hidden; } app[footer] .footer,[data-is="app"][footer] .footer{ display: grid; } app .navibar,[data-is="app"] .navibar{ grid-area: navibar; padding: 5px; overflow: hidden; } app .scrarea,[data-is="app"] .scrarea{ grid-area: scrarea; margin: 0; padding: 0; overflow: auto; } app .footer,[data-is="app"] .footer{ grid-area: footer; padding: 2px 3px 2px 3px; overflow: hidden; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('flip-screen', '<div class="auto-container"> <div ref="flipper" class="flipper"> <div class="viewer-block"> <div class="content"> <yield from="viewer"></yield> </div> </div> <div class="entry-block"> <div class="content"> <yield from="entry"></yield> </div> </div> </div> </div>', 'flip-screen,[data-is="flip-screen"]{ margin: 0; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; grid-template-areas: \'auto-container\'; overflow: hidden; } flip-screen .auto-container,[data-is="flip-screen"] .auto-container{ margin: 0; padding: 0; grid-area: auto-container; border: 1px solid #f1f1f1; } flip-screen .flipper,[data-is="flip-screen"] .flipper{ margin: 0; padding: 0; position: relative; width: 100%; height: 100%; transition: transform 0.5s; transform-style: preserve-3d; } flip-screen .auto-container .flipper.toggle,[data-is="flip-screen"] .auto-container .flipper.toggle{ transform: rotateY(180deg); } flip-screen .viewer-block,[data-is="flip-screen"] .viewer-block{ position: absolute; margin: 0; padding: 0; width: 100%; height: 100%; backface-visibility: hidden; transform: rotateY(0deg); } flip-screen .entry-block,[data-is="flip-screen"] .entry-block{ position: absolute; width: 100%; height: 100%; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transform: rotateY(180deg); } flip-screen .content,[data-is="flip-screen"] .content{ position: relative; display: block; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let flipper;

        let initCtrls = () => {
            flipper = self.refs['flipper'];
        }
        let freeCtrls = () => {
            flipper = null;
        }
        let clearInputs = () => {}

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.toggle = () => {
            flipper.classList.toggle('toggle');
        }

});
riot.tag2('language-menu', '<div class="menu"> <a ref="flags" class="flag-combo" href="javascript:;"> <span class="flag-css flag-icon flag-icon-{lang.current.flagId.toLowerCase()}" ref="css-icon"></span> <div class="flag-text">&nbsp;{lang.langId}&nbsp;</div> <virtual if="{isMultiple()}"> <span class="drop-synbol fas fa-caret-down"></span> </virtual> </a> </div> <div ref="dropItems" class="language-dropbox"> <div each="{item in lang.languages}"> <a class="flag-item {(lang.langId === item.langId) ? \'selected\' : \'\'}" href="javascript:;" onclick="{selectItem}"> &nbsp; <span class="flag-css flag-icon flag-icon-{item.flagId.toLowerCase()}" ref="css-icon"></span> &nbsp; <div class="flag-text">{item.Description}</div> &nbsp;&nbsp;&nbsp; </a> </div> </div>', 'language-menu,[data-is="language-menu"]{ margin: 0 auto; padding: 0, 2px; user-select: none; } language-menu .menu,[data-is="language-menu"] .menu{ margin: 0 auto; padding: 0; } language-menu a,[data-is="language-menu"] a{ margin: 0 auto; color: whitesmoke; } language-menu a:link,[data-is="language-menu"] a:link,language-menu a:visited,[data-is="language-menu"] a:visited{ text-decoration: none; } language-menu a:hover,[data-is="language-menu"] a:hover,language-menu a:active,[data-is="language-menu"] a:active{ color: yellow; text-decoration: none; } language-menu .flag-combo,[data-is="language-menu"] .flag-combo{ margin: 0 auto; } language-menu .flag-combo .flag-css,[data-is="language-menu"] .flag-combo .flag-css{ margin: 0px auto; padding-top: 1px; display: inline-block; } language-menu .flag-combo .flag-text,[data-is="language-menu"] .flag-combo .flag-text{ margin: 0 auto; display: inline-block; } language-menu .flag-combo .drop-symbol,[data-is="language-menu"] .flag-combo .drop-symbol{ margin: 0 auto; display: inline-block; } language-menu .flag-item,[data-is="language-menu"] .flag-item{ margin: 0px auto; padding: 2px; padding-left: 5px; height: 50px; display: flex; align-items: center; justify-content: center; } language-menu .flag-item:hover,[data-is="language-menu"] .flag-item:hover{ color: yellow; background:linear-gradient(to bottom, #0c5a24 5%, #35750a 100%); background-color:#77a809; cursor: pointer; } language-menu .flag-item.selected,[data-is="language-menu"] .flag-item.selected{ background-color: darkorange; } language-menu .flag-item .flag-css,[data-is="language-menu"] .flag-item .flag-css{ margin: 0px auto; padding-top: 1px; width: 25px; display: inline-block; } language-menu .flag-item .flag-text,[data-is="language-menu"] .flag-item .flag-text{ margin: 0 auto; min-width: 80px; max-width: 120px; display: inline-block; } language-menu .language-dropbox,[data-is="language-menu"] .language-dropbox{ display: inline-block; position: fixed; margin: 0 auto; padding: 1px; top: 45px; right: 5px; background-color: #333; color:whitesmoke; max-height: calc(100vh - 50px - 20px); overflow: hidden; overflow-y: auto; display: none; } language-menu .language-dropbox.show,[data-is="language-menu"] .language-dropbox.show{ display: inline-block; z-index: 99999; }', '', function(opts) {


        let self = this;

        let updatecontent = () => {
            self.update();
        }

        let flags, dropItems;
        let initCtrls = () => {
            flags = self.refs['flags'];
            dropItems = self.refs['dropItems'];
        }
        let freeCtrls = () => {
            dropItems = null;
            flags = null;
        }

        this.isMultiple = () => {
            return lang && lang.languages && lang.languages.length > 1
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            flags.addEventListener('click', toggle);
            window.addEventListener('click', checkClickPosition);
        }
        let unbindEvents = () => {
            window.removeEventListener('click', checkClickPosition);
            flags.removeEventListener('click', toggle);
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onLanguageChanged = (e) => { updatecontent(); }

        this.selectItem = (e) => {
            toggle();
            let selLang = e.item.item;
            lang.change(selLang.langId);

            e.preventDefault();
            e.stopPropagation();
        }

        let toggle = () => {
            dropItems.classList.toggle('show');
            updatecontent();
        }
        let isInClassList = (elem, classList) => {
            let len = classList.length;
            let found = false;
            for (let i = 0; i < len; i++) {
                if (elem.matches(classList[i])) {
                    found = true;
                    break;
                }
            }
            return found;
        }
        let checkClickPosition = (e) => {

            let classList = ['.flag-combo', '.flag-css', '.flag-text', '.drop-synbol'];
            let match = isInClassList(e.target, classList);
            if (!match) {
                if (dropItems.classList.contains('show')) {
                    toggle();
                }
            }
        }

});
riot.tag2('links-menu', '<div class="menu"> <a ref="links" class="link-combo" href="javascript:;"> <span ref="showlinks" class="burger fas fa-bars"></span> </a> </div> <div ref="dropItems" class="links-dropbox"> <div each="{item in menus}"> <virtual if="{isShown(item)}"> <a class="link-item" href="javascript:;" onclick="{selectItem}"> &nbsp; <span class="link-css {item.icon}" ref="css-icon">&nbsp;</span> <div class="link-text">&nbsp;{item.text}</div> &nbsp;&nbsp;&nbsp; </a> </virtual> </div> </div>', 'links-menu,[data-is="links-menu"]{ margin: 0 auto; padding: 0 3px; user-select: none; width: 40px; } links-menu.hide,[data-is="links-menu"].hide{ display: none; } links-menu .menu,[data-is="links-menu"] .menu{ margin: 0 auto; padding: 0; } links-menu a,[data-is="links-menu"] a{ margin: 0 auto; color: whitesmoke; } links-menu a:link,[data-is="links-menu"] a:link,links-menu a:visited,[data-is="links-menu"] a:visited{ text-decoration: none; } links-menu a:hover,[data-is="links-menu"] a:hover,links-menu a:active,[data-is="links-menu"] a:active{ color: yellow; text-decoration: none; } links-menu .link-combo,[data-is="links-menu"] .link-combo{ margin: 0 auto; } links-menu .link-item,[data-is="links-menu"] .link-item{ margin: 0px auto; padding: 2px; padding-left: 5px; height: 50px; display: flex; align-items: center; justify-content: center; } links-menu .link-item:hover,[data-is="links-menu"] .link-item:hover{ color: yellow; background:linear-gradient(to bottom, #0c5a24 5%, #35750a 100%); background-color:#77a809; cursor: pointer; } links-menu .link-item.selected,[data-is="links-menu"] .link-item.selected{ background-color: darkorange; } links-menu .link-item .link-css,[data-is="links-menu"] .link-item .link-css{ margin: 0px auto; width: 25px; display: inline-block; } links-menu .link-item .link-text,[data-is="links-menu"] .link-item .link-text{ margin: 0 auto; min-width: 80px; max-width: 120px; display: inline-block; } links-menu .links-dropbox,[data-is="links-menu"] .links-dropbox{ display: inline-block; position: fixed; margin: 0 auto; padding: 1px; top: 45px; right: 5px; background-color: #333; color:whitesmoke; max-height: calc(100vh - 50px - 20px); overflow: hidden; overflow-y: auto; display: none; } links-menu .links-dropbox.show,[data-is="links-menu"] .links-dropbox.show{ display: inline-block; z-index: 99999; }', 'class="{(menus && menus.length > 0) ? \'\' : \'hide\'}"', function(opts) {


        let self = this;

        this.menus = [];
        let updatecontent = () => {
            self.menus = (contents && contents.current) ? contents.current.links : [];
            self.update();
        }
        this.isShown = (item) => {
            let ret = true;
            let linkType = (item.type) ? item.type.toLowerCase() : '';
            if (linkType === 'screen') {
                ret = item.ref !== screens.current.screenId;
            }
            return ret;
        }

        let links, dropItems;
        let initCtrls = () => {
            links = self.refs['links'];
            dropItems = self.refs['dropItems'];
        }
        let freeCtrls = () => {
            dropItems = null;
            links = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)

            links.addEventListener('click', toggle);
            window.addEventListener('click', checkClickPosition);
        }
        let unbindEvents = () => {
            window.removeEventListener('click', checkClickPosition);
            links.removeEventListener('click', toggle);

            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onLanguageChanged = (e) =>  { updatecontent(); }
        let onContentChanged = (e) => { updatecontent();  }
        let onScreenChanged = (e) =>  { updatecontent(); }

        this.selectItem = (e) => {
            toggle();
            let selLink = e.item.item;
            let linkType = (selLink.type) ? selLink.type.toLowerCase() : '';
            if (linkType  === 'screen') {
                screens.show(selLink.ref);
            }
            else if (linkType === 'url') {
                secure.postUrl(selLink.ref);
            }
            else if (linkType === 'cmd') {
                if (selLink.ref.toLowerCase() === 'signout')
                secure.signout();
            }
            else {
                console.log('Not implements type, data:', selLink);
            }
            e.preventDefault();
            e.stopPropagation();
        }

        let toggle = () => {
            dropItems.classList.toggle('show');
            updatecontent();
        }

        let isInClassList = (elem, classList) => {
            let len = classList.length;
            let found = false;
            for (let i = 0; i < len; i++) {
                if (elem.matches(classList[i])) {
                    found = true;
                    break;
                }
            }
            return found;
        }
        let checkClickPosition = (e) => {

            let classList = ['.link-combo', '.burger'];
            let match = isInClassList(e.target, classList);
            if (!match) {
                if (dropItems.classList.contains('show')) {
                    toggle();
                }
            }
        }

});
riot.tag2('navibar', '<div class="banner"> <div class="caption">My Choice Rater Web{(content.title) ? \'&nbsp;-&nbsp;\' : \'&nbsp;\'}</div> <div class="title ">{content.title}</div> </div> <language-menu></language-menu> <links-menu></links-menu>', 'navibar,[data-is="navibar"]{ width: 100vw; margin: 0 auto; display: grid; grid-template-columns: 1fr 90px min-content; grid-template-rows: 1fr; grid-template-areas: \'banner lang-menu links-menu\'; background: cornflowerblue; color: whitesmoke; user-select: none; } navibar .banner,[data-is="navibar"] .banner{ grid-area: banner; margin: 0; padding: 0 3px; display: flex; align-items: center; justify-content: stretch; } navibar .banner .title,[data-is="navibar"] .banner .title{ margin: 0; padding: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 1.2rem; } navibar .banner .caption,[data-is="navibar"] .banner .caption{ margin: 0; padding: 0; width: auto; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 1.2rem; } @media only screen and (max-width: 700px) { navibar .banner .caption,[data-is="navibar"] .banner .caption{ width: 0; visibility: hidden; } } navibar language-menu,[data-is="navibar"] language-menu{ grid-area: lang-menu; margin: 0 auto; padding: 0 3px; display: flex; align-items: center; justify-content: stretch; } navibar links-menu,[data-is="navibar"] links-menu{ grid-area: links-menu; margin: 0 auto; padding: 0 3px; display: flex; align-items: center; justify-content: stretch; }', '', function(opts) {


        let self = this;
        this.content = {
            title: ''
        }

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : { title: '' };
            self.update();
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

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

        this.on('mount', () => { bindEvents(); });
        this.on('unmount', () => { unbindEvents(); });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

});
riot.tag2('page-footer', '<p class="caption"> {content.status} </p> <p class="status" ref="l1"></p> <p class="copyright"> &nbsp;&copy; {content.copyright} &nbsp;&nbsp; </p>', 'page-footer,[data-is="page-footer"]{ margin: 0 auto; padding: 0; width: 100%; display: grid; grid-template-columns: fit-content(50px) 1fr fit-content(150px); grid-template-rows: 1fr; grid-template-areas: \'caption status copyright\'; font-size: 0.7em; font-weight: bold; background: darkorange; color: whitesmoke; } page-footer .caption,[data-is="page-footer"] .caption{ grid-area: caption; margin: 0 auto; padding: 0; padding-left: 3px; user-select: none; } page-footer .status,[data-is="page-footer"] .status{ grid-area: status; margin: 0 auto; padding: 0; user-select: none; } page-footer .copyright,[data-is="page-footer"] .copyright{ grid-area: copyright; margin: 0 auto; padding: 0; user-select: none; }', '', function(opts) {


        let self = this;
        this.content = { status: '', copyright: '' }

        let updatecontent = () => {
            if (contents.current && contents.current.footer) {
                self.content = contents.current.footer;
                self.update();
            }
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
        }
        let unbindEvents = () => {
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => { bindEvents(); });
        this.on('unmount', () => { unbindEvents(); });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }

});
riot.tag2('screen', '<div class="content-area"> <yield></yield> </div>', 'screen,[data-is="screen"]{ margin: 0 auto; padding: 0; display: none; width: 100%; height: 100%; } screen.show,[data-is="screen"].show{ display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; grid-template-areas: \'content-area\'; } screen .content-area,[data-is="screen"] .content-area{ width: 100%; height: 100%; overflow: hidden; }', '', function(opts) {


        let self = this;

        let hide = () => { self.root.classList.remove('show') }
        let show = () => { self.root.classList.add('show') }

        let updatecontent = () => {
            if (screens.current.screenId !== self.opts.screenid) {
                hide();
            }
            else {
                show();
            }
            self.update();
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.ScreenChanged, onScreenChanged)
        }
        let unbindEvents = () => {
            delEvt(events.name.ScreenChanged, onScreenChanged)
        }

        this.on('mount', () => { bindEvents(); });
        this.on('unmount', () => { unbindEvents(); });

        let onScreenChanged = (e) => { updatecontent(); }

});
riot.tag2('date-result', '<div class="date-range"> <span class="label">Date:&nbsp;</span> <span class="text">2019-10-11</span> <span class="text">&nbsp;-&nbsp;</span> <span class="text">2019-10-12</span> </div>', 'date-result,[data-is="date-result"]{ margin: 0 auto; padding: 0; width: 100%; display: grid; grid-template-rows: 1fr; grid-template-columns: 1fr 270px 1fr; grid-template-areas: \'. date-range .\'; } date-result .date-range,[data-is="date-result"] .date-range{ grid-area: date-range; margin: 0 auto; padding: 0; width: 100%; } date-result .date-range .label,[data-is="date-result"] .date-range .label{ color: navy; } date-result .date-range .text,[data-is="date-result"] .date-range .text{ color: black; }', '', function(opts) {
});
riot.tag2('question-slide', '<div class="question-text"> <span>Q1. Question 1</span> </div> <div class="question-items"> <span class="item">1. Choice 1</span> <span class="item">2. Choice 2</span> <span class="item">3. Choice 3</span> <span class="item">4. Choice 4</span> </div>', 'question-slide,[data-is="question-slide"]{ display: block; margin: 0 auto; padding: 0; width: 100%; } question-slide .question-text,[data-is="question-slide"] .question-text{ display: block; margin: 0; padding: 0; font-weight: bold; font-size: 1rem; } question-slide .question-items,[data-is="question-slide"] .question-items{ display: block; } question-slide .question-items .item,[data-is="question-slide"] .question-items .item{ display: inline-block; width: 200px; font-size: 1rem; }', '', function(opts) {
});
riot.tag2('device-editor', '<div class="entry"> <div class="tab"> <button ref="tabheader" class="tablinks active" name="default" onclick="{showContent}"> <span class="fas fa-cog"></span>&nbsp;{content.entry.tabDefault}&nbsp; </button> <button ref="tabheader" class="tablinks" name="miltilang" onclick="{showContent}"> <span class="fas fa-globe-americas"></span>&nbsp;{content.entry.tabMultiLang}&nbsp; </button> </div> <div ref="tabcontent" name="default" class="tabcontent" style="display: block;"> <device-entry ref="EN" langid=""></device-entry> </div> <div ref="tabcontent" name="miltilang" class="tabcontent"> <virtual if="{lang.languages}"> <virtual each="{item in lang.languages}"> <virtual if="{item.langId !== \'EN\'}"> <div class="panel-header" langid="{item.langId}"> &nbsp;&nbsp; <span class="flag-css flag-icon flag-icon-{item.flagId.toLowerCase()}"></span> &nbsp;{item.Description}&nbsp; </div> <div class="panel-body" langid="{item.langId}"> <device-entry ref="{item.langId}" langid="{item.langId}"></device-entry> </div> </virtual> </virtual> </virtual> </div> </div> <div class="tool"> <button onclick="{save}"><span class="fas fa-save"></span></button> <button onclick="{cancel}"><span class="fas fa-times"></span></button> </div>', 'device-editor,[data-is="device-editor"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr 30px; grid-template-areas: \'entry\' \'tool\'; overflow: hidden; background-color: white; } device-editor .entry,[data-is="device-editor"] .entry{ grid-area: entry; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: auto; } device-editor .entry .tab,[data-is="device-editor"] .entry .tab{ overflow: hidden; border: 1px solid #ccc; } device-editor .entry .tab button,[data-is="device-editor"] .entry .tab button{ background-color: inherit; float: left; border: none; outline: none; cursor: pointer; padding: 14px 16px; transition: 0.3s; } device-editor .entry .tab button:hover,[data-is="device-editor"] .entry .tab button:hover{ background-color: #ddd; } device-editor .entry .tab button.active,[data-is="device-editor"] .entry .tab button.active{ background-color: #ccc; } device-editor .entry .tabcontent,[data-is="device-editor"] .entry .tabcontent{ display: none; padding: 3px; width: 100%; max-width: 100%; overflow: auto; } device-editor .entry .tabcontent .panel-header,[data-is="device-editor"] .entry .tabcontent .panel-header{ margin: 0 auto; padding: 0; padding-top: 3px; width: 100%; height: 30px; color: white; background: cornflowerblue; border-radius: 5px 5px 0 0; } device-editor .entry .tabcontent .panel-body,[data-is="device-editor"] .entry .tabcontent .panel-body{ margin: 0 auto; margin-bottom: 5px; padding: 0; width: 100%; border: 1px solid cornflowerblue; } device-editor .tool,[data-is="device-editor"] .tool{ grid-area: tool; margin: 0 auto; padding: 0; padding-left: 3px; padding-top: 3px; width: 100%; height: 30px; overflow: hidden; }', '', function(opts) {


        let self = this;
        let screenId = 'device-manage';

        let deviceId = '';
        let ctrls = [];

        let defaultContent = {
            entry: {
                tabDefault: 'Default',
                tabMultiLang: 'Languages'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let tabHeaders = [];
        let tabContents = [];

        let initCtrls = () => {
            let headers = self.refs['tabheader'];
            tabHeaders.push(...headers)
            let contents = self.refs['tabcontent'];
            tabContents.push(...contents)
        }
        let freeCtrls = () => {
            tabHeaders = [];
            tabContents = [];
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

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

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let clearActiveTabs = () => {
            if (tabHeaders) {

                for (let i = 0; i < tabHeaders.length; i++) {
                    tabHeaders[i].className = tabHeaders[i].className.replace(" active", "");
                }
            }
        }
        let hideContents = () => {
            if (tabContents) {

                for (let i = 0; i < tabContents.length; i++) {
                    tabContents[i].style.display = "none";
                }
            }
        }
        let getContent = (name) => {
            let ret;
            if (tabContents) {
                for (let i = 0; i < tabContents.length; i++) {
                    let attr = tabContents[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabContents[i];
                        break;
                    }
                }
            }
            return ret;
        }
        let getHeader = (name) => {
            let ret;
            if (tabHeaders) {
                for (let i = 0; i < tabHeaders.length; i++) {
                    let attr = tabHeaders[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabHeaders[i];
                        break;
                    }
                }
            }
            return ret;
        }
        this.showContent = (evt) => {
            let target = evt.target;
            let name = target.attributes['name'].value;

            hideContents();
            clearActiveTabs();

            let currHeader = getHeader(name);
            let currContent = getContent(name);
            if (currContent) {
                currContent.style.display = "block";
            }
            if (currHeader) {
                currHeader.className += " active";
            }
        }

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        this.save = (e) => {
            let item;
            let items = [];
            ctrls.forEach(oRef => {
                item = (oRef.entry) ? oRef.entry.getItem() : null;
                if (item) {
                    item.langId = oRef.langId;
                    items.push(item)
                }
            });
            devicemanager.save(items);
            events.raise(events.name.EndEditDevice)
        }
        this.cancel = (e) => {
            events.raise(events.name.EndEditDevice)
        }

        this.setup = (item) => {
            let isNew = false;

            deviceId = item.deviceId;
            if (deviceId === undefined || deviceId === null || deviceId.trim() === '') {
                isNew = true;
            }
            ctrls = [];

            let loader = window.devicemanager;

            lang.languages.forEach(lg => {
                let ctrl = self.refs[lg.langId];
                let original = (isNew) ? clone(item) : loader.find(lg.langId, deviceId);

                if (ctrl) {
                    let obj = {
                        langId: lg.langId,
                        entry: ctrl,
                        scrObj: original
                    }
                    ctrl.setup(original);
                    ctrls.push(obj)
                }
            });
        }

});
riot.tag2('device-entry', '<div class="padtop"></div> <div class="padtop"></div> <ninput ref="deviceName" title="{content.entry.deviceName}" type="text" name="deviceName"></ninput> <ninput ref="location" title="{content.entry.location}" type="text" name="location"></ninput> <virtual if="{isDefault()}"> <nselect ref="deviceTypes" title="{content.entry.deviceTypeId}"></nselect> <ninput ref="orgId" title="{content.entry.orgId}" type="text" name="orgId"></ninput> <ninput ref="memberId" title="{content.entry.memberId}" type="text" name="memberId"></ninput> </virtual>', 'device-entry,[data-is="device-entry"]{ margin: 0; padding: 0; width: 100%; height: 100%; } device-entry .padtop,[data-is="device-entry"] .padtop{ display: block; margin: 0 auto; width: 100%; min-height: 10px; }', '', function(opts) {
        let self = this;
        let screenId = 'device-manage';
        this.isDefault = () => { return (opts.langid === '' || opts.langid === 'EN') }

        let defaultContent = {
            entry: {
                deviceName: 'Device Name',
                deviceTypeId: 'Device Type',
                location: 'Location',
                orgId: 'Organization',
                memberId: 'User'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let deviceName, location, orgId, memberId;

        let deviceTypes;

        let initCtrls = () => {
            deviceName = self.refs['deviceName'];

            deviceTypes = self.refs['deviceTypes'];
            location = self.refs['location'];
            orgId = self.refs['orgId'];
            memberId = self.refs['memberId'];
        }
        let freeCtrls = () => {
            memberId = null;
            orgId = null;
            location = null;
            deviceTypes = null;

            deviceName = null;
        }
        let clearInputs = () => {
            memberId.clear();
            orgId.clear();
            location.clear();
            deviceTypes.clear();
            deviceTypeId.clear();
            deviceName.clear();
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.DeviceTypeListChanged, onDeviceTypeListChanged)
            addEvt(events.name.OrgListChanged, onOrgListChanged);
        }
        let unbindEvents = () => {
            delEvt(events.name.OrgListChanged, onOrgListChanged);
            delEvt(events.name.DeviceTypeListChanged, onDeviceTypeListChanged)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let onDeviceTypeListChanged = (e) => { updatecontent(); }
        let onOrgListChanged = (e) => {
        }

        let origObj;
        let editObj;

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        let ctrlToObj = () => {
            if (editObj) {

                if (deviceName) editObj.DeviceName = deviceName.value();
                if (location) editObj.Location = location.value();

                if (deviceTypes) editObj.deviceTypeId = deviceTypes.value();
                if (orgId) editObj.orgId = orgId.value();
                if (memberId) editObj.memberId = memberId.value();
            }
        }
        let objToCtrl = () => {
            if (editObj) {

                if (deviceName) deviceName.value(editObj.DeviceName);
                if (location) location.value(editObj.Location);
                if (deviceTypes) deviceTypes.value(editObj.deviceTypeId.toString());

                if (orgId) orgId.value(editObj.orgId);
                if (memberId) memberId.value(editObj.memberId);
            }
        }

        this.setup = (item) => {

            if (deviceTypes) {
                deviceTypes.setup(master.devicetypes.current, { valueField:'deviceTypeId', textField:'Type' });
            }

            origObj = clone(item);
            editObj = clone(item);

            objToCtrl();
        }
        this.getItem = () => {
            ctrlToObj();

            let hasId = (editObj.deviceId !== undefined && editObj.deviceId != null)
            let isDirty = !hasId || !equals(origObj, editObj);

            return (isDirty) ? editObj : null;
        }

});
riot.tag2('device-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <device-view ref="viewer" class="view"></device-view> </yield> <yield to="entry"> <device-editor ref="entry" class="entry"></device-editor> </yield> </flip-screen>', 'device-manage,[data-is="device-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } device-manage .view,[data-is="device-manage"] .view,device-manage .entry,[data-is="device-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } device-manage .entry,[data-is="device-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Title'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.BeginEditDevice, onBeginEdit)
            addEvt(events.name.EndEditDevice, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditDevice, onEndEdit)
            delEvt(events.name.BeginEditDevice, onBeginEdit)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onBeginEdit = (e) => {

            if (flipper) {
                flipper.toggle();
                let item = e.detail.data.item;

                if (entry) entry.setup(item);
            }

        }
        let onEndEdit = (e) => {

            if (flipper) {
                flipper.toggle();
            }
        }

});
riot.tag2('device-view', '<div ref="title" class="titlearea"> <button class="addnew" onclick="{addnew}"> <span class="fas fa-plus-circle">&nbsp;</span> </button> <button class="refresh" onclick="{refresh}"> <span class="fas fa-sync">&nbsp;</span> </button> </div> <div ref="container" class="scrarea"> <div ref="grid"></div> </div>', 'device-view,[data-is="device-view"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 30px 1fr; grid-template-areas: \'titlearea\' \'scrarea\'; } device-view .titlearea,[data-is="device-view"] .titlearea{ grid-area: titlearea; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: hidden; border-radius: 3px; background-color: transparent; color: whitesmoke; } device-view .titlearea .addnew,[data-is="device-view"] .titlearea .addnew{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } device-view .titlearea .refresh,[data-is="device-view"] .titlearea .refresh{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } device-view .scrarea,[data-is="device-view"] .scrarea{ grid-area: scrarea; margin: 0 auto; padding: 0; margin-top: 3px; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;
        let table;
        let screenId = 'device-manage';

        let defaultContent = {
            title: 'Device Management',
            columns: []
        }
        this.content = defaultContent;

        let editIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-edit'></span></button>";
        };
        let deleteIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-trash-alt'></span></button>";
        };

        let initGrid = (data) => {

            let opts = {
                height: "100%",
                layout: "fitDataFill",
                data: (data) ? data : []
            }
            setupColumns(opts);

            table = new Tabulator(self.refs['grid'], opts);
        }
        let setupColumns = (opts) => {
            let = columns = [
                { formatter: editIcon, align:"center", width:44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: editRow
                },
                { formatter: deleteIcon, align:"center", width: 44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: deleteRow
                }
            ]

            if (self.content && self.content.columns) {
                let cols = self.content.columns;
                columns.push(...cols)
            }
            opts.columns = columns;
        }
        let syncData = () => {
            if (table) table = null;
            let data = devicemanager.current;
            initGrid(data)
        }
        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;

                self.update();
                if (table) table.redraw(true);
            }
        }

        let initCtrls = () => { initGrid(); }
        let freeCtrls = () => { table = null; }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.DeviceListChanged, onDeviceListChanged)
            addEvt(events.name.EndEditDevice, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditDevice, onEndEdit)
            delEvt(events.name.DeviceListChanged, onDeviceListChanged)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }
        let onScreenChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                devicemanager.load();
            }
        }
        let onDeviceListChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }

        let editRow = (e, cell) => {
            let data = cell.getRow().getData();
            events.raise(events.name.BeginEditDevice, { item: data })
        }
        let deleteRow = (e, cell) => {
            let data = cell.getRow().getData();
            console.log('delete:', data, ', langId:', lang.langId);
            syncData();

        }
        let onEndEdit = (e) => {
            syncData();
            table.redraw(true);
        }

        this.addnew = (e) => {
            let data = {
                deviceId: null,
                memberId: null,
                deviceName: null,
                location: null,
                deviceTypeId: null
            };
            events.raise(events.name.BeginEditDevice, { item: data })
        }
        this.refresh = (e) => {
            devicemanager.load();
            updatecontent();
        }

});
riot.tag2('admin-home', '<h3>Admin Home Page.</h3>', 'admin-home,[data-is="admin-home"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('exclusive-home', '', 'exclusive-home,[data-is="exclusive-home"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('staff-home', '', 'staff-home,[data-is="staff-home"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('member-editor', '<div class="entry"> <div class="tab"> <button ref="tabheader" class="tablinks active" name="default" onclick="{showContent}"> <span class="fas fa-cog"></span>&nbsp;{content.entry.tabDefault}&nbsp; </button> <button ref="tabheader" class="tablinks" name="miltilang" onclick="{showContent}"> <span class="fas fa-globe-americas"></span>&nbsp;{content.entry.tabMultiLang}&nbsp; </button> </div> <div ref="tabcontent" name="default" class="tabcontent" style="display: block;"> <member-entry ref="EN" langid=""></member-entry> </div> <div ref="tabcontent" name="miltilang" class="tabcontent"> <virtual if="{lang.languages}"> <virtual each="{item in lang.languages}"> <virtual if="{item.langId !== \'EN\'}"> <div class="panel-header" langid="{item.langId}"> &nbsp;&nbsp; <span class="flag-css flag-icon flag-icon-{item.flagId.toLowerCase()}"></span> &nbsp;{item.Description}&nbsp; </div> <div class="panel-body" langid="{item.langId}"> <member-entry ref="{item.langId}" langid="{item.langId}"></member-entry> </div> </virtual> </virtual> </virtual> </div> </div> <div class="tool"> <button onclick="{save}"><span class="fas fa-save"></span></button> <button onclick="{cancel}"><span class="fas fa-times"></span></button> </div>', 'member-editor,[data-is="member-editor"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr 30px; grid-template-areas: \'entry\' \'tool\'; overflow: hidden; background-color: white; } member-editor .entry,[data-is="member-editor"] .entry{ grid-area: entry; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: auto; } member-editor .entry .tab,[data-is="member-editor"] .entry .tab{ overflow: hidden; border: 1px solid #ccc; } member-editor .entry .tab button,[data-is="member-editor"] .entry .tab button{ background-color: inherit; float: left; border: none; outline: none; cursor: pointer; padding: 14px 16px; transition: 0.3s; } member-editor .entry .tab button:hover,[data-is="member-editor"] .entry .tab button:hover{ background-color: #ddd; } member-editor .entry .tab button.active,[data-is="member-editor"] .entry .tab button.active{ background-color: #ccc; } member-editor .entry .tabcontent,[data-is="member-editor"] .entry .tabcontent{ display: none; padding: 3px; width: 100%; max-width: 100%; overflow: auto; } member-editor .entry .tabcontent .panel-header,[data-is="member-editor"] .entry .tabcontent .panel-header{ margin: 0 auto; padding: 0; padding-top: 3px; width: 100%; height: 30px; color: white; background: cornflowerblue; border-radius: 5px 5px 0 0; } member-editor .entry .tabcontent .panel-body,[data-is="member-editor"] .entry .tabcontent .panel-body{ margin: 0 auto; margin-bottom: 5px; padding: 0; width: 100%; border: 1px solid cornflowerblue; } member-editor .tool,[data-is="member-editor"] .tool{ grid-area: tool; margin: 0 auto; padding: 0; padding-left: 3px; padding-top: 3px; width: 100%; height: 30px; overflow: hidden; }', '', function(opts) {


        let self = this;
        let screenId = 'member-manage';

        let memberId = '';
        let ctrls = [];

        let defaultContent = {
            entry: {
                tabDefault: 'Default',
                tabMultiLang: 'Languages'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let tabHeaders = [];
        let tabContents = [];

        let initCtrls = () => {
            let headers = self.refs['tabheader'];
            tabHeaders.push(...headers)
            let contents = self.refs['tabcontent'];
            tabContents.push(...contents)
        }
        let freeCtrls = () => {
            tabHeaders = [];
            tabContents = [];
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

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

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let clearActiveTabs = () => {
            if (tabHeaders) {

                for (let i = 0; i < tabHeaders.length; i++) {
                    tabHeaders[i].className = tabHeaders[i].className.replace(" active", "");
                }
            }
        }
        let hideContents = () => {
            if (tabContents) {

                for (let i = 0; i < tabContents.length; i++) {
                    tabContents[i].style.display = "none";
                }
            }
        }
        let getContent = (name) => {
            let ret;
            if (tabContents) {
                for (let i = 0; i < tabContents.length; i++) {
                    let attr = tabContents[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabContents[i];
                        break;
                    }
                }
            }
            return ret;
        }
        let getHeader = (name) => {
            let ret;
            if (tabHeaders) {
                for (let i = 0; i < tabHeaders.length; i++) {
                    let attr = tabHeaders[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabHeaders[i];
                        break;
                    }
                }
            }
            return ret;
        }
        this.showContent = (evt) => {
            let target = evt.target;
            let name = target.attributes['name'].value;

            hideContents();
            clearActiveTabs();

            let currHeader = getHeader(name);
            let currContent = getContent(name);
            if (currContent) {
                currContent.style.display = "block";
            }
            if (currHeader) {
                currHeader.className += " active";
            }
        }

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        this.save = (e) => {
            let item;
            let items = [];
            ctrls.forEach(oRef => {
                item = (oRef.entry) ? oRef.entry.getItem() : null;
                if (item) {
                    item.langId = oRef.langId;
                    items.push(item)
                }
            });
            membermanager.save(items);
            events.raise(events.name.EndEditMember)
        }
        this.cancel = (e) => {
            events.raise(events.name.EndEditMember)
        }

        this.setup = (item) => {
            let isNew = false;

            memberId = item.memberId;
            if (memberId === undefined || memberId === null || memberId.trim() === '') {
                isNew = true;
            }
            ctrls = [];

            let loader = window.membermanager;

            lang.languages.forEach(lg => {
                let ctrl = self.refs[lg.langId];
                let original = (isNew) ? clone(item) : loader.find(lg.langId, memberId);

                if (ctrl) {
                    let obj = {
                        langId: lg.langId,
                        entry: ctrl,
                        scrObj: original
                    }
                    ctrl.setup(original);
                    ctrls.push(obj)
                }
            });
        }

});
riot.tag2('member-entry', '<div class="padtop"></div> <div class="padtop"></div> <ninput ref="prefix" title="{content.entry.prefix}" type="text" name="prefix"></ninput> <ninput ref="firstName" title="{content.entry.firstName}" type="text" name="firstName"></ninput> <ninput ref="lastName" title="{content.entry.lastName}" type="text" name="lastName"></ninput> <virtual if="{isDefault()}"> <ninput ref="userName" title="{content.entry.userName}" type="text" name="userName"></ninput> <ninput ref="passWord" title="{content.entry.passWord}" type="password" name="passWord"></ninput> <nselect ref="memberTypes" title="{content.entry.memberType}"></nselect> </virtual>', 'member-entry,[data-is="member-entry"]{ margin: 0; padding: 0; width: 100%; height: 100%; } member-entry .padtop,[data-is="member-entry"] .padtop{ display: block; margin: 0 auto; width: 100%; min-height: 10px; }', '', function(opts) {
        let self = this;
        let screenId = 'member-manage';
        this.isDefault = () => { return (opts.langid === '' || opts.langid === 'EN') }

        let defaultContent = {
            entry: {
                prefix: 'Prefix Name',
                firstName: 'First Name',
                lastName: 'Last Name',
                userName: 'User Name',
                passWord: 'Password',
                memberType: 'Member Type',
                tagId: 'Tag ID',
                idCard: 'ID Card',
                employeeCode: 'Employee Code',
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let prefix, firstName, lastName, userName, passWord;

        let memberTypes;

        let initCtrls = () => {
            prefix = self.refs['prefix'];
            firstName = self.refs['firstName'];
            lastName = self.refs['lastName'];
            userName = self.refs['userName'];
            passWord = self.refs['passWord'];

            memberTypes = self.refs['memberTypes'];

        }
        let freeCtrls = () => {
            prefix = null;
            firstName = null;
            lastName = null;
            userName = null;
            passWord = null;
            memberTypes = null;

        }
        let clearInputs = () => {
            prefix.clear()
            firstName.clear()
            lastName.clear()
            userName.clear()
            passWord.clear()
            memberTypes.clear();

        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.MemberTypeListChanged, onMemberTypeListChanged)
        }
        let unbindEvents = () => {
            delEvt(events.name.MemberTypeListChanged, onMemberTypeListChanged)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let onMemberTypeListChanged = (e) => { updatecontent(); }

        let origObj;
        let editObj;

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        let ctrlToObj = () => {
            if (editObj) {
                if (prefix) editObj.Prefix = prefix.value();
                if (firstName) editObj.FirstName = firstName.value();
                if (lastName) editObj.LastName = lastName.value();
                if (userName) editObj.UserName = userName.value();
                if (passWord) editObj.Password = passWord.value();

                if (memberTypes) editObj.MemberType = memberTypes.value();

            }
        }
        let objToCtrl = () => {
            if (editObj) {

                if (prefix) prefix.value(editObj.Prefix);
                if (firstName) firstName.value(editObj.FirstName);
                if (lastName) lastName.value(editObj.LastName);
                if (userName) userName.value(editObj.UserName);
                if (passWord) passWord.value(editObj.Password);

                if (memberTypes) memberTypes.value(editObj.MemberType.toString());

            }
        }

        this.setup = (item) => {

            if (memberTypes) {
                memberTypes.setup(master.membertypes.current, { valueField:'memberTypeId', textField:'Description' });
            }

            origObj = clone(item);
            editObj = clone(item);

            objToCtrl();
        }
        this.getItem = () => {
            ctrlToObj();

            let hasId = (editObj.memberId !== undefined && editObj.memberId != null)
            let isDirty = !hasId || !equals(origObj, editObj);

            return (isDirty) ? editObj : null;
        }

});
riot.tag2('member-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <member-view ref="viewer" class="view"></member-view> </yield> <yield to="entry"> <member-editor ref="entry" class="entry"></member-editor> </yield> </flip-screen>', 'member-manage,[data-is="member-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } member-manage .view,[data-is="member-manage"] .view,member-manage .entry,[data-is="member-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } member-manage .entry,[data-is="member-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Title'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.BeginEditMember, onBeginEdit)
            addEvt(events.name.EndEditMember, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditMember, onEndEdit)
            delEvt(events.name.BeginEditMember, onBeginEdit)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onBeginEdit = (e) => {

            if (flipper) {
                flipper.toggle();
                let item = e.detail.data.item;

                if (entry) entry.setup(item);
            }

        }
        let onEndEdit = (e) => {

            if (flipper) {
                flipper.toggle();
            }
        }

});
riot.tag2('member-view', '<div ref="title" class="titlearea"> <button class="addnew" onclick="{addnew}"> <span class="fas fa-plus-circle">&nbsp;</span> </button> <button class="refresh" onclick="{refresh}"> <span class="fas fa-sync">&nbsp;</span> </button> </div> <div ref="container" class="scrarea"> <div ref="grid"></div> </div>', 'member-view,[data-is="member-view"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 30px 1fr; grid-template-areas: \'titlearea\' \'scrarea\'; } member-view .titlearea,[data-is="member-view"] .titlearea{ grid-area: titlearea; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: hidden; border-radius: 3px; background-color: transparent; color: whitesmoke; } member-view .titlearea .addnew,[data-is="member-view"] .titlearea .addnew{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } member-view .titlearea .refresh,[data-is="member-view"] .titlearea .refresh{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } member-view .scrarea,[data-is="member-view"] .scrarea{ grid-area: scrarea; margin: 0 auto; padding: 0; margin-top: 3px; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;
        let table;
        let screenId = 'member-manage';

        let defaultContent = {
            title: 'Member Management',
            columns: []
        }
        this.content = defaultContent;

        let editIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-edit'></span></button>";
        };
        let deleteIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-trash-alt'></span></button>";
        };

        let initGrid = (data) => {

            let opts = {
                height: "100%",
                layout: "fitDataFill",
                data: (data) ? data : []
            }
            setupColumns(opts);

            table = new Tabulator(self.refs['grid'], opts);
        }
        let setupColumns = (opts) => {
            let = columns = [
                { formatter: editIcon, align:"center", width:44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: editRow
                },
                { formatter: deleteIcon, align:"center", width: 44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: deleteRow
                }
            ]

            if (self.content && self.content.columns) {
                let cols = self.content.columns;
                columns.push(...cols)
            }
            opts.columns = columns;
        }
        let syncData = () => {
            if (table) table = null;
            let data = membermanager.current;
            initGrid(data)
        }
        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;

                self.update();
                if (table) table.redraw(true);
            }
        }

        let initCtrls = () => { initGrid(); }
        let freeCtrls = () => { table = null; }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.MemberListChanged, onMemberListChanged)
            addEvt(events.name.EndEditMember, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditMember, onEndEdit)
            delEvt(events.name.MemberListChanged, onMemberListChanged)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }
        let onScreenChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                membermanager.load();
            }
        }
        let onMemberListChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }

        let editRow = (e, cell) => {
            let data = cell.getRow().getData();
            events.raise(events.name.BeginEditMember, { item: data })
        }
        let deleteRow = (e, cell) => {
            let data = cell.getRow().getData();
            console.log('delete:', data, ', langId:', lang.langId);
            syncData();

        }
        let onEndEdit = (e) => {
            syncData();
            table.redraw(true);
        }

        this.addnew = (e) => {
            let data = {
                memberId: null,
                Prefix: '',
                FirstName: 'First Name',
                LastName: 'Last Name',
                UserName: 'user@company.com',
                Password: '',
                MemberType: 280,
                TagId: null,
                IDCard: null,
                EmployeeCode: null,
            };
            events.raise(events.name.BeginEditMember, { item: data })
        }
        this.refresh = (e) => {
            membermanager.load();
            updatecontent();
        }

});
riot.tag2('branch-editor', '<div class="entry"> <div class="tab"> <button ref="tabheader" class="tablinks active" name="default" onclick="{showContent}"> <span class="fas fa-cog"></span>&nbsp;{content.entry.tabDefault}&nbsp; </button> <button ref="tabheader" class="tablinks" name="miltilang" onclick="{showContent}"> <span class="fas fa-globe-americas"></span>&nbsp;{content.entry.tabMultiLang}&nbsp; </button> </div> <div ref="tabcontent" name="default" class="tabcontent" style="display: block;"> <branch-entry ref="EN" langid=""></branch-entry> </div> <div ref="tabcontent" name="miltilang" class="tabcontent"> <virtual if="{lang.languages}"> <virtual each="{item in lang.languages}"> <virtual if="{item.langId !== \'EN\'}"> <div class="panel-header" langid="{item.langId}"> &nbsp;&nbsp; <span class="flag-css flag-icon flag-icon-{item.flagId.toLowerCase()}"></span> &nbsp;{item.Description}&nbsp; </div> <div class="panel-body" langid="{item.langId}"> <branch-entry ref="{item.langId}" langid="{item.langId}"></branch-entry> </div> </virtual> </virtual> </virtual> </div> </div> <div class="tool"> <button onclick="{save}"><span class="fas fa-save"></span></button> <button onclick="{cancel}"><span class="fas fa-times"></span></button> </div>', 'branch-editor,[data-is="branch-editor"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr 30px; grid-template-areas: \'entry\' \'tool\'; overflow: hidden; background-color: white; } branch-editor .entry,[data-is="branch-editor"] .entry{ grid-area: entry; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: auto; } branch-editor .entry .tab,[data-is="branch-editor"] .entry .tab{ overflow: hidden; border: 1px solid #ccc; } branch-editor .entry .tab button,[data-is="branch-editor"] .entry .tab button{ background-color: inherit; float: left; border: none; outline: none; cursor: pointer; padding: 14px 16px; transition: 0.3s; } branch-editor .entry .tab button:hover,[data-is="branch-editor"] .entry .tab button:hover{ background-color: #ddd; } branch-editor .entry .tab button.active,[data-is="branch-editor"] .entry .tab button.active{ background-color: #ccc; } branch-editor .entry .tabcontent,[data-is="branch-editor"] .entry .tabcontent{ display: none; padding: 3px; width: 100%; max-width: 100%; overflow: auto; } branch-editor .entry .tabcontent .panel-header,[data-is="branch-editor"] .entry .tabcontent .panel-header{ margin: 0 auto; padding: 0; padding-top: 3px; width: 100%; height: 30px; color: white; background: cornflowerblue; border-radius: 5px 5px 0 0; } branch-editor .entry .tabcontent .panel-body,[data-is="branch-editor"] .entry .tabcontent .panel-body{ margin: 0 auto; margin-bottom: 5px; padding: 0; width: 100%; border: 1px solid cornflowerblue; } branch-editor .tool,[data-is="branch-editor"] .tool{ grid-area: tool; margin: 0 auto; padding: 0; padding-left: 3px; padding-top: 3px; width: 100%; height: 30px; overflow: hidden; }', '', function(opts) {


        let self = this;
        let screenId = 'branch-manage';

        let branchId = '';
        let ctrls = [];

        let defaultContent = {
            entry: {
                tabDefault: 'Default',
                tabMultiLang: 'Languages'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let tabHeaders = [];
        let tabContents = [];

        let initCtrls = () => {
            let headers = self.refs['tabheader'];
            tabHeaders.push(...headers)
            let contents = self.refs['tabcontent'];
            tabContents.push(...contents)
        }
        let freeCtrls = () => {
            tabHeaders = [];
            tabContents = [];
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

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

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let clearActiveTabs = () => {
            if (tabHeaders) {

                for (let i = 0; i < tabHeaders.length; i++) {
                    tabHeaders[i].className = tabHeaders[i].className.replace(" active", "");
                }
            }
        }
        let hideContents = () => {
            if (tabContents) {

                for (let i = 0; i < tabContents.length; i++) {
                    tabContents[i].style.display = "none";
                }
            }
        }
        let getContent = (name) => {
            let ret;
            if (tabContents) {
                for (let i = 0; i < tabContents.length; i++) {
                    let attr = tabContents[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabContents[i];
                        break;
                    }
                }
            }
            return ret;
        }
        let getHeader = (name) => {
            let ret;
            if (tabHeaders) {
                for (let i = 0; i < tabHeaders.length; i++) {
                    let attr = tabHeaders[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabHeaders[i];
                        break;
                    }
                }
            }
            return ret;
        }
        this.showContent = (evt) => {
            let target = evt.target;
            let name = target.attributes['name'].value;

            hideContents();
            clearActiveTabs();

            let currHeader = getHeader(name);
            let currContent = getContent(name);
            if (currContent) {
                currContent.style.display = "block";
            }
            if (currHeader) {
                currHeader.className += " active";
            }
        }

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        this.save = (e) => {
            let item;
            let items = [];
            ctrls.forEach(oRef => {
                item = (oRef.entry) ? oRef.entry.getItem() : null;
                if (item) {
                    item.langId = oRef.langId;
                    items.push(item)
                }
            });
            branchmanager.save(items);
            events.raise(events.name.EndEditBranch)
        }
        this.cancel = (e) => {
            events.raise(events.name.EndEditBranch)
        }

        this.setup = (item) => {
            let isNew = false;

            branchId = item.branchId;
            if (branchId === undefined || branchId === null || branchId.trim() === '') {
                isNew = true;
            }
            ctrls = [];

            let loader = window.branchmanager;

            lang.languages.forEach(lg => {
                let ctrl = self.refs[lg.langId];
                let original = (isNew) ? clone(item) : loader.find(lg.langId, branchId);

                if (ctrl) {
                    let obj = {
                        langId: lg.langId,
                        entry: ctrl,
                        scrObj: original
                    }
                    ctrl.setup(original);
                    ctrls.push(obj)
                }
            });
        }

});
riot.tag2('branch-entry', '<div class="padtop"></div> <div class="padtop"></div> <ninput ref="branchName" title="{content.entry.branchName}" type="text" name="branchName"></ninput>', 'branch-entry,[data-is="branch-entry"]{ margin: 0; padding: 0; width: 100%; height: 100%; } branch-entry .padtop,[data-is="branch-entry"] .padtop{ display: block; margin: 0 auto; width: 100%; min-height: 10px; }', '', function(opts) {
        let self = this;
        let screenId = 'branch-manage';
        this.isDefault = () => { return (opts.langid === '' || opts.langid === 'EN') }

        let defaultContent = {
            entry: {
                branchName: 'Branch Name'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let branchName;

        let initCtrls = () => {
            branchName = self.refs['branchName'];
        }
        let freeCtrls = () => {
            branchName = null;
        }
        let clearInputs = () => {
            branchName.clear();
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

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

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let origObj;
        let editObj;

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        let ctrlToObj = () => {
            if (editObj) {

                if (branchName) editObj.branchName = branchName.value();
            }
        }
        let objToCtrl = () => {
            if (editObj) {

                if (branchName) branchName.value(editObj.branchName);
            }
        }

        this.setup = (item) => {
            origObj = clone(item);
            editObj = clone(item);

            objToCtrl();
        }
        this.getItem = () => {
            ctrlToObj();

            let hasId = (editObj.branchId !== undefined && editObj.branchId != null)
            let isDirty = !hasId || !equals(origObj, editObj);

            return (isDirty) ? editObj : null;
        }

});
riot.tag2('branch-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <branch-view ref="viewer" class="view"></branch-view> </yield> <yield to="entry"> <branch-editor ref="entry" class="entry"></branch-editor> </yield> </flip-screen>', 'branch-manage,[data-is="branch-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } branch-manage .view,[data-is="branch-manage"] .view,branch-manage .entry,[data-is="branch-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } branch-manage .entry,[data-is="branch-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Title'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.BeginEditBranch, onBeginEdit)
            addEvt(events.name.EndEditBranch, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditBranch, onEndEdit)
            delEvt(events.name.BeginEditBranch, onBeginEdit)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onBeginEdit = (e) => {

            if (flipper) {
                flipper.toggle();
                let item = e.detail.data.item;

                if (entry) entry.setup(item);
            }

        }
        let onEndEdit = (e) => {

            if (flipper) {
                flipper.toggle();
            }
        }

});
riot.tag2('branch-view', '<div ref="title" class="titlearea"> <button class="addnew" onclick="{addnew}"> <span class="fas fa-plus-circle">&nbsp;</span> </button> <button class="refresh" onclick="{refresh}"> <span class="fas fa-sync">&nbsp;</span> </button> </div> <div ref="container" class="scrarea"> <div ref="grid"></div> </div>', 'branch-view,[data-is="branch-view"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 30px 1fr; grid-template-areas: \'titlearea\' \'scrarea\'; } branch-view .titlearea,[data-is="branch-view"] .titlearea{ grid-area: titlearea; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: hidden; border-radius: 3px; background-color: transparent; color: whitesmoke; } branch-view .titlearea .addnew,[data-is="branch-view"] .titlearea .addnew{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } branch-view .titlearea .refresh,[data-is="branch-view"] .titlearea .refresh{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } branch-view .scrarea,[data-is="branch-view"] .scrarea{ grid-area: scrarea; margin: 0 auto; padding: 0; margin-top: 3px; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;
        let table;
        let screenId = 'branch-manage';

        let defaultContent = {
            title: 'Branch Management',
            columns: []
        }
        this.content = defaultContent;

        let editIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-edit'></span></button>";
        };
        let deleteIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-trash-alt'></span></button>";
        };

        let initGrid = (data) => {

            let opts = {
                height: "100%",
                layout: "fitDataFill",
                data: (data) ? data : []
            }
            setupColumns(opts);

            table = new Tabulator(self.refs['grid'], opts);
        }
        let setupColumns = (opts) => {
            let = columns = [
                { formatter: editIcon, align:"center", width:44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: editRow
                },
                { formatter: deleteIcon, align:"center", width: 44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: deleteRow
                }
            ]

            if (self.content && self.content.columns) {
                let cols = self.content.columns;
                columns.push(...cols)
            }
            opts.columns = columns;
        }
        let syncData = () => {
            if (table) table = null;
            let data = branchmanager.current;

            initGrid(data)
        }
        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;

                self.update();
                if (table) table.redraw(true);
            }
        }

        let initCtrls = () => { initGrid(); }
        let freeCtrls = () => { table = null; }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.BranchListChanged, onBranchListChanged)
            addEvt(events.name.EndEditBranch, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditBranch, onEndEdit)
            delEvt(events.name.BranchListChanged, onBranchListChanged)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }
        let onScreenChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                branchmanager.load();
            }
        }
        let onBranchListChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }

        let editRow = (e, cell) => {
            let data = cell.getRow().getData();
            events.raise(events.name.BeginEditBranch, { item: data })
        }
        let deleteRow = (e, cell) => {
            let data = cell.getRow().getData();
            console.log('delete:', data, ', langId:', lang.langId);
            syncData();

        }
        let onEndEdit = (e) => {
            syncData();
            table.redraw(true);
        }

        this.addnew = (e) => {
            let data = {
                branchId: null,
                branchName: 'New Branch'
            };
            events.raise(events.name.BeginEditBranch, { item: data })
        }
        this.refresh = (e) => {
            branchmanager.load();
            updatecontent();
        }

});
riot.tag2('org-editor', '<div class="entry"> <div class="tab"> <button ref="tabheader" class="tablinks active" name="default" onclick="{showContent}"> <span class="fas fa-cog"></span>&nbsp;{content.entry.tabDefault}&nbsp; </button> <button ref="tabheader" class="tablinks" name="miltilang" onclick="{showContent}"> <span class="fas fa-globe-americas"></span>&nbsp;{content.entry.tabMultiLang}&nbsp; </button> </div> <div ref="tabcontent" name="default" class="tabcontent" style="display: block;"> <org-entry ref="EN" langid=""></org-entry> </div> <div ref="tabcontent" name="miltilang" class="tabcontent"> <virtual if="{lang.languages}"> <virtual each="{item in lang.languages}"> <virtual if="{item.langId !== \'EN\'}"> <div class="panel-header" langid="{item.langId}"> &nbsp;&nbsp; <span class="flag-css flag-icon flag-icon-{item.flagId.toLowerCase()}"></span> &nbsp;{item.Description}&nbsp; </div> <div class="panel-body" langid="{item.langId}"> <org-entry ref="{item.langId}" langid="{item.langId}"></org-entry> </div> </virtual> </virtual> </virtual> </div> </div> <div class="tool"> <button onclick="{save}"><span class="fas fa-save"></span></button> <button onclick="{cancel}"><span class="fas fa-times"></span></button> </div>', 'org-editor,[data-is="org-editor"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr 30px; grid-template-areas: \'entry\' \'tool\'; overflow: hidden; background-color: white; } org-editor .entry,[data-is="org-editor"] .entry{ grid-area: entry; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: auto; } org-editor .entry .tab,[data-is="org-editor"] .entry .tab{ overflow: hidden; border: 1px solid #ccc; } org-editor .entry .tab button,[data-is="org-editor"] .entry .tab button{ background-color: inherit; float: left; border: none; outline: none; cursor: pointer; padding: 14px 16px; transition: 0.3s; } org-editor .entry .tab button:hover,[data-is="org-editor"] .entry .tab button:hover{ background-color: #ddd; } org-editor .entry .tab button.active,[data-is="org-editor"] .entry .tab button.active{ background-color: #ccc; } org-editor .entry .tabcontent,[data-is="org-editor"] .entry .tabcontent{ display: none; padding: 3px; width: 100%; max-width: 100%; overflow: auto; } org-editor .entry .tabcontent .panel-header,[data-is="org-editor"] .entry .tabcontent .panel-header{ margin: 0 auto; padding: 0; padding-top: 3px; width: 100%; height: 30px; color: white; background: cornflowerblue; border-radius: 5px 5px 0 0; } org-editor .entry .tabcontent .panel-body,[data-is="org-editor"] .entry .tabcontent .panel-body{ margin: 0 auto; margin-bottom: 5px; padding: 0; width: 100%; border: 1px solid cornflowerblue; } org-editor .tool,[data-is="org-editor"] .tool{ grid-area: tool; margin: 0 auto; padding: 0; padding-left: 3px; padding-top: 3px; width: 100%; height: 30px; overflow: hidden; }', '', function(opts) {


        let self = this;
        let screenId = 'org-manage';

        let orgId = '';
        let ctrls = [];

        let defaultContent = {
            entry: {
                tabDefault: 'Default',
                tabMultiLang: 'Languages'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let tabHeaders = [];
        let tabContents = [];

        let initCtrls = () => {
            let headers = self.refs['tabheader'];
            tabHeaders.push(...headers)
            let contents = self.refs['tabcontent'];
            tabContents.push(...contents)
        }
        let freeCtrls = () => {
            tabHeaders = [];
            tabContents = [];
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

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

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let clearActiveTabs = () => {
            if (tabHeaders) {

                for (let i = 0; i < tabHeaders.length; i++) {
                    tabHeaders[i].className = tabHeaders[i].className.replace(" active", "");
                }
            }
        }
        let hideContents = () => {
            if (tabContents) {

                for (let i = 0; i < tabContents.length; i++) {
                    tabContents[i].style.display = "none";
                }
            }
        }
        let getContent = (name) => {
            let ret;
            if (tabContents) {
                for (let i = 0; i < tabContents.length; i++) {
                    let attr = tabContents[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabContents[i];
                        break;
                    }
                }
            }
            return ret;
        }
        let getHeader = (name) => {
            let ret;
            if (tabHeaders) {
                for (let i = 0; i < tabHeaders.length; i++) {
                    let attr = tabHeaders[i].attributes['name'];
                    let aName = attr.value;
                    let vName = name;
                    if (aName === vName) {
                        ret = tabHeaders[i];
                        break;
                    }
                }
            }
            return ret;
        }
        this.showContent = (evt) => {
            let target = evt.target;
            let name = target.attributes['name'].value;

            hideContents();
            clearActiveTabs();

            let currHeader = getHeader(name);
            let currContent = getContent(name);
            if (currContent) {
                currContent.style.display = "block";
            }
            if (currHeader) {
                currHeader.className += " active";
            }
        }

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        this.save = (e) => {
            let item;
            let items = [];
            ctrls.forEach(oRef => {
                item = (oRef.entry) ? oRef.entry.getItem() : null;
                if (item) {
                    item.langId = oRef.langId;
                    items.push(item)
                }
            });
            orgmanager.save(items);
            events.raise(events.name.EndEditOrg)
        }
        this.cancel = (e) => {
            events.raise(events.name.EndEditOrg)
        }

        this.setup = (item) => {
            let isNew = false;

            orgId = item.orgId;
            if (orgId === undefined || orgId === null || orgId.trim() === '') {
                isNew = true;
            }
            ctrls = [];

            let loader = window.orgmanager;

            lang.languages.forEach(lg => {
                let ctrl = self.refs[lg.langId];
                let original = (isNew) ? clone(item) : loader.find(lg.langId, orgId);

                if (ctrl) {
                    let obj = {
                        langId: lg.langId,
                        entry: ctrl,
                        scrObj: original
                    }
                    ctrl.setup(original);
                    ctrls.push(obj)
                }
            });
        }

});
riot.tag2('org-entry', '<div class="padtop"></div> <div class="padtop"></div> <ninput ref="orgName" title="{content.entry.orgName}" type="text" name="orgName"></ninput> <virtual if="{isDefault()}"> <ninput ref="parentId" title="{content.entry.parentId}" type="text" name="parentId"></ninput> <ninput ref="branchId" title="{content.entry.branchId}" type="text" name="branchId"></ninput> </virtual>', 'org-entry,[data-is="org-entry"]{ margin: 0; padding: 0; width: 100%; height: 100%; } org-entry .padtop,[data-is="org-entry"] .padtop{ display: block; margin: 0 auto; width: 100%; min-height: 10px; }', '', function(opts) {
        let self = this;
        let screenId = 'org-manage';
        this.isDefault = () => { return (opts.langid === '' || opts.langid === 'EN') }

        let defaultContent = {
            entry: {
                orgName: 'Org Name',
                parentId: 'Parent Org',
                branchId: 'Branch'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;
                self.update();
            }
        }

        let orgName, parentId, branchId;

        let initCtrls = () => {
            orgName = self.refs['orgName'];
            parentId = self.refs['parentId'];
            branchId = self.refs['branchId'];
        }
        let freeCtrls = () => {
            orgName = null;
            parentId = null;
            branchId = null;
        }
        let clearInputs = () => {
            branchId.clear();
            parentId.clear();
            orgName.clear();
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.BranchListChanged, onBranchListChanged)
            addEvt(events.name.OrgListChanged, onOrgListChanged);
        }
        let unbindEvents = () => {
            delEvt(events.name.OrgListChanged, onOrgListChanged);
            delEvt(events.name.BranchListChanged, onBranchListChanged)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let onBranchListChanged = (e) => { updatecontent(); }
        let onOrgListChanged = (e) => { }

        let origObj;
        let editObj;

        let clone = (src) => { return JSON.parse(JSON.stringify(src)); }
        let equals = (src, dst) => {
            let o1 = JSON.stringify(src);
            let o2 = JSON.stringify(dst);
            return (o1 === o2);
        }

        let ctrlToObj = () => {
            if (editObj) {

                if (orgName) editObj.OrgName = orgName.value();
                if (parentId) editObj.parentId = parentId.value();
                if (branchId) editObj.branchId = branchId.value();
            }
        }
        let objToCtrl = () => {
            if (editObj) {

                if (orgName) orgName.value(editObj.OrgName);
                if (parentId) parentId.value(editObj.parentId);
                if (branchId) branchId.value(editObj.branchId);
            }
        }

        this.setup = (item) => {

            origObj = clone(item);
            editObj = clone(item);

            objToCtrl();
        }
        this.getItem = () => {
            ctrlToObj();

            let hasId = (editObj.orgId !== undefined && editObj.orgId != null)
            let isDirty = !hasId || !equals(origObj, editObj);

            return (isDirty) ? editObj : null;
        }

});
riot.tag2('org-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <org-view ref="viewer" class="view"></org-view> </yield> <yield to="entry"> <org-editor ref="entry" class="entry"></org-editor> </yield> </flip-screen>', 'org-manage,[data-is="org-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } org-manage .view,[data-is="org-manage"] .view,org-manage .entry,[data-is="org-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } org-manage .entry,[data-is="org-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Title'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.BeginEditOrg, onBeginEdit)
            addEvt(events.name.EndEditOrg, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditOrg, onEndEdit)
            delEvt(events.name.BeginEditOrg, onBeginEdit)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onBeginEdit = (e) => {

            if (flipper) {
                flipper.toggle();
                let item = e.detail.data.item;

                if (entry) entry.setup(item);
            }

        }
        let onEndEdit = (e) => {

            if (flipper) {
                flipper.toggle();
            }
        }

});
riot.tag2('org-view-tree', '<h3>Org View</h3>', '', '', function(opts) {
});
riot.tag2('org-view', '<div ref="title" class="titlearea"> <button class="addnew" onclick="{addnew}"> <span class="fas fa-plus-circle">&nbsp;</span> </button> <button class="refresh" onclick="{refresh}"> <span class="fas fa-sync">&nbsp;</span> </button> </div> <div ref="container" class="scrarea"> <div ref="grid"></div> </div>', 'org-view,[data-is="org-view"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 30px 1fr; grid-template-areas: \'titlearea\' \'scrarea\'; } org-view .titlearea,[data-is="org-view"] .titlearea{ grid-area: titlearea; margin: 0 auto; padding: 0; width: 100%; height: 100%; overflow: hidden; border-radius: 3px; background-color: transparent; color: whitesmoke; } org-view .titlearea .addnew,[data-is="org-view"] .titlearea .addnew{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } org-view .titlearea .refresh,[data-is="org-view"] .titlearea .refresh{ margin: 0 auto; padding: 2px; height: 100%; width: 50px; color: darkgreen; } org-view .scrarea,[data-is="org-view"] .scrarea{ grid-area: scrarea; margin: 0 auto; padding: 0; margin-top: 3px; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;
        let table;
        let screenId = 'org-manage';

        let defaultContent = {
            title: 'Org Management',
            columns: []
        }
        this.content = defaultContent;

        let editIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-edit'></span></button>";
        };
        let deleteIcon = (cell, formatterParams) => {
            return "<button><span class='fas fa-trash-alt'></span></button>";
        };

        let initGrid = (data) => {

            let opts = {
                height: "100%",
                layout: "fitDataFill",
                data: (data) ? data : []
            }
            setupColumns(opts);

            table = new Tabulator(self.refs['grid'], opts);
        }
        let setupColumns = (opts) => {
            let = columns = [
                { formatter: editIcon, align:"center", width:44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: editRow
                },
                { formatter: deleteIcon, align:"center", width: 44,
                    resizable: false, frozen: true, headerSort: false,
                    cellClick: deleteRow
                }
            ]

            if (self.content && self.content.columns) {
                let cols = self.content.columns;
                columns.push(...cols)
            }
            opts.columns = columns;
        }
        let syncData = () => {
            if (table) table = null;
            let data = orgmanager.current;
            initGrid(data)
        }
        let updatecontent = () => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
                self.content = scrContent ? scrContent : defaultContent;

                self.update();
                if (table) table.redraw(true);
            }
        }

        let initCtrls = () => { initGrid(); }
        let freeCtrls = () => { table = null; }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.OrgListChanged, onOrgListChanged)
            addEvt(events.name.EndEditOrg, onEndEdit)
        }
        let unbindEvents = () => {
            delEvt(events.name.EndEditOrg, onEndEdit)
            delEvt(events.name.OrgListChanged, onOrgListChanged)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }
        let onScreenChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                orgmanager.load();
            }
        }
        let onOrgListChanged = (e) => {
            let scrId = screens.current.screenId;
            if (screenId === scrId) {
                updatecontent();
                syncData();
            }
        }

        let editRow = (e, cell) => {
            let data = cell.getRow().getData();
            events.raise(events.name.BeginEditOrg, { item: data })
        }
        let deleteRow = (e, cell) => {
            let data = cell.getRow().getData();
            console.log('delete:', data, ', langId:', lang.langId);
            syncData();

        }
        let onEndEdit = (e) => {
            syncData();
            table.redraw(true);
        }

        this.addnew = (e) => {
            let data = {
                orgId: null,
                OrgName: 'New Org',
                parentId: 'O0001',
                branchId: 'B0001'
            };
            events.raise(events.name.BeginEditOrg, { item: data })
        }
        this.refresh = (e) => {
            orgmanager.load();
            updatecontent();
        }

});
riot.tag2('question-manage', '', 'question-manage,[data-is="question-manage"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('bar-votesummary-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <bar-votesummary-search ref="viewer" class="view"></bar-votesummary-search> </yield> <yield to="entry"> <bar-votesummary-result ref="entry" class="entry"></bar-votesummary-result> </yield> </flip-screen>', 'bar-votesummary-manage,[data-is="bar-votesummary-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } bar-votesummary-manage .view,[data-is="bar-votesummary-manage"] .view,bar-votesummary-manage .entry,[data-is="bar-votesummary-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } bar-votesummary-manage .entry,[data-is="bar-votesummary-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Vote Summary (Bar graph)'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.BarSummarySearch, onShowSearch)
            addEvt(events.name.BarSummaryResult, onShowResult)
        }
        let unbindEvents = () => {
            delEvt(events.name.BarSummaryResult, onShowResult)
            delEvt(events.name.BarSummarySearch, onShowSearch)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onShowResult = (e) => {
            if (flipper) {
                flipper.toggle();
                let criteria = {

                }
                if (entry) entry.setup(criteria);
            }

        }
        let onShowSearch = (e) => {
            if (flipper) {
                flipper.toggle();
            }
        }

});

riot.tag2('bar-votesummary-result', '<h3>Bar Search Result.</h3> <button onclick="{goback}">Close</button>', 'bar-votesummary-result,[data-is="bar-votesummary-result"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.goback = () => {
            events.raise(events.name.BarSummarySearch)
        }

        this.setup = (criteria) => {
            console.log('criteria:', criteria)
        }
});
riot.tag2('bar-votesummary-search', '<h3>Bar Search Criteria.</h3> <button onclick="{onseach}">Search</button>', 'bar-votesummary-search,[data-is="bar-votesummary-search"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.onseach = () => {
            events.raise(events.name.BarSummaryResult)
        }
});
riot.tag2('pie-votesummary-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <pie-votesummary-search ref="viewer" class="view"></pie-votesummary-search> </yield> <yield to="entry"> <pie-votesummary-result ref="entry" class="entry"></pie-votesummary-result> </yield> </flip-screen>', 'pie-votesummary-manage,[data-is="pie-votesummary-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } pie-votesummary-manage .view,[data-is="pie-votesummary-manage"] .view,pie-votesummary-manage .entry,[data-is="pie-votesummary-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } pie-votesummary-manage .entry,[data-is="pie-votesummary-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Vote Summary (Pie Chart)'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.PieSummarySearch, onShowSearch)
            addEvt(events.name.PieSummaryResult, onShowResult)
        }
        let unbindEvents = () => {
            delEvt(events.name.PieSummaryResult, onShowResult)
            delEvt(events.name.PieSummarySearch, onShowSearch)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onShowResult = (e) => {
            if (flipper) {
                flipper.toggle();
                let criteria = e.detail.data;
                if (entry) entry.setup(criteria);
            }

        }
        let onShowSearch = (e) => {
            if (flipper) {
                flipper.toggle();
            }
        }

});

riot.tag2('pie-votesummary-result', '<h3>Pie Search Result.</h3> <date-result></date-result> <question-slide></question-slide> <question-slide></question-slide> <question-slide></question-slide> <button onclick="{goback}">Close</button>', 'pie-votesummary-result,[data-is="pie-votesummary-result"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; background-color: whitesmoke !important; }', '', function(opts) {


        let self = this;
        let result = null;
        this.current = null;

        let updatecontent = () => {
            if (result) {
                self.current = result[lang.langId]
                console.log(self.current)
                self.update();
            }
        }

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.goback = () => {
            events.raise(events.name.PieSummarySearch)
        }

        this.setup = (criteria) => {

            $.ajax({
                type: "POST",
                url: "/customer/api/report/votesummaries/search",
                data: JSON.stringify(criteria),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: (ret) => {

                    result = ret.data;
                    updatecontent();
                },
                failure: (errMsg) => {
                    console.log(errMsg);
                }
            })
        }
});
riot.tag2('pie-votesummary-search', '<h3>Pie Search Criteria.</h3> <button onclick="{onseach}">Search</button>', 'pie-votesummary-search,[data-is="pie-votesummary-search"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.onseach = () => {
            let criteria = {
                qsetId: 'QS00001',
                beginDate: '2019-10-10',
                endDate: '2019-10-11',
                slides: [
                    { qSeq: 1 },
                    { qSeq: 2 },
                    { qSeq: 3 }
                ],
                orgs: [
                    { orgId: 'O0001' },
                    { orgId: 'O0002' },
                    { orgId: 'O0008' }
                ]
            }
            events.raise(events.name.PieSummaryResult, criteria)
        }
});
riot.tag2('rawvote-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <rawvote-search ref="viewer" class="view"></rawvote-search> </yield> <yield to="entry"> <rawvote-result ref="entry" class="entry"></rawvote-result> </yield> </flip-screen>', 'rawvote-manage,[data-is="rawvote-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } rawvote-manage .view,[data-is="rawvote-manage"] .view,rawvote-manage .entry,[data-is="rawvote-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } rawvote-manage .entry,[data-is="rawvote-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Raw Vote'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.RawVoteSearch, onShowSearch)
            addEvt(events.name.RawVoteResult, onShowResult)
        }
        let unbindEvents = () => {
            delEvt(events.name.RawVoteResult, onShowResult)
            delEvt(events.name.RawVoteSearch, onShowSearch)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onShowResult = (e) => {
            if (flipper) {
                flipper.toggle();
                let criteria = {

                }
                if (entry) entry.setup(criteria);
            }

        }
        let onShowSearch = (e) => {
            if (flipper) {
                flipper.toggle();
            }
        }

});

riot.tag2('rawvote-result', '<h3>Raw Vote Search Result.</h3> <button onclick="{goback}">Close</button>', 'rawvote-result,[data-is="rawvote-result"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.goback = () => {
            events.raise(events.name.RawVoteSearch)
        }

        this.setup = (criteria) => {
            console.log('criteria:', criteria)
        }
});
riot.tag2('rawvote-search', '<h3>Raw Vote Search Criteria.</h3> <button onclick="{onseach}">Search</button>', 'rawvote-search,[data-is="rawvote-search"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.onseach = () => {
            events.raise(events.name.RawVoteResult)
        }
});
riot.tag2('report-home', '<div class="report-home-main"> <div class="report-item"> <button onclick="{showvotesummary}"> <span class="icon fa-3x fas fa-table cr1"></span> <span class="text">Vote Summary</span> </button> </div> <div class="report-item"> <button onclick="{showpiesummary}"> <span class="icon fa-3x fas fa-chart-pie cr2"></span> <span class="text">Pie Chart</span> </button> </div> <div class="report-item"> <button onclick="{showbarsummary}"> <span class="icon fa-3x fas fa-chart-bar cr3"></span> <span class="text">Bar Chart</span> </button> </div> <div class="report-item"> <button onclick="{showstaffcompare}"> <span class="icon fa-3x fas fa-chalkboard-teacher cr6"></span> <span class="text">Staff Compare</span> </button> </div> <div class="report-item"> <button onclick="{showrawvote}"> <span class="icon fa-3x fas fa-table cr4"></span> <span class="text">Raw Vote</span> </button> </div> <div class="report-item"> <button onclick="{showstaffperf}"> <span class="icon fa-3x far fa-id-card cr5"></span> <span class="text">Staff Performance</span> </button> </div> </div>', 'report-home,[data-is="report-home"]{ margin: 0 auto; padding: 0; padding-top: 20px; padding-bottom: 20px; width: 100%; height: 100%; display: block; overflow: auto; } @media (min-width: 620px) { report-home .report-home-main,[data-is="report-home"] .report-home-main{ column-count: 2; column-gap: 20px; } } @media (min-width: 960px) { report-home .report-home-main,[data-is="report-home"] .report-home-main{ column-count: 3; column-gap: 20px; } } report-home .report-home-main,[data-is="report-home"] .report-home-main{ margin: 0 auto; padding: 20px; max-width: 1000px; } report-home .report-home-main,[data-is="report-home"] .report-home-main{ display: block; margin: 0 auto; padding: 10px; } report-home .report-home-main .report-item,[data-is="report-home"] .report-home-main .report-item{ margin: 2px auto; padding: 0; margin-bottom: 20px; height: 100px; break-inside: avoid; } report-home .report-home-main .report-item button,[data-is="report-home"] .report-home-main .report-item button{ margin: 0 auto; padding: 0; display: grid; width: 100%; height: 100%; } report-home .report-home-main .report-item button .icon,[data-is="report-home"] .report-home-main .report-item button .icon{ justify-self: center; align-self: center; } report-home .report-home-main .report-item button .text,[data-is="report-home"] .report-home-main .report-item button .text{ justify-self: center; align-self: center; font-size: 1rem; font-weight: bold; } report-home .report-home-main .report-item button .icon.cr1,[data-is="report-home"] .report-home-main .report-item button .icon.cr1{ color: chocolate; } report-home .report-home-main .report-item button .icon.cr2,[data-is="report-home"] .report-home-main .report-item button .icon.cr2{ color: cornflowerblue; } report-home .report-home-main .report-item button .icon.cr3,[data-is="report-home"] .report-home-main .report-item button .icon.cr3{ color: olivedrab; } report-home .report-home-main .report-item button .icon.cr4,[data-is="report-home"] .report-home-main .report-item button .icon.cr4{ color: darkorchid; } report-home .report-home-main .report-item button .icon.cr5,[data-is="report-home"] .report-home-main .report-item button .icon.cr5{ color: sandybrown; } report-home .report-home-main .report-item button .icon.cr6,[data-is="report-home"] .report-home-main .report-item button .icon.cr6{ color: navy; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.showpiesummary = () => { screens.show('pie-votesummary-manage') }
        this.showbarsummary = () => { screens.show('bar-votesummary-manage') }
        this.showvotesummary = () => { screens.show('votesummary-manage') }
        this.showrawvote = () => { screens.show('rawvote-manage') }
        this.showstaffcompare = () => { screens.show('staff-compare-manage') }
        this.showstaffperf = () => { screens.show('staff-perf-manage') }
});
riot.tag2('staff-compare-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <staff-compare-search ref="viewer" class="view"></staff-compare-search> </yield> <yield to="entry"> <staff-compare-result ref="entry" class="entry"></staff-compare-result> </yield> </flip-screen>', 'staff-compare-manage,[data-is="staff-compare-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } staff-compare-manage .view,[data-is="staff-compare-manage"] .view,staff-compare-manage .entry,[data-is="staff-compare-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } staff-compare-manage .entry,[data-is="staff-compare-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Staff Compare'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.StaffCompareSearch, onShowSearch)
            addEvt(events.name.StaffCompareResult, onShowResult)
        }
        let unbindEvents = () => {
            delEvt(events.name.StaffCompareResult, onShowResult)
            delEvt(events.name.StaffCompareSearch, onShowSearch)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onShowResult = (e) => {
            if (flipper) {
                flipper.toggle();
                let criteria = {

                }
                if (entry) entry.setup(criteria);
            }

        }
        let onShowSearch = (e) => {
            if (flipper) {
                flipper.toggle();
            }
        }

});

riot.tag2('staff-compare-result', '<h3>Staff Compare Search Result.</h3> <button onclick="{goback}">Close</button>', 'staff-compare-result,[data-is="staff-compare-result"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.goback = () => {
            events.raise(events.name.StaffCompareSearch)
        }

        this.setup = (criteria) => {
            console.log('criteria:', criteria)
        }
});
riot.tag2('staff-compare-search', '<h3>Staff Compare Search Criteria.</h3> <button onclick="{onseach}">Search</button>', 'staff-compare-search,[data-is="staff-compare-search"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.onseach = () => {
            events.raise(events.name.StaffCompareResult)
        }
});
riot.tag2('staff-perf-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <staff-perf-search ref="viewer" class="view"></staff-perf-search> </yield> <yield to="entry"> <staff-perf-result ref="entry" class="entry"></staff-perf-result> </yield> </flip-screen>', 'staff-perf-manage,[data-is="staff-perf-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } staff-perf-manage .view,[data-is="staff-perf-manage"] .view,staff-perf-manage .entry,[data-is="staff-perf-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } staff-perf-manage .entry,[data-is="staff-perf-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Staff Performance'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.StaffPerfSearch, onShowSearch)
            addEvt(events.name.StaffPerfResult, onShowResult)
        }
        let unbindEvents = () => {
            delEvt(events.name.StaffPerfResult, onShowResult)
            delEvt(events.name.StaffPerfSearch, onShowSearch)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onShowResult = (e) => {
            if (flipper) {
                flipper.toggle();
                let criteria = {

                }
                if (entry) entry.setup(criteria);
            }

        }
        let onShowSearch = (e) => {
            if (flipper) {
                flipper.toggle();
            }
        }

});

riot.tag2('staff-perf-result', '<h3>Staff Performance Search Result.</h3> <button onclick="{goback}">Close</button>', 'staff-perf-result,[data-is="staff-perf-result"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.goback = () => {
            events.raise(events.name.StaffPerfSearch)
        }

        this.setup = (criteria) => {
            console.log('criteria:', criteria)
        }
});
riot.tag2('staff-perf-search', '<h3>Staff Performance Search Criteria.</h3> <button onclick="{onseach}">Search</button>', 'staff-perf-search,[data-is="staff-perf-search"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.onseach = () => {
            events.raise(events.name.StaffPerfResult)
        }
});
riot.tag2('votesummary-manage', '<flip-screen ref="flipper"> <yield to="viewer"> <votesummary-search ref="viewer" class="view"></votesummary-search> </yield> <yield to="entry"> <votesummary-result ref="entry" class="entry"></votesummary-result> </yield> </flip-screen>', 'votesummary-manage,[data-is="votesummary-manage"]{ margin: 0 auto; padding: 0; width: 100%; height: 100%; } votesummary-manage .view,[data-is="votesummary-manage"] .view,votesummary-manage .entry,[data-is="votesummary-manage"] .entry{ margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; } votesummary-manage .entry,[data-is="votesummary-manage"] .entry{ overflow: auto; }', '', function(opts) {


        let self = this;

        let defaultContent = {
            title: 'Vote Summary'
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let flipper, view, entry;
        let initCtrls = () => {

            flipper = self.refs['flipper'];
            entry = (flipper) ? flipper.refs['entry'] : undefined;
        }
        let freeCtrls = () => {
            entry = null;
            flipper = null;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            addEvt(events.name.VoteSummarySearch, onShowSearch)
            addEvt(events.name.VoteSummaryResult, onShowResult)
        }
        let unbindEvents = () => {
            delEvt(events.name.VoteSummaryResult, onShowResult)
            delEvt(events.name.VoteSummarySearch, onShowSearch)
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }
        let onShowResult = (e) => {
            if (flipper) {
                flipper.toggle();
                let criteria = {

                }
                if (entry) entry.setup(criteria);
            }

        }
        let onShowSearch = (e) => {
            if (flipper) {
                flipper.toggle();
            }
        }

});

riot.tag2('votesummary-result', '<h3>Vote Summary Search Result.</h3> <button onclick="{goback}">Close</button>', 'votesummary-result,[data-is="votesummary-result"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.goback = () => {
            events.raise(events.name.VoteSummarySearch)
        }

        this.setup = (criteria) => {
            console.log('criteria:', criteria)
        }
});
riot.tag2('votesummary-search', '<h3>Vote Summary Search Criteria.</h3> <button onclick="{onseach}">Search</button>', 'votesummary-search,[data-is="votesummary-search"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        this.onseach = () => {
            events.raise(events.name.VoteSummaryResult)
        }
});
riot.tag2('edl-customer-editor', '', 'edl-customer-editor,[data-is="edl-customer-editor"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-customer-manage', '', 'edl-customer-manage,[data-is="edl-customer-manage"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-customer-view', '', 'edl-customer-view,[data-is="edl-customer-view"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-admin-home', '', 'edl-admin-home,[data-is="edl-admin-home"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-staff-home', '', 'edl-staff-home,[data-is="edl-staff-home"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-supervisor-home', '', 'edl-supervisor-home,[data-is="edl-supervisor-home"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-staff-editor', '', 'edl-staff-editor,[data-is="edl-staff-editor"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-staff-manage', '', 'edl-staff-manage,[data-is="edl-staff-manage"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('edl-staff-view', '', 'edl-staff-view,[data-is="edl-staff-view"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('rater-home', '<div class="content-area"> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div ref="userSignIn" class="user-signin"> <div class="group-header"> <h4><span class="fa fa-user-lock">&nbsp;</span>&nbsp;{content.title}</h4> <div class="padtop"></div> </div> <div class="group-body"> <div class="padtop"></div> <ninput ref="userName" title="{content.label.userName}" type="text" name="userName"></ninput> <ninput ref="passWord" title="{content.label.passWord}" type="password" name="pwd"></ninput> <div class="padtop"></div> <button ref="submit"> <span class="fas fa-user">&nbsp;</span> {content.label.submit} </button> <div class="padtop"></div> <div class="padtop"></div> </div> </div> <div ref="userSelection" class="user-selection hide"> <div class="group-header"> <h4>{content.label.selectAccount}</h4> <div class="padtop"></div> </div> <div class="group-body"> <div class="padtop"></div> <div class="padtop"></div> <company-selection ref="userList" companyname="{content.label.companyName}" fullname="{content.label.fullName}"> </company-selection> <div class="padtop"></div> <button ref="cancel"> <span class="fa fa-user-times">&nbsp;</span> Cancel </button> <div class="padtop"></div> <div class="padtop"></div> </div> </div> </div>', 'rater-home,[data-is="rater-home"]{ margin: 0 auto; padding: 2px; position: relative; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; grid-template-areas: \'content-area\'; overflow: hidden; } rater-home .content-area,[data-is="rater-home"] .content-area{ grid-area: content-area; margin: 0 auto; padding: 0px; position: relative; display: block; width: 100%; height: 100%; background-color: white; background-image: url(\'public/assets/images/backgrounds/bg-15.jpg\'); background-blend-mode: multiply, luminosity; background-position: center; background-repeat: no-repeat; background-size: cover; } rater-home .content-area .user-signin,[data-is="rater-home"] .content-area .user-signin,rater-home .content-area .user-selection,[data-is="rater-home"] .content-area .user-selection{ display: block; position: relative; margin: 0 auto; padding: 0; } rater-home .content-area .user-signin.hide,[data-is="rater-home"] .content-area .user-signin.hide,rater-home .content-area .user-selection.hide,[data-is="rater-home"] .content-area .user-selection.hide{ display: none; } rater-home .padtop,[data-is="rater-home"] .padtop,rater-home .content-area .padtop,[data-is="rater-home"] .content-area .padtop,rater-home .content-area .user-signin .group-header .padtop,[data-is="rater-home"] .content-area .user-signin .group-header .padtop,rater-home .content-area .user-signin .group-body .padtop,[data-is="rater-home"] .content-area .user-signin .group-body .padtop,rater-home .content-area .user-selection .group-header .padtop,[data-is="rater-home"] .content-area .user-selection .group-header .padtop,rater-home .content-area .user-selection .group-body .padtop,[data-is="rater-home"] .content-area .user-selection .group-body .padtop{ display: block; margin: 0 auto; width: 100%; min-height: 10px; } rater-home .content-area .user-signin .group-header,[data-is="rater-home"] .content-area .user-signin .group-header,rater-home .content-area .user-selection .group-header,[data-is="rater-home"] .content-area .user-selection .group-header{ display: block; margin: 0 auto; padding: 3px; width: 30%; min-width: 300px; max-width: 500px; opacity: 0.8; background-color: cornflowerblue; border: 1px solid dimgray; border-radius: 8px 8px 0 0; } rater-home .content-area .user-signin .group-header h4,[data-is="rater-home"] .content-area .user-signin .group-header h4,rater-home .content-area .user-selection .group-header h4,[data-is="rater-home"] .content-area .user-selection .group-header h4{ display: block; margin: 0 auto; padding: 0; padding-top: 5px; font-size: 1.1rem; text-align: center; color: whitesmoke; user-select: none; } rater-home .content-area .user-signin .group-body,[data-is="rater-home"] .content-area .user-signin .group-body,rater-home .content-area .user-selection .group-body,[data-is="rater-home"] .content-area .user-selection .group-body{ display: flex; flex-direction: column; align-items: center; margin: 0 auto; padding: 0; height: auto; width: 30%; min-width: 300px; max-width: 500px; opacity: 0.8; background-color: white; border: 1px solid dimgray; border-radius: 0 0 8px 8px; } rater-home .content-area .user-signin .group-body ninput,[data-is="rater-home"] .content-area .user-signin .group-body ninput,rater-home .content-area .user-selection .group-body ninput,[data-is="rater-home"] .content-area .user-selection .group-body ninput{ background-color: white; } rater-home .content-area .user-signin .group-body button,[data-is="rater-home"] .content-area .user-signin .group-body button,rater-home .content-area .user-selection .group-body button,[data-is="rater-home"] .content-area .user-selection .group-body button{ display: inline-block; margin: 5px auto; padding: 10px 15px; color: forestgreen; font-weight: bold; cursor: pointer; width: 45%; text-decoration: none; vertical-align: middle; }', '', function(opts) {


        let self = this;
        let defaultContent = {
            title: 'Sign In',
            label: {
                selectAccount: 'Please Select Account',
                userName: 'User Name (admin)',
                passWord: 'Password',
                submit: 'Sign In',
                companyName: 'Company Name',
                fullName: 'Account Name'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {
            let scrId = screens.current.screenId;
            let scrContent = (contents.current && contents.current.screens) ? contents.current.screens[scrId] : null;
            self.content = scrContent ? scrContent : defaultContent;
            self.update();
        }

        let userSignIn, userSelection;
        let userName, passWord, submit, cancel;

        let initCtrls = () => {
            userSignIn = self.refs['userSignIn'];
            userSelection = self.refs['userSelection'];
            userName = self.refs['userName'];
            passWord = self.refs['passWord'];
            submit = self.refs['submit'];
            cancel = self.refs['cancel'];
        }
        let freeCtrls = () => {
            userName = null;
            passWord = null;
            submit = null;
            cancel = null;
            userSignIn = null;
            userSelection = null;
        }
        let clearInputs = () => {
            if (userName && passWord) {
                userName.clear();
                passWord.clear();
            }
            secure.reset();
        }
        let checkUserName = () => {
            let ret = false;
            let val = userName.value();
            ret = (val && val.length > 0);
            if (!ret) userName.focus()
            return ret;
        }
        let checkPassword = () => {
            let ret = false;
            let val = passWord.value();
            ret = (val && val.length > 0);
            if (!ret) passWord.focus()
            return ret;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)

            addEvt(events.name.UserListChanged, onUserListChanged);
            addEvt(events.name.UserSignInFailed, onSignInFailed);

            submit.addEventListener('click', onSubmit);
            cancel.addEventListener('click', onCancel);
        }
        let unbindEvents = () => {
            cancel.removeEventListener('click', onCancel);
            submit.removeEventListener('click', onSubmit);

            delEvt(events.name.UserListChanged, onUserListChanged);
            delEvt(events.name.UserSignInFailed, onSignInFailed);

            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let onUserListChanged = (e) => { showUserSelection(); }
        let onSignInFailed = (e) => {
            let err = e.detail.error;

            osd.info(err)
        }
        let onSubmit = (e) => {
            if (checkUserName() && checkPassword()) {

                let data = {
                    userName: userName.value(),
                    passWord: passWord.value()
                }
                secure.verifyUsers(data.userName, data.passWord);
            }
        }
        let onCancel = (e) => { showUserSignIn(); }

        let showUserSignIn = () => {
            if (userSignIn && userSelection) {
                userSignIn.classList.remove('hide');
                userSelection.classList.add('hide');
                userName.focus();
            }
        }
        let showUserSelection = () => {
            if (userSignIn && userSelection) {
                console.log(secure.users)
                if (secure.users.length > 1) {

                    userSignIn.classList.add('hide');
                    userSelection.classList.remove('hide');
                }
                else if (secure.users.length === 1) {

                    let customerId = secure.users[0].customerId;
                    secure.signin(customerId);
                }
                else {

                    osd.info({ msg: 'No user found!!!.'})
                }
            }
        }

});
riot.tag2('company-selection', '<virtual each="{user in users}"> <div class="account"> <div class="info1"> <span class="label">{opts.companyname}</span> <span class="data">{user.CustomerName}</span> </div> <div class="info2"> <span class="label">{opts.fullname}</span> <span class="data">{user.FullName}</span> </div> <button onclick="{onSignIn}">&nbsp;<span class="fas fa-2x fa-sign-in-alt">&nbsp;</span></button> </div> <hr> </virtual>', 'company-selection,[data-is="company-selection"]{ display: block; margin: 0 auto; padding: 0; } company-selection .account,[data-is="company-selection"] .account{ margin: 0 auto; padding: 2px; height: 100%; width: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; grid-template-areas: \'info1 button\' \'info2 button\'; overflow: hidden; overflow-y: auto; } company-selection .account div,[data-is="company-selection"] .account div{ display: block; margin: 0 auto; padding: 0; } company-selection .account div.info1,[data-is="company-selection"] .account div.info1{ grid-area: info1; display: block; margin: 0; padding: 0; padding-left: 20px; } company-selection .account div.info2,[data-is="company-selection"] .account div.info2{ grid-area: info2; display: block; margin: 0; padding: 0; padding-left: 20px; } company-selection .account div.info1 span,[data-is="company-selection"] .account div.info1 span,company-selection .account div.info2 span,[data-is="company-selection"] .account div.info2 span{ display: inline-block; margin: 0; padding: 0; } company-selection .account div.info1 span.label,[data-is="company-selection"] .account div.info1 span.label,company-selection .account div.info2 span.label,[data-is="company-selection"] .account div.info2 span.label{ display: inline-block; margin: 0 auto; padding: 0; font-weight: bold; color: navy; width: 100%; } company-selection .account div.info1 span.data,[data-is="company-selection"] .account div.info1 span.data,company-selection .account div.info2 span.data,[data-is="company-selection"] .account div.info2 span.data{ display: inline-block; margin: 0 auto; padding: 0; font-weight: bold; color: forestgreen; width: 100%; } company-selection .account button,[data-is="company-selection"] .account button{ grid-area: button; display: inline-block; margin: 0 auto; padding: 0; font-weight: bold; color: forestgreen; width: 100%; }', '', function(opts) {


        let self = this;

        this.users = [];

        let updatecontent = () => {
            if (secure) {
                console.log(secure)
                self.users = (secure.content) ? secure.users : [];
                self.update();
            }
        }

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.UserListChanged, onUserListChanged)
        }
        let unbindEvents = () => {
            delEvt(events.name.UserListChanged, onUserListChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onUserListChanged = (e) => { updatecontent(); }

        this.onSignIn = (e) => {
            let acc = e.item.user;
            secure.signin(acc.customerId);
        }

});
riot.tag2('register-entry', '', 'register-entry,[data-is="register-entry"]{ margin: 0; padding: 0; width: 100%; height: 100%; }', '', function(opts) {


        let self = this;

        let initCtrls = () => {}
        let freeCtrls = () => {}

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {}
        let unbindEvents = () => {}

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

});
riot.tag2('signin-entry', '<div class="content-area"> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div class="padtop"></div> <div ref="userSignIn" class="user-signin"> <div class="group-header"> <h4><span class="fa fa-user-lock">&nbsp;</span>&nbsp;{content.title}</h4> <div class="padtop"></div> </div> <div class="group-body"> <div class="padtop"></div> <ninput ref="userName" title="{content.label.userName}" type="text" name="userName"></ninput> <ninput ref="passWord" title="{content.label.passWord}" type="password" name="pwd"></ninput> <div class="padtop"></div> <button ref="submit"> <span class="fas fa-user">&nbsp;</span> {content.label.submit} </button> <div class="padtop"></div> <div class="padtop"></div> </div> </div> <div ref="userSelection" class="user-selection hide"> <div class="group-header"> <h4>{content.label.selectAccount}</h4> <div class="padtop"></div> </div> <div class="group-body"> <div class="padtop"></div> <div class="padtop"></div> <user-selection ref="userList" customername="{content.label.customerName}"></user-selection> <div class="padtop"></div> <button ref="cancel"> <span class="fa fa-user-times">&nbsp;</span> Cancel </button> <div class="padtop"></div> <div class="padtop"></div> </div> </div> </div>', 'signin-entry,[data-is="signin-entry"]{ margin: 0 auto; padding: 2px; position: relative; width: 100%; height: 100%; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; grid-template-areas: \'content-area\'; overflow: hidden; } signin-entry .content-area,[data-is="signin-entry"] .content-area{ grid-area: content-area; margin: 0 auto; padding: 0px; position: relative; display: block; width: 100%; height: 100%; background-color: white; background-image: url(\'public/assets/images/backgrounds/bg-15.jpg\'); background-blend-mode: multiply, luminosity; background-position: center; background-repeat: no-repeat; background-size: cover; } signin-entry .content-area .user-signin,[data-is="signin-entry"] .content-area .user-signin,signin-entry .content-area .user-selection,[data-is="signin-entry"] .content-area .user-selection{ display: block; position: relative; margin: 0 auto; padding: 0; } signin-entry .content-area .user-signin.hide,[data-is="signin-entry"] .content-area .user-signin.hide,signin-entry .content-area .user-selection.hide,[data-is="signin-entry"] .content-area .user-selection.hide{ display: none; } signin-entry .padtop,[data-is="signin-entry"] .padtop,signin-entry .content-area .padtop,[data-is="signin-entry"] .content-area .padtop,signin-entry .content-area .user-signin .group-header .padtop,[data-is="signin-entry"] .content-area .user-signin .group-header .padtop,signin-entry .content-area .user-signin .group-body .padtop,[data-is="signin-entry"] .content-area .user-signin .group-body .padtop,signin-entry .content-area .user-selection .group-header .padtop,[data-is="signin-entry"] .content-area .user-selection .group-header .padtop,signin-entry .content-area .user-selection .group-body .padtop,[data-is="signin-entry"] .content-area .user-selection .group-body .padtop{ display: block; margin: 0 auto; width: 100%; min-height: 10px; } signin-entry .content-area .user-signin .group-header,[data-is="signin-entry"] .content-area .user-signin .group-header,signin-entry .content-area .user-selection .group-header,[data-is="signin-entry"] .content-area .user-selection .group-header{ display: block; margin: 0 auto; padding: 3px; width: 30%; min-width: 300px; max-width: 500px; opacity: 0.8; background-color: cornflowerblue; border: 1px solid dimgray; border-radius: 8px 8px 0 0; } signin-entry .content-area .user-signin .group-header h4,[data-is="signin-entry"] .content-area .user-signin .group-header h4,signin-entry .content-area .user-selection .group-header h4,[data-is="signin-entry"] .content-area .user-selection .group-header h4{ display: block; margin: 0 auto; padding: 0; padding-top: 5px; font-size: 1.1rem; text-align: center; color: whitesmoke; user-select: none; } signin-entry .content-area .user-signin .group-body,[data-is="signin-entry"] .content-area .user-signin .group-body,signin-entry .content-area .user-selection .group-body,[data-is="signin-entry"] .content-area .user-selection .group-body{ display: flex; flex-direction: column; align-items: center; margin: 0 auto; padding: 0; height: auto; width: 30%; min-width: 300px; max-width: 500px; opacity: 0.8; background-color: white; border: 1px solid dimgray; border-radius: 0 0 8px 8px; } signin-entry .content-area .user-signin .group-body ninput,[data-is="signin-entry"] .content-area .user-signin .group-body ninput,signin-entry .content-area .user-selection .group-body ninput,[data-is="signin-entry"] .content-area .user-selection .group-body ninput{ background-color: white; } signin-entry .content-area .user-signin .group-body button,[data-is="signin-entry"] .content-area .user-signin .group-body button,signin-entry .content-area .user-selection .group-body button,[data-is="signin-entry"] .content-area .user-selection .group-body button{ display: inline-block; margin: 5px auto; padding: 10px 15px; color: forestgreen; font-weight: bold; cursor: pointer; width: 45%; text-decoration: none; vertical-align: middle; }', '', function(opts) {


        let self = this;
        let defaultContent = {
            title: 'Sign In',
            label: {
                selectAccount: 'Please Select Account',
                userName: 'User Name (admin)',
                passWord: 'Password',
                submit: 'Sign In',
                customerName: 'Customer Name'
            }
        }
        this.content = defaultContent;

        let updatecontent = () => {

            self.update();
        }

        let userSignIn, userSelection;
        let userName, passWord, submit, cancel;

        let initCtrls = () => {

            userSignIn = self.refs['userSignIn'];
            userSelection = self.refs['userSelection'];
            userName = self.refs['userName'];
            passWord = self.refs['passWord'];
            submit = self.refs['submit'];
            cancel = self.refs['cancel'];
        }
        let freeCtrls = () => {
            userName = null;
            passWord = null;
            submit = null;
            cancel = null;
            userSignIn = null;
            userSelection = null;
        }
        let clearInputs = () => {
            if (userName && passWord) {
                userName.clear();
                passWord.clear();
            }
            secure.reset();
        }
        let checkUserName = () => {
            let ret = false;
            let val = userName.value();
            ret = (val && val.length > 0);
            if (!ret) userName.focus()
            return ret;
        }
        let checkPassword = () => {
            let ret = false;
            let val = passWord.value();
            ret = (val && val.length > 0);
            if (!ret) passWord.focus()
            return ret;
        }

        let addEvt = (evtName, handle) => { document.addEventListener(evtName, handle) }
        let delEvt = (evtName, handle) => { document.removeEventListener(evtName, handle) }

        let bindEvents = () => {
            addEvt(events.name.LanguageChanged, onLanguageChanged)
            addEvt(events.name.ContentChanged, onContentChanged)
            addEvt(events.name.ScreenChanged, onScreenChanged)
            submit.addEventListener('click', onSubmit);
            if (cancel) cancel.addEventListener('click', onCancel);
        }
        let unbindEvents = () => {
            if (cancel) cancel.removeEventListener('click', onCancel);
            submit.removeEventListener('click', onSubmit);
            delEvt(events.name.ScreenChanged, onScreenChanged)
            delEvt(events.name.ContentChanged, onContentChanged)
            delEvt(events.name.LanguageChanged, onLanguageChanged)
        }

        this.on('mount', () => {
            initCtrls();
            bindEvents();
        });
        this.on('unmount', () => {
            unbindEvents();
            freeCtrls();
        });

        let onContentChanged = (e) => { updatecontent(); }
        let onLanguageChanged = (e) => { updatecontent(); }
        let onScreenChanged = (e) => { updatecontent(); }

        let onUserListChanged = (e) => { showUserSelection(); }
        let onSignInFailed = (e) => {

        }
        let onSubmit = (e) => {

        }
        let onCancel = (e) => {

        }

        let showUserSignIn = () => {

        }
        let showUserSelection = () => {

        }

});