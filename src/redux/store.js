let store = {
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
// store - OOP