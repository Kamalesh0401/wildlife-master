const showMessageBox = (e) => {
    this.___onInactive();
    const wndw = {};
    wndw.eventState = null;
    wndw.id = Utils.getUniqueID();
    wndw.context = Object.freeze({ parentID: this.Data.context.id, id: wndw.id, type: 'msg-box', windowStyle: 'top' });
    wndw.data = e;
    wndw.onClose = e.onClose;
    window.push(wndw);
}

export { showConfirmation };