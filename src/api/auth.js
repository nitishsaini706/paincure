"use client"
import axios from "axios";

const url = process.env.url;

const login = async(body)=>{
    try{

        const response = axios.post(url+"login" , body)
        if(response && response.data){
            return response;
        }
        return false;
    }catch(e){
        console.error(e);
        return false;
    }
}

const register = async(body)=>{
    try{
        const response = axios.post(url+"signup" , body)
        if(response && response.data){
            return response;
        }
        return false;
    }catch(e){
        console.error(e);
        return false;
    }
}

exports.module = {login,register}