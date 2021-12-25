import axios from 'axios'

export const getUser= async() =>{
    return await axios.get(`${process.env.REACT_APP_API}`)
}
export const createUser= async(user) =>{
    return await axios.post(`${process.env.REACT_APP_API}`,user)
}
export const getUserById= async(id) =>{
    return await axios.get(`${process.env.REACT_APP_API}/${id}`)
}
export const editUserById= async(user,id) =>{
    return await axios.put(`${process.env.REACT_APP_API}/${id}`,user)
}
export const deleteUserById= async(id) =>{
    return await axios.delete(`${process.env.REACT_APP_API}/${id}`)
}
