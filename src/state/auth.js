const INPUT_EMAIL = 'auth/INPUT_EMAIL'
const INPUT_PASSWORD = 'auth/INPUT_PASSWORD'

export const onChangeEmailInputAction = value => ({
    type: INPUT_EMAIL,
    logInEmail: value
})

export const onChangePasswordInputAction = value => ({
    type: INPUT_PASSWORD,
    logInPassword: value
})

const initialState = {
    logInEmail: null,
    logInPassword: null,
} 

export default (state=initialState, action) => {
    switch(action.type){
        case INPUT_EMAIL:
        return {
            ...state,
            logInEmail: action.logInEmail
        }
        case INPUT_PASSWORD:
        return {
            ...state,
            logInPassword: action.logInPassword
        }
        default: 
        return state
    }
}


