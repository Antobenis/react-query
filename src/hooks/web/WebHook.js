import { useMutation, useQuery } from "@tanstack/react-query"
import *as api from '../../config/ApiConfig'
import { message } from "antd"
export const useGet = () => {
    return useQuery(['useInfo'], () => api.get(), {
    })
}

export const useUserId = (id) => {
    return useQuery(['singleuser', id], () => api.singleuser(id), {})
}

export const useUpdate = () => {
    return useMutation((formData) => api.update(formData), {
    })
}
export const useDelete =  () => {
    return  useMutation ((datas) => api.Deletes(datas), {
        onSuccess: (data) => {
            message.warning('Deleted')
            
        },
        onError: (err) => {
            message.error('somthing is wrong')
        }
    })
}