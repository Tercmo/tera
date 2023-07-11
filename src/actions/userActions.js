
const login = (user) => {
    return {
        type: 'LOGIN', 
        payload: user,

    }
}

const logout = () => {
    return {
        type: 'LOGOUT', 

    }
}