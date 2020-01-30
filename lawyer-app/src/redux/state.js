import casesReducer from "./casesReducer";
let store = {
    _state: {
        cases: [
            {
                id: 1,
                nrRef: 'a1',
                firstName: 'Roberto',
                secondName: 'Firminho',
                birthday: '11.11.11',
                city: 'Brazilia',
                description: 'Si Senior',
                files: '...'
            },
            {
                id: 2,
                nrRef: 'a2',
                firstName: 'Mohamed',
                secondName: 'Salah',
                birthday: '1.11.12',
                city: 'Egypt',
                description: 'Egyption King',
                files: '...'
            },
            {
                id: 3,
                nrRef: 'a3',
                firstName: 'Sadio',
                secondName: 'Mane',
                birthday: '10.01.86',
                city: 'Senegal',
                description: 'Senegal dad',
                files: '...'
            },
            {
                id: 4,
                nrRef: 'a4',
                firstName: 'Jordan',
                secondName: 'Henderson',
                birthday: '12.04.77',
                city: 'England',
                description: 'Captain',
                files: '...'
            }
        ],
        newCase: {}
    },
    _callSubscriber() {
        console.log("State changed")
    },

    setState(state) {
        this._state = state;
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.cases = casesReducer(this._state.cases, action);
        this._callSubscriber(this._state);
    }

}
export default store;