import React from 'react'
import { connect } from 'react-redux'
import { 
    onEmailChangeAction, 
    onPasswordChangeAction, 
    onLogInClickAction 
} from '../state/auth'

const Auth = (props) => {
    return (
        <div>
            <input
                placeholder='email'
                type='email'
                onChange={props._onEmailChangeAction}
            />
            <input
                placeholder='password'
                type='password'
                onChange={props._onPasswordChangeAction}
            />
            <button
                onClick={() => props._onLogInClick()}
            >
                Login
            </button>
        </div>
    )
}


const mapStateToProps = (state) => ({
    // email: state.auth.email,
    // password: state.auth.password
})

const mapDispatchToState = (dispatch) => ({
    _onEmailChangeAction: (event) => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChangeAction: (event) => dispatch(onPasswordChangeAction(event.target.value)),
    _onLogInClickAction: () => dispatch(onLogInClickAction())
})

export default connect(mapStateToProps, mapDispatchToState)(Auth)