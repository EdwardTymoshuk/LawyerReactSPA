const SET_CASES = 'SET_CASES';

let initialState = {
    cases: [
        {
            id: 1,
            nrRef: 'a1',
            name: 'Roberto',
            surname: 'Firminho',
            birthday: '11.11.11',
            city: 'Brazilia',
            description: 'Zaibaw wsich',
            files: '...'
        },
        {
            id: 2,
            nrRef: 'a2',
            name: 'Mohamed',
            surname: 'Salah',
            birthday: '1.11.12',
            city: 'Egypt',
            description: 'Zaibaw wsich toze',
            files: '...'
        }
    ]
}

let casesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CASES:
            return {
                ...state, 
                cases: [...action.cases]
            }
            default:
            return state;
    }

}

export const setCases = (cases) => ({type: SET_CASES, cases});

export default casesReducer;