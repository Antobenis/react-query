import { useMutation } from "@tanstack/react-query"
import *as api from '../../config/ApiConfig'
import { message } from "antd"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const navigate = useNavigate()
    return useMutation((formData) => api.login(formData), {
        onSuccess: (data) => {
            localStorage.setItem('token', data.token)
            message.success('Success')
            navigate('/get')
        },
        onError: (err) => {
            message.error('failed')
        }
    })
}
export const useReg = () => {
    return useMutation((information) => api.register(information), {
        onSuccess: (data) => {
            message.success('Register Successfull')
        },
        onError: (err) => {
            message.error('Somthing is wrong')
        }
    })
}
