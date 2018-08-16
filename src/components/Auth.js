import React from 'react'
import { connect } from 'react-redux'
import { 
    onEmailChangeAction, 
    onPasswordChangeAction, 
    onLogInClickAction 
} from '../state/auth'

import LogInByEmailAndPassword from './LogInByEmailAndPassword'


const Auth = (props) => {
    return (
        <div>
            <LogInByEmailAndPassword 
            onLogInClickAction={props._onLogInClickAction}
            onPasswordChangeAction={props._onPasswordChangeAction}
            onEmailChangeAction={props._onEmailChangeAction}
            passwordValue={props._passwordValue}
            emailValue={props._emailValue}
            />
        </div>
    )
}


const mapStateToProps = (state) => ({
    _emailValue: state.auth.email,
    _passwordValue: state.auth.password
})

const mapDispatchToState = (dispatch) => ({
    _onEmailChangeAction: (event) => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChangeAction: (event) => dispatch(onPasswordChangeAction(event.target.value)),
    _onLogInClickAction: () => dispatch(onLogInClickAction())
})

export default connect(mapStateToProps, mapDispatchToState)(Auth)