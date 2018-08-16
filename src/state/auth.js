import { authFirebase } from 'firebase'

const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_USER = 'auth/LOGIN'

export const onEmailChangeAction = value => ({
    type: EMAIL_CHANGE,
    email: value
})

export const onPasswordChangeAction = value => ({
    type: PASSWORD_CHANGE,
    password: value
})

export const onLogInClickAction = () => (dispatch, getState) => {
    const { auth } = getState()
    
    authFirebase.signInWithEmailAndPassword(auth.email, auth.password)
    .catch(function (error) {
        console.log(error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage)

    })

}

const initialState = {
    email: null,
    password: null,
    user: null
} 

export default (state=initialState, action) => {
    switch(action.type){
        case EMAIL_CHANGE:
        return {
            ...state,
            email: action.email
        }
        case PASSWORD_CHANGE:
        return {
            ...state,
            password: action.password
        }
        default: 
        return state
    }
}


