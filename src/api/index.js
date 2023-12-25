import axios from 'axios';

const URL = 'https://pavel-backender.org.kg/';

const API = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type" : 'application/json',
    }
});

API.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

  
API.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) { 
    console.log(error)
  }
  return Promise.reject(error);
});

export const login = async (data) =>{
    const res = await API.post('api/v1/auth/login/', data)
    return res.data
}

export const register = async (data) =>{
    const res = await API.post('api/registration/', data)
    return res.data
}

export const allProducts = async () =>{
    const res = await API.get('products/all/')
    return res.data
}

export const addNewItem = async () =>{
    const res = await API.get('products/all/')
    return res.data
}
export const profileInfo = async () =>{
  const res = await API.get('api/profile/')
  return res.data
}

export const changeProfileInfo = async (data) =>{
  const res = await API.put('api/profile/', data)
  return res.data
}

export const checkPhoneNumber = async (data) =>{
  const res = await API.put('api/profile/', data)
  return res.data
}