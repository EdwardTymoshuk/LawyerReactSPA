const ADD_CASE = 'ADD_CASE';
const UPDATE_NEW_CASE = 'UPDATE_NEW_CASE';

let initialState = {
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
}

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CASE:
            state.cases.push(state.newCase);
            state.newCase = {};
            return state;
        case UPDATE_NEW_CASE:
            state.newCase = action.newCase;
            return state;
        default:
            return state;
    }
}
export const addCaseAC = () => {
    return {
      type: ADD_CASE
    }
  }
  export const updateNewCaseAC = (newCase) => {
    return {
      type: UPDATE_NEW_CASE,
      newCase
    }
  }
export default casesReducer;