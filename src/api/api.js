import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://historic-zion-50119.herokuapp.com/',
    baseURL: 'http://localhost:3001',
    headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU2OGI3ZGVhNWE4MzQxM2U0M2RjMTIiLCJpYXQiOjE1ODMwODU3NDN9.xX8_VysEZVWlYVLItbV-Azk88ZT772zjyn0PxyZ0x9Q',
        'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }
})

export const casesAPI = {
    getCases() {
        return instance.get('/cases').then(response => response.data);
    },
    getCaseElement(caseId) {
        return instance.get('/cases/' + caseId);
    },
    updateCaseElement(caseId, caseElement) {
        let { title, date, adress, firstName, secondName, dob, description } = caseElement;
        return instance.post('/cases/' + caseId, { title, date, adress, firstName, secondName, dob, description });
    },
    deleteCaseElement(caseId) {
        return instance.delete('/cases/' + caseId);
    },
    addCaseElement(newCase) {
        return instance.post('/cases', newCase);
    }
}


export const loginAPI = {
    loginMe(email, password) {
        return instance.post('/users/login', email, password)
    },
    registerMe(name, email, password) {
        return instance.post('/users/register', { name, email, password })
    },
    authMe() {
        return instance.get('/users/me');
    }
}