import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU2OGI3ZGVhNWE4MzQxM2U0M2RjMTIiLCJpYXQiOjE1ODMwODU3NDN9.xX8_VysEZVWlYVLItbV-Azk88ZT772zjyn0PxyZ0x9Q'
    }
})

export const casesAPI = {
    getCases() {
        return instance.get('/cases').then(response => response.data);
        }
    }

export const loginAPI = {
    loginMe(email, password) {
        return instance.post('/auth/login', {email, password})
    },
    authMe() {
        return instance.get('/auth/me');
    }
}