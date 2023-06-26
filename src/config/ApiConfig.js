import axios from "axios";
const PROJECT_BASE_API = "https://reqres.in/api"
const PAYLOAD_KEY = 'authorization'
const token = localStorage.getItem('token')
const api = axios.create({
    baseURL: PROJECT_BASE_API,
});

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers[PAYLOAD_KEY] = `Bearer${token}`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export const login = async (formData) => {
    const { data } = await api.post('/login', formData)
    console.log(data, '<---data')
    return data;
}

export const register = async (information) => {
    // console.log(information ,'ingo');
    const { data } = await api.post('/register', information)
    console.log(data, 'data')
    return data
}
export const get = async () => {
    const { data } = await api.get('/users')
    return data
}
export const singleuser = async (id) => {
    const { data } = await api.get(`/users/${id}`)
    return data
}
export const update = async (formData) => {
    // console.log(formData,'form dAta',id,"id from update");
    const id = formData?.data[1]?.id
    const { data } = await api.put(`/users/${id}`, formData?.data[0])
    // console.log(data, 'data');
    return data
}

export const Deletes = async (datas) => {
    const { data } = await api.delete(`/users/${datas}`)
    console.log(data, 'config')
    return data;
}
