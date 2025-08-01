import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const axiosSecure = axios.create({
    baseURL: "https://foody-hub-server.vercel.app/"
});
const useAxiosSecure = () => {
    const {user} =use(AuthContext);
    if(user){
        axiosSecure.interceptors.request.use(config=>{
        config.headers.Authorization = `Bearer ${user?.accessToken}`
        return config;
    },error=>{
        return Promise.reject(error);
    })
    }
    return axiosSecure;
};

export default useAxiosSecure;