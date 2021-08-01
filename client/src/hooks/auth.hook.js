import {useState, useCallback, useEffect} from 'react'

const storageNameAdmin = 'sessionDataAdmin'
const storageName = 'sessionData'

export const useAuth = () => {
    const [tokenAdmin, setTokenAdmin] = useState(null)
    const [token, setToken] = useState(null)

    const [userId, serUserId] = useState(null)

    const login = useCallback((jwtToken, _id) => {
        setToken(jwtToken)
        serUserId(_id)
        localStorage.setItem(storageName, JSON.stringify({
            token: jwtToken,
            _id_user: _id
        }))
    }, [])
    const loginAdmin = useCallback((jwtTokenAdmin) => {
        setTokenAdmin(jwtTokenAdmin)
        localStorage.setItem(storageNameAdmin, JSON.stringify({
            tokenAdmin: jwtTokenAdmin
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        localStorage.removeItem(storageName)
    }, [])
    const logoutAdmin = useCallback(() => {
        setTokenAdmin(null)
        localStorage.removeItem(storageNameAdmin)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token, data._id_user)
        }
    }, [login])
    useEffect(() => {
        const dataAdmin = JSON.parse(localStorage.getItem(storageNameAdmin))
        if (dataAdmin && dataAdmin.token) {
            loginAdmin(dataAdmin.token)
        }
    }, [loginAdmin])

    return {login, logout, token, loginAdmin, logoutAdmin, tokenAdmin, userId}
}