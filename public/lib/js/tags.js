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