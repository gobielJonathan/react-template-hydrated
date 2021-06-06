import _axios from "./axios"

export const getDummy = async() => {
    return await _axios.get("/photos")
}