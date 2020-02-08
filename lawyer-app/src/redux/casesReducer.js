const SET_CASES = "SET_CASES";
const ADD_CASE = 'ADD_CASE';
const UPDATE_NEW_CASE = 'UPDATE_NEW_CASE';

let initialState = {
    cases: [
        //   {
        //       id: 1,
        //       nrRef: 'a1',
        //       firstName: 'Roberto',
        //       secondName: 'Firminho',
        //       dob: '11.11.11',
        //       adress: 'Brazilia',
        //       description: 'Si Senior',
        //   },
        //   {
        //       id: 2,
        //       nrRef: 'a2',
        //       firstName: 'Mohamed',
        //       secondName: 'Salah',
        //       dob: '1.11.12',
        //       adress: 'Egypt',
        //       description: 'Egyption King',
        //   },
        //   {
        //       id: 3,
        //       nrRef: 'a3',
        //       firstName: 'Sadio',
        //       secondName: 'Mane',
        //       dob: '10.01.86',
        //       adress: 'Senegal',
        //       description: 'Senegal dad',
        //   },
        //   {
        //       id: 4,
        //       nrRef: 'a4',
        //       firstName: 'Jordan',
        //       secondName: 'Henderson',
        //       dob: '12.04.77',
        //       adress: 'England',
        //       description: 'Captain',
        //   }
    ]
}

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CASES:
            return {...state, cases: [...state.cases, ...action.cases]}
            case ADD_CASE:
          let body =  state.newCase;
          return {
            ...state,
            newCase: {},
            cases: [...state.cases, body]
          }
        case UPDATE_NEW_CASE:
            return {
              ...state,
              newCase: action.newCase
            }
        default:
            return state;
    }
}
export const setCases = (cases) => ({ type: SET_CASES, cases });
export const addCaseAC = () => {
    return {
      type: ADD_CASE
    }
  };
  export const updateNewCaseAC = (newCase) => {
    return {
      type: UPDATE_NEW_CASE,
      newCase
    }
  };

export default casesReducer;